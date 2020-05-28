"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportImage = exports.exportText = exports.exportJSON = exports.exportCSV = exports.exportXLSX = exports.exportXLS = void 0;
var xlsx_1 = require("xlsx");
var file_saver_1 = require("file-saver");
function exportSheets(sheets, filename, type) {
    var workBook = xlsx_1.utils.book_new();
    sheets.forEach(function (sheet) { return xlsx_1.utils.book_append_sheet(workBook, sheet); });
    xlsx_1.writeFile(workBook, filename + "." + type, {
        type: 'binary',
        bookSST: false,
        bookType: type
    });
}
/**
 * 下载/导出 XLS 格式的文件
 * @param data 需要导出的数据
 * @param fileName 导出的文件名称，请勿加后缀名
 */
function exportXLS(data, fileName) {
    var sheet = null;
    if (data instanceof Array) {
        sheet = xlsx_1.utils.json_to_sheet(data);
    }
    else {
        sheet = xlsx_1.utils.table_to_sheet(data);
    }
    exportSheets([sheet], fileName, 'xls');
}
exports.exportXLS = exportXLS;
/**
 * 下载/导出 XLSX 格式的文件
 * @param data 需要导出的数据
 * @param fileName 导出的文件名称，请勿加后缀名
 */
function exportXLSX(data, fileName) {
    var sheet = null;
    if (data instanceof Array) {
        sheet = xlsx_1.utils.json_to_sheet(data);
    }
    else {
        sheet = xlsx_1.utils.table_to_sheet(data);
    }
    exportSheets([sheet], fileName, 'xlsx');
}
exports.exportXLSX = exportXLSX;
/**
 * 下载/导出 CSV 格式的文件
 * @param data 需要导出的数据
 * @param fileName 导出的文件名称，请勿加后缀名
 */
function exportCSV(data, fileName) {
    var sheet = null;
    if (data instanceof Array) {
        sheet = xlsx_1.utils.json_to_sheet(data);
    }
    else {
        sheet = xlsx_1.utils.table_to_sheet(data);
    }
    exportSheets([sheet], fileName, 'csv');
}
exports.exportCSV = exportCSV;
/**
 * 下载/导出 JSON 格式的文件
 * @param data 需要导出的数据
 * @param fileName 导出的文件名称，请勿加后缀名
 */
function exportJSON(data, filename) {
    file_saver_1.saveAs(new Blob([JSON.stringify(data)], {
        type: 'application/json;charset=utf-8'
    }), filename + ".json");
}
exports.exportJSON = exportJSON;
/**
 * 下载/导出 TXT 格式的文件
 * @param data 需要导出的数据
 * @param fileName 导出的文件名称，请勿加后缀名
 */
function exportText(data, filename) {
    file_saver_1.saveAs(new Blob([data], {
        type: 'text/plain;charset=utf-8'
    }), filename + ".txt");
}
exports.exportText = exportText;
/**
 * 下载/导出图片
 * @param target 需要导出的图片来源：URL ｜ Image 标签 ｜ Canvas 元素
 * @param fileName 导出的文件名称，请勿加后缀名
 * @param type 导出的文件格式
 */
function exportImage(target, filename, type) {
    if (type === void 0) { type = 'png'; }
    if (typeof target === 'string') {
        file_saver_1.saveAs(target, filename + "." + type);
    }
    if (target instanceof HTMLImageElement) {
        file_saver_1.saveAs(target.src, filename + "." + type);
    }
    if (target instanceof HTMLCanvasElement) {
        target.toBlob(function (blob) {
            file_saver_1.saveAs(blob, filename + "." + type);
        });
    }
}
exports.exportImage = exportImage;
var ExportTools = {
    exportImage: exportImage,
    exportXLS: exportXLS,
    exportXLSX: exportXLSX,
    exportCSV: exportCSV,
    exportJSON: exportJSON,
    exportText: exportText
};
exports.default = ExportTools;
if (window) {
    window['ExportTools'] = ExportTools;
}
//# sourceMappingURL=export-tools.js.map