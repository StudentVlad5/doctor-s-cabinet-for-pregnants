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

export const getFormattedContentForWord = (data) => {
  let htmlContent = "";

  // General Information
  htmlContent += `<p><strong>Чек-лист №${data?.identifier}</strong></p>`;
  htmlContent += `<p><strong>Дата:</strong> ${moment(
    new Date(+data?.identifier)
  )
    .zone("+06:00")
    .format("DD/MM/YYYY")}</p>`;
  htmlContent += `<p><strong>Бригада №:</strong> ${data?.application_number}</p>`;
  htmlContent += `<p><strong>Предполагаемое время прибытия в больницу:</strong> ${data?.deliveryTimeHh}:${data?.deliveryTimeMm}</p>`;
  htmlContent += `<p><strong>Номер телефона:</strong> ${data?.numberPhone}</p>`;

  // Personal Data Section
  htmlContent += "<h3>Личные данные пациента:</h3>";
  Object.keys(personalData).forEach((key) => {
    htmlContent += `<p><strong>${personalData[key]}:</strong> ${
      data[key] || "нет информации"
    }</p>`;
  });

  // Paritet Section
  htmlContent += "<h3>Паритет:</h3>";
  Object.keys(paritet).forEach((key) => {
    htmlContent += `<p><strong>${paritet[key]}:</strong> ${
      data[key] || "нет информации"
    }</p>`;
  });

  // Actions of medical personnel Section
  htmlContent += "<h3>Действия медицинского персонала:</h3>";
  Object.keys(actionsOfMedicalPersonnel).forEach((key) => {
    htmlContent += `<p><strong>${actionsOfMedicalPersonnel[key]}:</strong> ${
      data[key]?.toString() === "true"
        ? "✔️"
        : data[key]?.toString() === "false"
        ? "❌"
        : "нет информации"
    }</p>`;
  });

  //Discharges from the genital tract Section
  htmlContent += "<h3>Выделения из половых путей:</h3>";
  Object.keys(dischargesFromTheGenitalTract).forEach((key) => {
    htmlContent += `<p><strong>${
      dischargesFromTheGenitalTract[key]
    }:</strong> ${
      data[key]?.toString() === "true"
        ? "✔️"
        : data[key]?.toString() === "false"
        ? "❌"
        : !data[key]
        ? "нет информации"
        : data[key]
    }</p>`;
  });

  //Prevention Of Convulsions Section
  htmlContent += "<h3>Профилактика судорог:</h3>";
  Object.keys(preventionOfConvulsions).forEach((key) => {
    htmlContent += `<p><strong>${preventionOfConvulsions[key]}:</strong> ${
      data[key]?.toString() === "true"
        ? "✔️"
        : data[key]?.toString() === "false"
        ? "❌"
        : data[key]
        ? data[key]
        : "нет информации"
    }</p>`;
  });

  //Hypotensive Treatment Section
  htmlContent += "<h3>Гипотензивное лечение:</h3>";
  Object.keys(hypotensiveTreatment).forEach((key) => {
    htmlContent += `<p><strong>${hypotensiveTreatment[key]}:</strong> ${
      data[key]?.toString() === "true"
        ? "✔️"
        : data[key]?.toString() === "false"
        ? "❌"
        : data[key]
        ? data[key]
        : "нет информации"
    }</p>`;
  });

  //Evaluation of the condition of the fetus Section
  htmlContent += "<h3>Оценка состояния плода:</h3>";
  Object.keys(evaluationOfTheConditionOfTheFetus).forEach((key) => {
    htmlContent += `<p><strong>${
      evaluationOfTheConditionOfTheFetus[key]
    }:</strong> ${
      data[key]?.toString() === "true"
        ? "✔️"
        : data[key]?.toString() === "false"
        ? "❌"
        : data[key]
        ? data[key]
        : "нет информации"
    }</p>`;
  });

  // Medical Staff Details Section
  htmlContent += "<h3>Данные по заполнителю:</h3>";
  htmlContent += `<p><strong>ФИО сотрудника:</strong> ${
    data?.medicalStaffFullName || "нет информации"
  }</p>`;
  htmlContent += `<p><strong>№ бригады СМП:</strong> ${
    data?.application_number || "нет информации"
  }</p>`;
  htmlContent += `<p><strong>Заполнение чек-листа начато:</strong> ${formatTime(
    data?.startTimeAutoHh,
    data?.startTimeAutoMm
  )}</p>`;
  htmlContent += `<p><strong>Заполнение чек-листа завершено:</strong> ${formatTime(
    data?.endTimeAutoHh,
    data?.endTimeAutoMm
  )}</p>`;

  return htmlContent;
};
