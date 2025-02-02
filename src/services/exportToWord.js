import { saveAs } from 'file-saver';
import htmlDocx from 'html-docx-js/dist/html-docx';

function export2Docx(content, filename = "document.docx") {
  // Ensure content is properly formatted HTML
  const styledContent = `
    <html>
      <head>
        <style>
          @page {
            size: A4;
            margin: 20mm;
          }
          body {
            font-family: Arial, sans-serif;
            font-size: 12pt;
            margin: 20mm;
            line-height: 1.5;
          }
          h3 {
            margin-top: 20px;
          }
          p {
            margin: 5px 0;
          }
        </style>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `;

  const blob = htmlDocx.asBlob(styledContent);
  saveAs(blob, filename);
}

export { export2Docx };
