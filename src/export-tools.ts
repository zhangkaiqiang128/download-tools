import { utils, Sheet, BookType, writeFile } from 'xlsx';
import { saveAs } from 'file-saver';

function exportSheets(sheets: Array<Sheet>, filename: string, type: BookType) {
  const workBook = utils.book_new();
  sheets.forEach(sheet => utils.book_append_sheet(workBook, sheet));
  writeFile(workBook,  `${filename}.${type}`, {
    type: 'binary',
    bookSST: false,
    bookType: type
  })
}

/**
 * 下载/导出 XLS 格式的文件
 * @param data 需要导出的数据
 * @param fileName 导出的文件名称，请勿加后缀名
 */
export function exportXLS(data: Array<any> | HTMLTableElement, fileName: string) {
  let sheet = null;

  if (data instanceof Array) {
    sheet = utils.json_to_sheet(data);
  } else {
    sheet = utils.table_to_sheet(data);
  }

  exportSheets([sheet], fileName, 'xls');
}

/**
 * 下载/导出 XLSX 格式的文件
 * @param data 需要导出的数据
 * @param fileName 导出的文件名称，请勿加后缀名
 */
export function exportXLSX(data: Array<any> | HTMLTableElement, fileName: string) {
  let sheet = null;

  if (data instanceof Array) {
    sheet = utils.json_to_sheet(data);
  } else {
    sheet = utils.table_to_sheet(data);
  }

  exportSheets([sheet], fileName, 'xlsx');
}

/**
 * 下载/导出 CSV 格式的文件
 * @param data 需要导出的数据
 * @param fileName 导出的文件名称，请勿加后缀名
 */
export function exportCSV(data: Array<any> | HTMLTableElement, fileName: string) {
  let sheet = null;

  if (data instanceof Array) {
    sheet = utils.json_to_sheet(data);
  } else {
    sheet = utils.table_to_sheet(data);
  }

  exportSheets([sheet], fileName, 'csv');
}


/**
 * 下载/导出 JSON 格式的文件
 * @param data 需要导出的数据
 * @param fileName 导出的文件名称，请勿加后缀名
 */
export function exportJSON(data: any, filename: string) {
  saveAs(new Blob([JSON.stringify(data)], {
    type: 'application/json;charset=utf-8'
  }), `${filename}.json`);
}

/**
 * 下载/导出 TXT 格式的文件
 * @param data 需要导出的数据
 * @param fileName 导出的文件名称，请勿加后缀名
 */
export function exportText(data: string, filename: string) {
  saveAs(new Blob([data], {
    type: 'text/plain;charset=utf-8'
  }), `${filename}.txt`);
}

/**
 * 下载/导出图片
 * @param target 需要导出的图片来源：URL ｜ Image 标签 ｜ Canvas 元素
 * @param fileName 导出的文件名称，请勿加后缀名
 * @param type 导出的文件格式
 */
export function exportImage(target: string | HTMLImageElement | HTMLCanvasElement, filename: string, type: string = 'png') {
  if (typeof target === 'string') {
    saveAs(target, `${filename}.${type}`);
  }

  if (target instanceof HTMLImageElement) {
    saveAs(target.src, `${filename}.${type}`);
  }

  if (target instanceof HTMLCanvasElement) {
    target.toBlob((blob) => {
      saveAs(blob, `${filename}.${type}`);
    })
  }
}

const ExportTools = {
  exportImage,
  exportXLS,
  exportXLSX,
  exportCSV,
  exportJSON,
  exportText
}

export default ExportTools

if (window) {
  window['ExportTools'] = ExportTools
}
