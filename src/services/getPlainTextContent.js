import {
  actionsOfMedicalPersonnel,
  dischargesFromTheGenitalTract,
  evaluationOfTheConditionOfTheFetus,
  hypotensiveTreatment,
  paritet,
  personalData,
  preventionOfConvulsions,
} from "helpers/constants";
import moment from "moment";

const formatTime = (hh, mm) => {
  if (!hh || !mm) return "-";
  return `${hh.padStart(2, "0")}:${mm.padStart(2, "0")}`;
};

export  const getPlainTextContent = (data) => {
    // Format the form data as text, preserving the structure
    let textContent = '';

    // General information (example)
    textContent += `Чек-лист №${data?.identifier}\n`;
    textContent += `Дата: ${moment(new Date(+data?.identifier))
      .zone('+06:00')
      .format('DD/MM/YYYY')}\n`;
    textContent += `Бригада №${data?.application_number}\n`;
    textContent += `Предполагаемое время прибытия в больницу: ${data?.deliveryTimeHh}:${data?.deliveryTimeMm}\n`;
    textContent += `Номер телефона: ${data?.numberPhone}\n\n`;

    // Personal Data Section
    textContent += 'Личные данные пациента:\n';
    Object.keys(personalData).forEach(key => {
      textContent += `${personalData[key]}: ${data[key] || 'нет информации'}\n`;
    });
    textContent += '\n';

    // Paritet Section
    textContent += 'Паритет:\n';
    Object.keys(paritet).forEach(key => {
      textContent += `${paritet[key]}: ${data[key] || 'нет информации'}\n`;
    });
    textContent += '\n';

    // Actions of medical personnel Section
    textContent += 'Действия медицинского персонала:\n';
    Object.keys(actionsOfMedicalPersonnel).forEach(key => {
      textContent += `${actionsOfMedicalPersonnel[key]}: ${
        data[key]?.toString() === 'true'
          ? '✔️'
          : data[key]?.toString() === 'false'
          ? '❌'
          : 'нет информации'
      }\n`;
    });
    textContent += '\n';

    //Discharges from the genital tract Section
    textContent += 'Выделения из половых путей:\n';
    Object.keys(dischargesFromTheGenitalTract).forEach(key => {
      textContent += `${actionsOfMedicalPersonnel[key]}: ${
        data[key]?.toString() === 'true'
          ? '✔️'
          : data[key]?.toString() === 'false'
          ? '❌'
          : !data[key]
          ? 'нет информации'
          : data[key]
      }\n`;
    });
    textContent += '\n';

    //Prevention Of Convulsions Section
    textContent += 'Профилактика судорог:\n';
    Object.keys(preventionOfConvulsions).forEach(key => {
      textContent += `${preventionOfConvulsions[key]}: ${
        data[key]?.toString() === 'true'
          ? '✔️'
          : data[key]?.toString() === 'false'
          ? '❌'
          : !data[key]
          ? 'нет информации'
          : data[key]
      }\n`;
    });
    textContent += '\n';

    //Hypotensive Treatment Section
    textContent += 'Гипотензивное лечение:\n';
    Object.keys(hypotensiveTreatment).forEach(key => {
      textContent += `${hypotensiveTreatment[key]}: ${
        data[key]?.toString() === 'true'
          ? '✔️'
          : data[key]?.toString() === 'false'
          ? '❌'
          : !data[key]
          ? 'нет информации'
          : data[key]
      }\n`;
    });
    textContent += '\n';

    //Evaluation of the condition of the fetus Section
    textContent += 'Оценка состояния плода:\n';
    Object.keys(evaluationOfTheConditionOfTheFetus).forEach(key => {
      textContent += `${evaluationOfTheConditionOfTheFetus[key]}: ${
        data[key]?.toString() === 'true'
          ? '✔️'
          : data[key]?.toString() === 'false'
          ? '❌'
          : !data[key]
          ? 'нет информации'
          : data[key]
      }\n`;
    });
    textContent += '\n';

    // Medical Staff Details Section
    textContent += 'Данные по заполнителю:\n';
    textContent += `ФИО сотрудника: ${
      data?.medicalStaffFullName || 'нет информации'
    }\n`;
    textContent += `№ бригады СМП: ${
      data?.application_number || 'нет информации'
    }\n`;
    textContent += `Заполнение чек-листа начато: ${formatTime(
      data?.startTimeAutoHh,
      data?.startTimeAutoMm
    )}\n`;
    textContent += `Заполнение чек-листа завершено: ${formatTime(
      data?.endTimeAutoHh,
      data?.endTimeAutoMm
    )}\n`;

    return textContent;
  };