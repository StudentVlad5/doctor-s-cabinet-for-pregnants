import React, { useState, useEffect } from 'react';
import { utils as XLSXUtils, writeFile as writeXLSX } from 'xlsx';
import moment from 'moment';
import { fetchData } from 'services/APIservice';
import { PaginationBlock } from 'helpers/Pagination/Pagination';
import { getFromStorage } from 'services/localStorService';
import { onLoading, onLoaded } from 'helpers/Loader/Loader';
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import {
  BtnFilter,
  BtnWrapper,
  ClearFiltersBtn,
  DownloadExcel,
  Link,
  Table,
  TableData,
  TableFilter,
  TableHead,
  TableRow,
} from './ArchiveTable.styled';

import { ReactComponent as Close } from 'images/svg/close.svg';
import { ReactComponent as Excel } from 'images/svg/excel.svg';
import { FaFilter } from 'react-icons/fa';

const initialState = {
  filterChecklist: '',
  filterBrigadeSMP: '',
  filterPatientINN: '',
  filterPatientFIO: '',
  filterPlaceState: '',
  filterEmployeeID: '',
  filterStatusChecklist: '',
  filterDateStartChecklist: '',
};

export const ArchiveTable = () => {
  const [checklists, setChecklists] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [uniqueChecklists, setUniqueChecklists] = useState([]);
  const [filterChecklists, setFilterChecklists] = useState([]);
  const [filters, setFilters] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData('read?identifier=old');
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }

        const sortedData = data.normal.sort(
          (a, b) => b.identifier - a.identifier
        );

        /* --- get unique identifier from archive checklists--- */
        const uniqueIdentifiers = [];
        // const unique = archiveChecklists.filter(element => {
        const unique = sortedData.filter(element => {
          const isDuplicate = uniqueIdentifiers.includes(element.identifier);
          if (!isDuplicate) {
            uniqueIdentifiers.push(element.identifier);
            return true;
          }
          return false;
        });
        unique.forEach(it => {
          if (!it.application_number) {
            it.application_number = '';
          }
          if (!it.patientINN) {
            it.patientINN = '';
          }
          if (!it.patientFullName) {
            it.patientFullName = '';
          }
          if (!it.employeeID) {
            it.employeeID = '';
          }
          if (!it.checkStatus) {
            it.checkStatus = '';
          }
          if (!it.placeState) {
            it.placeState = '';
          }
        });
        setUniqueChecklists(uniqueIdentifiers);
        setChecklists(unique);
        setFilterChecklists(unique);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
        setReload(false);
      }
    })();
  }, [reload]);

  const handleChangeFilter = e => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    const selectedFilters = {
      ...filters,
      [name]: value,
    };
    setFilters(selectedFilters);
    document.querySelector(`button[id='${name}']`).classList.add('active');
  };

  const startFilterChecklists = e => {
    e.preventDefault();
    let peremOfFilter = [];
    peremOfFilter = checklists
      .map(item => {
        if (
          item.identifier
            .toString()
            .toLowerCase()
            .includes(filters['filterChecklist'].toString().toLowerCase()) &&
          item.application_number
            ?.split('/')
            .join('')
            .includes(filters['filterBrigadeSMP']) &&
          item.patientINN
            ?.split('')
            .join('')
            .includes(filters['filterPatientINN']) &&
          item.patientFullName
            ?.split('')
            .join('')
            .toLowerCase()
            .includes(filters['filterPatientFIO'].toString().toLowerCase()) &&
          item.placeState
            ?.toString()
            .toLowerCase()
            .includes(filters['filterPlaceState'].toString().toLowerCase()) &&
          item.employeeID
            ?.split('')
            .join('')
            .includes(filters['filterEmployeeID']) &&
          moment(new Date(+item.identifier))
            .zone('+06:00')
            .format('DD.MM.YYYY')
            .includes(filters['filterDateStartChecklist'])
        ) {
          return item;
        }
        return null;
      })
      .filter(item => item !== null);
    setCurrent(1);
    setFilterChecklists(peremOfFilter);
  };

  const handleClearAllFilters = e => {
    setFilters(initialState);
    const listOfInput = document.querySelectorAll('.active');
    listOfInput.forEach(item => item.classList.remove('active'));
    setReload(true);
  };

  const handleSearchOnEnter = e => {
    if (e.key === 'Enter') {
      startFilterChecklists(e);
    }
  };

  const toggleFilterItem = e => {
    e.stopPropagation();
    document
      .querySelector(`input[name='${e.currentTarget.id}']`)
      .classList.toggle('active');
  };

  // table pagination
  const [perPage] = useState(20);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(
    getFromStorage('page') ? getFromStorage('page') : 1
  );

  const handleDownloadExcel = () => {
    const dataForExcel = filterChecklists.map(checklist => ({
      'Чек-лист': checklist?.identifier ? checklist.identifier : '',
      '№ Бригады СМП': checklist?.application_number
        ? checklist?.application_number
        : '',
      'ИИН пациента': checklist?.patientINN ? checklist?.patientINN : '',
      'ФИО пациента': checklist?.patientFullName
        ? checklist?.patientFullName
        : '',
      'Место размещения': checklist?.placeState ? checklist?.placeState : '',
      'Идентификатор сотрудника': checklist?.employeeID
        ? checklist?.employeeID
        : '',
      'Статус чек-листа': checklist?.checkStatus ? checklist?.checkStatus : '',
      'Дата Чек-листа': checklist?.identifier
        ? moment(new Date(+checklist?.identifier))
            .zone('+06:00')
            .format('DD.MM.YYYY')
        : '',
    }));

    const ws = XLSXUtils.json_to_sheet(dataForExcel);
    const wb = XLSXUtils.book_new();
    XLSXUtils.book_append_sheet(wb, ws, 'Данные Чек-листов');
    writeXLSX(wb, 'Чек-листы.xlsx');
  };

  return (
    <>
      <BtnWrapper>
        <ClearFiltersBtn
          type="button"
          id="filters"
          name="clearFilters"
          aria-label="Сбросить фильтры"
          onClick={e => {
            handleClearAllFilters(e);
          }}
        >
          <Close /> <span>Сбросить фильтры</span>
        </ClearFiltersBtn>
        <DownloadExcel
          type="button"
          aria-label="Скачать в excel"
          onClick={handleDownloadExcel}
        >
          <Excel /> <span>Скачать в excel</span>
        </DownloadExcel>
      </BtnWrapper>
      {isLoading ? onLoading() : onLoaded()}
      {error && onFetchError('Whoops, something went wrong')}
      <Table>
        <TableFilter>
          <TableRow>
            <TableHead>
              <span>Чек-лист</span>
              <input
                type="text"
                name="filterChecklist"
                placeholder=""
                value={filters['filterChecklist']}
                onKeyDown={e => handleSearchOnEnter(e)}
                onChange={e => handleChangeFilter(e)}
              />
              <BtnFilter
                type="button"
                id="filterChecklist"
                onClick={e => {
                  toggleFilterItem(e);
                }}
              >
                <FaFilter />
              </BtnFilter>
            </TableHead>
            <TableHead>
              <span>
                № Бригады <br />
                СМП
              </span>
              <input
                type="text"
                name="filterBrigadeSMP"
                placeholder=""
                value={filters['filterBrigadeSMP']}
                onKeyDown={e => handleSearchOnEnter(e)}
                onChange={e => handleChangeFilter(e)}
              />
              <BtnFilter
                type="button"
                id="filterBrigadeSMP"
                onClick={e => {
                  toggleFilterItem(e);
                }}
              >
                <FaFilter />
              </BtnFilter>
            </TableHead>
            <TableHead>
              <span>
                ИИН <br />
                пациента
              </span>
              <input
                type="text"
                name="filterPatientINN"
                placeholder=""
                value={filters['filterPatientINN']}
                onKeyDown={e => handleSearchOnEnter(e)}
                onChange={e => handleChangeFilter(e)}
              />
              <BtnFilter
                type="button"
                id="filterPatientINN"
                onClick={e => {
                  toggleFilterItem(e);
                }}
              >
                <FaFilter />
              </BtnFilter>
            </TableHead>
            <TableHead>
              <span>
                ФИО <br />
                пациента
              </span>
              <input
                type="text"
                name="filterPatientFIO"
                placeholder=""
                value={filters['filterPatientFIO']}
                onKeyDown={e => handleSearchOnEnter(e)}
                onChange={e => handleChangeFilter(e)}
              />
              <BtnFilter
                type="button"
                id="filterPatientFIO"
                onClick={e => {
                  toggleFilterItem(e);
                }}
              >
                <FaFilter />
              </BtnFilter>
            </TableHead>
            <TableHead>
              <span>
                Место <br />
                размещения
              </span>
              <input
                type="text"
                name="filterPlaceState"
                placeholder=""
                value={filters['filterPlaceState']}
                onKeyDown={e => handleSearchOnEnter(e)}
                onChange={e => handleChangeFilter(e)}
              />
              <BtnFilter
                type="button"
                id="filterPlaceState"
                onClick={e => {
                  toggleFilterItem(e);
                }}
              >
                <FaFilter />
              </BtnFilter>
            </TableHead>
            <TableHead>
              <span>
                Идентификатор <br />
                сотрудника
              </span>
              <input
                type="text"
                name="filterEmployeeID"
                placeholder=""
                value={filters['filterEmployeeID']}
                onKeyDown={e => handleSearchOnEnter(e)}
                onChange={e => handleChangeFilter(e)}
              />
              <BtnFilter
                type="button"
                id="filterEmployeeID"
                onClick={e => {
                  toggleFilterItem(e);
                }}
              >
                <FaFilter />
              </BtnFilter>
            </TableHead>
            <TableHead>
              <span>
                Статус <br />
                чек-листа
              </span>
              <input
                type="text"
                name="filterStatusChecklist"
                placeholder=""
                value={filters['filterStatusChecklist']}
                onKeyDown={e => handleSearchOnEnter(e)}
                onChange={e => handleChangeFilter(e)}
              />
              <BtnFilter
                type="button"
                id="filterStatusChecklist"
                onClick={e => {
                  toggleFilterItem(e);
                }}
              >
                <FaFilter />
              </BtnFilter>
            </TableHead>
            <TableHead>
              <span>
                Дата <br />
                чек-листа
              </span>
              <input
                type="text"
                name="filterDateStartChecklist"
                placeholder=""
                value={filters['filterDateStartChecklist']}
                onKeyDown={e => handleSearchOnEnter(e)}
                onChange={e => handleChangeFilter(e)}
              />
              <BtnFilter
                type="button"
                id="filterDateStartChecklist"
                onClick={e => {
                  toggleFilterItem(e);
                }}
              >
                <FaFilter />
              </BtnFilter>
            </TableHead>
          </TableRow>
        </TableFilter>
        <tbody>
          {filterChecklists.length > 0 &&
            !error &&
            filterChecklists
              .slice((current - 1) * size, current * size)
              .map(item => (
                <TableRow key={item.identifier}>
                  <TableData>
                    <Link to={`/checklist/${item.identifier}`}>
                      {item.identifier}
                    </Link>
                  </TableData>
                  <TableData>{item.application_number}</TableData>
                  <TableData>{item.patientINN}</TableData>
                  <TableData>{item.patientFullName}</TableData>
                  <TableData>{item.placeState}</TableData>
                  <TableData>{item.employeeID}</TableData>
                  <TableData>{item.checkStatus}</TableData>
                  <TableData>
                    {moment(new Date(+item?.identifier))
                      .zone('+06:00')
                      .format('DD.MM.YYYY')}
                  </TableData>
                </TableRow>
              ))}
        </tbody>
      </Table>
      {filterChecklists.length > 0 && !error && (
        <PaginationBlock
          items={filterChecklists}
          size={size}
          setSize={setSize}
          current={current}
          setCurrent={setCurrent}
        />
      )}
    </>
  );
};
