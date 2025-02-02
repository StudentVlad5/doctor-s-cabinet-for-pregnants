import { useEffect, useState } from 'react';
import { fetchData } from 'services/APIservice';
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { onLoaded, onLoading } from 'helpers/Loader/Loader';
import { Container } from 'components/baseStyles/CommonStyle.styled';
import {
  // AdditionalInfoBox,
  // AdditionalInfoBtn,
  // AdditionalInfoBtnBox,
  // AdditionalInfoDataBox,
  // AdditionalInfoDataInput,
  // AdditionalInfoDataInput2,
  // AdditionalInfoDataLable,
  // AdditionalInfoDataLable2,
  // AdditionalInfoDataLableBox,
  // AdditionalInfoForm,
  // AdditionalInfoFormInput,
  // AdditionalInfoFormLable,
  // AdditionalInfoFormText,
  BackContainer,
  BackLink,
  CheckListBox,
  CheckListBtn,
  CheckListBtnBox,
  CheckListText,
  CheckListTextBack,
  CopyIcon,
  PatientBox,
  PatientBoxTitle,
  Table,
  Td,
  // TdCheckCorrectItem,
  Tr,
  Triangle,
  WordIcon,
  // CheckBoxItem,
  // StylesCheckBoxItem,
  CheckIcon,
  CloseIcon,
  // TdRed,
  // TdSmallRed,
  // DecisionBox,
  // DecisionBoxLabel,
  // DecisionBoxInput,
  // DecisionBoxTextarea,
  // DecisionBoxTextareaLabel,
  // TdCMP,
  // TdCMPSpan,
  // DivForLabelDateTime,
} from './CheckListDetails.styled';
import clipboardCopy from 'clipboard-copy';
import { useParams } from 'react-router-dom';
// import { theme } from 'components/baseStyles/Variables.styled';
import moment from 'moment';
import { export2Docx } from 'services/exportToWord';
// import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import dayjs from 'dayjs';
import 'dayjs/locale/de';
import {
  actionsOfMedicalPersonnel,
  dischargesFromTheGenitalTract,
  evaluationOfTheConditionOfTheFetus,
  hypotensiveTreatment,
  paritet,
  personalData,
  preventionOfConvulsions,
} from 'helpers/constants';
import { getFormattedContentForWord } from 'services/getFormattedContentForWord';
import { getPlainTextContent } from 'services/getPlainTextContent';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   dateTimePicker: {
//     '& label': {
//       color: '#000000',
//       fontSize: '24px',
//     },
//     '& div': {
//       backgroundColor: '#FFFFFF',
//       fontSize: '28px',
//       fontStyle: 'normal',
//       fontWeight: 400,
//       lineHeight: 'normal',
//       borderRadius: '17px',
//       '& input': {
//         paddingTop: '20px',
//         paddingRight: '53px',
//         paddingBottom: '20px',
//         paddingLeft: '20px',
//         borderRadius: '17px',
//       },
//       '& div': {
//         '& button': {
//           '& svg': {
//             width: '35px',
//             height: '35px',
//           },
//         },
//       },
//       '& fieldset': {
//         border: '1px solid #000000',
//         '& legend': {
//           fontSize: '0.64em',
//         },
//       },
//     },
//   },
// });

export const CheckListDetails = () => {
  // const classes = useStyles();

  const [data, setData] = useState([]);
  const [isCopied, setIsCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const routerParams = useParams();
  const id = routerParams.id;

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`read?identifier=${id}`);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
        setData(data.normal);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  const handleCopy = () => {
    const plainText = getPlainTextContent(data);
    clipboardCopy(plainText)
      .then(() => {
        setIsCopied(true); // assuming you have state to show the copied message
        setTimeout(() => setIsCopied(false), 2000); // reset after 2 seconds
      })
      .catch(err => console.error('Error copying content:', err));
  };

  const handleExportToWord = () => {
    const contentForWord = getFormattedContentForWord(data);

    // Call export2Docx to save as Word file
    export2Docx(contentForWord, `Чек-лист_${data?.identifier}`)
      .then(() => {
        setIsCopied(true); // assuming you have state to show the copied message
        setTimeout(() => setIsCopied(false), 2000); // reset after 2 seconds
      })
      .catch(err => console.error('Error copying content:', err));
  };

  return (
    <Container>
      {isLoading ? onLoading() : onLoaded()}
      {error && onFetchError('Whoops, something went wrong')}
      <div id="exportContent">
        <CheckListBox>
          <div>
            <BackContainer>
              <BackLink to="#" onClick={() => window.history.back()}>
                <Triangle />
                <CheckListTextBack>Назад</CheckListTextBack>
              </BackLink>
            </BackContainer>
            {data?.time}
            <CheckListText>
              Чек-лист №{data?.identifier} <br />
              от{' '}
              {moment(new Date(+data?.identifier))
                .zone('+06:00')
                .format('DD/MM/YYYY')}
              <br />
              Бригада №{data?.application_number}
              <br />
              <span style={{ marginRight: '10px' }}>
                Предполагаемое время прибытия в больницу
              </span>
              {data?.deliveryTimeHh}:{data?.deliveryTimeMm} <br />
              Номер телефона: {data?.numberPhone}
            </CheckListText>
          </div>

          <CheckListBtnBox>
            <CheckListBtn type="button" onClick={handleCopy}>
              <CopyIcon />
              {isCopied ? 'Скопировано!' : 'Скопировать данные'}
            </CheckListBtn>
            <CheckListBtn type="button" onClick={handleExportToWord}>
              <WordIcon /> Скачать в word
            </CheckListBtn>
          </CheckListBtnBox>
        </CheckListBox>

        <PatientBox>
          <PatientBoxTitle>Личные данные пациента</PatientBoxTitle>
          <Table>
            <tbody>
              {data &&
                Object.keys(personalData).map(it => {
                  return (
                    <Tr className="rowTable" key={it}>
                      <Td>{personalData[it]}</Td>
                      <Td>{data[it]}</Td>
                    </Tr>
                  );
                })}
            </tbody>
          </Table>

          <PatientBoxTitle>Паритет</PatientBoxTitle>
          <Table>
            <tbody>
              {data &&
                Object.keys(paritet).map(it => {
                  return (
                    <Tr className="rowTable" key={it}>
                      <Td>{paritet[it]}</Td>
                      <Td>{data[it]}</Td>
                    </Tr>
                  );
                })}
            </tbody>
          </Table>

          <PatientBoxTitle>Действия медицинского персонала</PatientBoxTitle>
          <Table>
            <tbody>
              {data &&
                Object.keys(actionsOfMedicalPersonnel).map(it => {
                  return (
                    <Tr className="rowTable" key={it}>
                      <Td>{actionsOfMedicalPersonnel[it]}</Td>
                      <Td>
                        {data[it]?.toString() === 'true' ? (
                          <CheckIcon />
                        ) : data[it]?.toString() === 'false' ? (
                          <CloseIcon />
                        ) : (
                          'нет информации'
                        )}
                      </Td>
                    </Tr>
                  );
                })}
            </tbody>
          </Table>

          <PatientBoxTitle>Выделения из половых путей</PatientBoxTitle>
          <Table>
            <tbody>
              {data &&
                Object.keys(dischargesFromTheGenitalTract).map(it => {
                  return (
                    <Tr className="rowTable" key={it}>
                      <Td>{dischargesFromTheGenitalTract[it]}</Td>
                      <Td>
                        {data[it]?.toString() === 'true' ? (
                          <CheckIcon />
                        ) : data[it]?.toString() === 'false' ? (
                          <CloseIcon />
                        ) : !data[it] ? (
                          'нет информации'
                        ) : (
                          data[it]
                        )}
                      </Td>
                    </Tr>
                  );
                })}
            </tbody>
          </Table>

          <PatientBoxTitle>Профилактика судорог</PatientBoxTitle>
          <Table>
            <tbody>
              {data &&
                Object.keys(preventionOfConvulsions).map(it => {
                  return (
                    <Tr className="rowTable" key={it}>
                      <Td>{preventionOfConvulsions[it]}</Td>
                      <Td>
                        {data[it]?.toString() === 'true' ? (
                          <CheckIcon />
                        ) : data[it]?.toString() === 'false' ? (
                          <CloseIcon />
                        ) : (
                          'нет информации'
                        )}
                      </Td>
                    </Tr>
                  );
                })}
            </tbody>
          </Table>

          <PatientBoxTitle>Гипотензивное лечение</PatientBoxTitle>
          <Table>
            <tbody>
              {data &&
                Object.keys(hypotensiveTreatment).map(it => {
                  return (
                    <Tr className="rowTable" key={it}>
                      <Td>{hypotensiveTreatment[it]}</Td>
                      <Td>
                        {data[it]?.toString() === 'true' ? (
                          <CheckIcon />
                        ) : data[it]?.toString() === 'false' ? (
                          <CloseIcon />
                        ) : (
                          'нет информации'
                        )}
                      </Td>
                    </Tr>
                  );
                })}
            </tbody>
          </Table>

          <PatientBoxTitle>Оценка состояния плода</PatientBoxTitle>
          <Table>
            <tbody>
              {data &&
                Object.keys(evaluationOfTheConditionOfTheFetus).map(it => {
                  return (
                    <Tr className="rowTable" key={it}>
                      <Td>{evaluationOfTheConditionOfTheFetus[it]}</Td>
                      <Td>
                        {data[it]?.toString() === 'true' ? (
                          <CheckIcon />
                        ) : data[it]?.toString() === 'false' ? (
                          <CloseIcon />
                        ) : (
                          'нет информации'
                        )}
                      </Td>
                    </Tr>
                  );
                })}
            </tbody>
          </Table>

          <PatientBoxTitle>Данные по заполнителю</PatientBoxTitle>
          <Table style={{ marginBottom: 65 }}>
            <tbody>
              <Tr>
                <Td>ФИО сотрудника</Td>
                <Td>
                  {data?.medicalStaffFullName ? data?.medicalStaffFullName : ''}
                </Td>
              </Tr>
              <Tr>
                <Td>№ бригады СМП</Td>
                <Td>
                  №{data?.application_number ? data?.application_number : ''}
                </Td>
              </Tr>
              <Tr>
                <Td>Заполнение чек-листа начато</Td>
                <Td>
                  {data?.startTimeAutoHh && data?.startTimeAutoHh.length < 2
                    ? '0' + data?.startTimeAutoHh
                    : data?.startTimeAutoHh}
                  {data?.startTimeAutoHh && data?.startTimeAutoMm ? ':' : '-'}
                  {data?.startTimeAutoMm && data?.startTimeAutoMm.length < 2
                    ? '0' + data?.startTimeAutoMm
                    : data?.startTimeAutoMm}{' '}
                  {moment(new Date(+data?.identifier))
                    .zone('+06:00')
                    .format('DD.MM.YYYY')}
                </Td>
              </Tr>

              <Tr>
                <Td>Заполнение чек-листа завершено</Td>
                <Td>
                  {data?.endTimeAutoHh && data?.endTimeAutoHh.length < 2
                    ? '0' + data?.endTimeAutoHh
                    : data?.endTimeAutoHh}
                  {data?.endTimeAutoHh && data?.endTimeAutoMm ? ':' : '-'}
                  {data?.endTimeAutoMm && data?.endTimeAutoMm.length < 2
                    ? '0' + data?.endTimeAutoMm
                    : data?.endTimeAutoMm}{' '}
                  {moment(new Date(+data?.identifier))
                    .zone('+06:00')
                    .format('DD.MM.YYYY')}
                </Td>
              </Tr>
            </tbody>
          </Table>
        </PatientBox>
      </div>
    </Container>
  );
};
