const SHEET_NAME = "Scores";

function doGet() {
  const sheet = getSheet_();
  const values = sheet.getDataRange().getValues();
  if (values.length <= 1) return json_({rows: []});

  const rows = values.slice(1).filter(r => r[1] !== "");
  rows.sort((a,b) => Number(b[2]||0)-Number(a[2]||0) || Number(a[3]||0)-Number(b[3]||0));

  return json_({
    rows: rows.map(r => ({
      timestamp: r[0],
      name: String(r[1]),
      score: Number(r[2]||0),
      time: Number(r[3]||0)
    }))
  });
}

function doPost(e) {
  const data = JSON.parse(e.postData.contents || "{}");
  const name = String(data.name || "").trim();
  const score = Number(data.score || 0);
  const time = Number(data.time || 0);

  if (!name) return json_({ok:false, error:"Name is required"});

  getSheet_().appendRow([new Date(), name, score, time]);
  return json_({ok:true});
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Timestamp","Name","Score","Time (sec)"]);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}