import { Link } from 'react-router-dom';
import moment from 'moment';
import {
  ActiveListItemsSection,
  ActiveListItemsContainer,
  ControlContainer,
  TotalItems,
  ButtonToArhiveList,
  ButtonLogOut,
  BtnContainer,
  ItemsContainer,
  ControlPanelContainer,
  Title,
  ItemContainer,
  ItemInfo,
  ItemStatistic,
  ItemBtn,
  ItemCircle,
  ItemLine,
  BtnWrap,
} from './ActiveListItems.styled';
import { removeItem } from 'services/localStorService';
import { theme } from 'components/baseStyles/Variables.styled';
import { useEffect, useRef, useState } from 'react';
import { fetchData } from 'services/APIservice';
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { onLoaded, onLoading } from 'helpers/Loader/Loader';
import sound from '../../mp3/spokoynyiy-zvuk-poyavleniya-v-sisteme.mp3';
import {
  personalData,
  paritet,
  actionsOfMedicalPersonnel,
  dischargesFromTheGenitalTract,
  preventionOfConvulsions,
  hypotensiveTreatment,
  evaluationOfTheConditionOfTheFetus,
} from 'helpers/constants';

export const ActiveListItems = () => {
  const [checklists, setChecklists] = useState([]);
  const [uniqueChecklists, setUniqueChecklists] = useState([]);
  const [arrayOfIdentifier, setArrayOfIdentifier] = useState([]);
  const [count, setCount] = useState(true);
  const [playStatus, setPlayStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  let timer = useRef(null);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const { data } = await fetchData('read?identifier=new');
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
        setChecklists(data.normal);
        const uniqueIdentifier = [];
        const uniqueChecklists = [];
        data.normal.forEach(element => {
          const isDuplicate = uniqueIdentifier.includes(element.identifier);
          if (!isDuplicate) {
            uniqueIdentifier.push(element.identifier);
          }
        });
        uniqueIdentifier.sort(function (a, b) {
          return b - a;
        });
        uniqueIdentifier.map(it =>
          uniqueChecklists.push(
            data.normal.find(element => element.identifier === it)
          )
        );
        setUniqueChecklists(uniqueChecklists);
        if (count) {
          setArrayOfIdentifier(uniqueIdentifier);
          setCount(false);
        }
        if (!count) {
          for (let it of uniqueIdentifier) {
            if (arrayOfIdentifier.includes(it) === false) {
              setPlayStatus(true);
              setCount(true);
            }
          }
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
    timer.current = setInterval(() => getData(), 60000);
    return () => {
      clearInterval(timer.current);
      timer.current = null;
    };
  }, [arrayOfIdentifier, count]);

  useEffect(() => {
    const playSound = () => {
      document.getElementById('sound1').volume = 0.5;
      document.getElementById('sound1').mute = true;
      document.getElementById('sound1').play();
      document.getElementById('sound').click();
      setTimeout(() => setPlayStatus(false), [3000]);
    };
    if (playStatus) {
      playSound();
    }
  }, [playStatus]);

  const checkStatusCircle = (item, listOfItem) => {
    let perem = false;
    Object.keys(listOfItem).map(it => {
      if (item[it] && item[it] !== '') perem = true;
      return null;
    });
    return perem ? theme.colors.darkGreen : theme.colors.white;
  };
  const checkStatusLine = (item, listOfItem) => {
    let perem = false;
    Object.keys(listOfItem).map(it => {
      if (item[it] && item[it] !== '') perem = true;
      return null;
    });
    return perem ? theme.colors.linesBlue : theme.colors.darkGrey;
  };

  return (
    <ActiveListItemsSection>
      <ActiveListItemsContainer>
        <ControlContainer>
          <ControlPanelContainer>
            <TotalItems>
              <span style={{ whiteSpace: 'nowrap' }}>
                Текущих чек-листов:&nbsp;{uniqueChecklists?.length}
              </span>
            </TotalItems>
            <BtnContainer>
              <Link style={{ textDecoration: 'none' }} to="/archive">
                <ButtonToArhiveList
                  type="button"
                  aria-label="Перейти к списку архива чек-листов"
                >
                  Архив чек-листов
                </ButtonToArhiveList>
              </Link>
              <Link style={{ textDecoration: 'none' }} to="/">
                <ButtonLogOut
                  type="button"
                  aria-label="Выход"
                  onClick={() => removeItem('authorization_id')}
                >
                  Выход
                </ButtonLogOut>
              </Link>
            </BtnContainer>
          </ControlPanelContainer>
        </ControlContainer>
        <ItemsContainer>
          {isLoading ? onLoading() : onLoaded()}
          {error && onFetchError('Whoops, something went wrong')}
          {(checklists === undefined || checklists?.length === 0) && (
            <Title>Ожидаем заполнения чек-листов</Title>
          )}
          {uniqueChecklists &&
            uniqueChecklists?.length > 0 &&
            uniqueChecklists.map(
              item =>
                item?.identifier !== undefined &&
                item?.identifier !== '' && (
                  <ItemContainer
                    key={item?.identifier}
                    data-info={item?.identifier}
                  >
                    <ItemInfo>
                      <p>Чек-лист №{item?.identifier}</p>
                      <p>
                        от{' '}
                        {moment(new Date(+item?.identifier))
                          .zone('+06:00')
                          .format('DD/MM/YYYY')}
                      </p>
                      <p>
                        <br />
                        Бригада №{item?.application_number}
                      </p>
                      <BtnWrap>
                        <Link
                          style={{ textDecoration: 'none' }}
                          to={`/checklist/${item.identifier}`}
                        >
                          <ItemBtn type="button" aria-label="Подробнее">
                            Подробнее
                          </ItemBtn>
                        </Link>
                      </BtnWrap>
                    </ItemInfo>
                    <ItemStatistic>
                      <ItemCircle
                        $props={checkStatusCircle(item, {
                          ...personalData,
                          ...paritet,
                          ...actionsOfMedicalPersonnel,
                          ...dischargesFromTheGenitalTract,
                          ...preventionOfConvulsions,
                          ...hypotensiveTreatment,
                          ...evaluationOfTheConditionOfTheFetus,
                        })}
                      ></ItemCircle>
                      <ItemLine
                        $props={checkStatusLine(item, {
                          ...paritet,
                          ...actionsOfMedicalPersonnel,
                          ...dischargesFromTheGenitalTract,
                          ...preventionOfConvulsions,
                          ...hypotensiveTreatment,
                          ...evaluationOfTheConditionOfTheFetus,
                        })}
                      ></ItemLine>
                      <ItemCircle
                        $props={checkStatusCircle(item, {
                          ...paritet,
                          ...actionsOfMedicalPersonnel,
                          ...dischargesFromTheGenitalTract,
                          ...preventionOfConvulsions,
                          ...hypotensiveTreatment,
                          ...evaluationOfTheConditionOfTheFetus,
                        })}
                      ></ItemCircle>
                      <ItemLine
                        $props={checkStatusLine(item, {
                          ...actionsOfMedicalPersonnel,
                          ...dischargesFromTheGenitalTract,
                          ...preventionOfConvulsions,
                          ...hypotensiveTreatment,
                          ...evaluationOfTheConditionOfTheFetus,
                        })}
                      ></ItemLine>
                      <ItemCircle
                        $props={checkStatusCircle(item, {
                          ...actionsOfMedicalPersonnel,
                          ...dischargesFromTheGenitalTract,
                          ...preventionOfConvulsions,
                          ...hypotensiveTreatment,
                          ...evaluationOfTheConditionOfTheFetus,
                        })}
                      ></ItemCircle>
                      <ItemLine
                        $props={checkStatusLine(item, {
                          ...preventionOfConvulsions,
                          ...hypotensiveTreatment,
                          ...evaluationOfTheConditionOfTheFetus,
                        })}
                      ></ItemLine>
                      <ItemCircle
                        $props={checkStatusCircle(item, {
                          ...preventionOfConvulsions,
                          ...hypotensiveTreatment,
                          ...evaluationOfTheConditionOfTheFetus,
                        })}
                      ></ItemCircle>
                      <ItemLine
                        $props={checkStatusLine(item, {
                          ...hypotensiveTreatment,
                          ...evaluationOfTheConditionOfTheFetus,
                        })}
                      ></ItemLine>
                      <ItemCircle
                        $props={checkStatusCircle(item, {
                          ...hypotensiveTreatment,
                          ...evaluationOfTheConditionOfTheFetus,
                        })}
                      ></ItemCircle>
                      <ItemLine
                        $props={checkStatusLine(item, {
                          ...evaluationOfTheConditionOfTheFetus,
                        })}
                      ></ItemLine>
                      <ItemCircle
                        $props={checkStatusCircle(item, {
                          ...evaluationOfTheConditionOfTheFetus,
                        })}
                      ></ItemCircle>
                    </ItemStatistic>
                  </ItemContainer>
                )
            )}
        </ItemsContainer>
        <audio id="sound1" src={sound}></audio>
        <button
          className="hideButton"
          type="button"
          id="sound"
          onClick={() => setPlayStatus(true)}
        >
          Play
        </button>
      </ActiveListItemsContainer>
    </ActiveListItemsSection>
  );
};
