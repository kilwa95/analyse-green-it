const xlsx = require('xlsx')
const readXlsxFile = require('read-excel-file/node')
const fs = require('fs')
const path = require('path')
//const {SearchOrInsertGuaranteeActivity, SearchOrInsertGuaranteeCategory, SearchOrInsertGuarantee, saveGuaranteePackValue} = require ("../queries/guarantee.queries");

module.exports = {
  saveFileExelInFolder: function (dir, data) {
    const file = path.join(__dirname, dir)
    fs.writeFileSync(file, data)
    return file
  },

  readFileExel: async function (file) {
    const data = await this.readFileBySheet(file)
    const exelRows = data.exelRows
    const committed_level = exelRows[1].data
    const category = committed_level[0]
    return exelRows
  },

  getDataFromExel: function (file) {
    const workbook = xlsx.readFile(file)
    const sheets = this.getAllSheets(workbook)
    const sheetName = this.getSheetNameByIndex(sheets, 0)
    const worksheet = workbook.Sheets[sheetName]
    const json = this.convertSheetToJSON(worksheet)
    const data = this.convertData(json)
    return data
  },

  getAllSheets: function (workbook) {
    const sheets = workbook.SheetNames
    return sheets
  },

  getSheetNameByIndex: function (sheets, index) {
    const sheetName = sheets[index]
    return sheetName
  },
  convertSheetToJSON: function (worksheet) {
    const data = xlsx.utils.sheet_to_json(worksheet, {
      raw: false,
      defval: null,
    })
    return data
  },
  getColumnsByIndex: function (data, index) {
    const result = data.map((entry) => entry[Object.keys(entry)[index]])
    return result
  },
  convertData: function (data) {
    const result = data.map((item) => {
      return {
        A: item[Object.keys(item)[0]],
        B: item[Object.keys(item)[1]],
        C: item[Object.keys(item)[2]],
        D: item[Object.keys(item)[3]],
        E: item[Object.keys(item)[4]],
        F: item[Object.keys(item)[5]],
        G: item[Object.keys(item)[6]],
        H: item[Object.keys(item)[7]],
        I: item[Object.keys(item)[8]],
        J: item[Object.keys(item)[9]],
      }
    })
    return result
  },
}
