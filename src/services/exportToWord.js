// function export2Doc(element, filename = "") {
//   let preHtml =
//     "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
//   let postHtml = "</body></html>";

//   let html = preHtml + document.getElementById(element).innerHTML + postHtml;
//   let blob = new Blob(["\ufeff", html], {
//     type: "application/msword",
//   });
//   let url =
//     "data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(html);
//   filename = filename ? filename + ".doc" : "document.doc";
//   let downloadLink = document.createElement("a");
//   document.body.appendChild(downloadLink);
//   if (navigator.msSaveOrOpenBlob) {
//     navigator.msSaveOrOpenBlob(blob, filename);
//   } else {
//     downloadLink.href = url;
//     downloadLink.download = filename;
//     downloadLink.click();
//   }

//   document.body.removeChild(downloadLink);
// }

// export { export2Doc };

import { saveAs } from 'file-saver';
import htmlDocx from 'html-docx-js/dist/html-docx';

function export2Docx(element, filename = "") {
  const content = document.getElementById(element).innerHTML;
  const blob = htmlDocx.asBlob(content, { orientation: 'landscape' });
  saveAs(blob, filename || 'document.docx');
}

export { export2Docx };
