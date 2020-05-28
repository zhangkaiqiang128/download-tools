/**
 * 下载/导出 XLS 格式的文件
 * @param data 需要导出的数据
 * @param fileName 导出的文件名称，请勿加后缀名
 */
export declare function downloadXLS(data: Array<any> | HTMLTableElement, fileName: string): void;
/**
 * 下载/导出 XLSX 格式的文件
 * @param data 需要导出的数据
 * @param fileName 导出的文件名称，请勿加后缀名
 */
export declare function downloadXLSX(data: Array<any> | HTMLTableElement, fileName: string): void;
/**
 * 下载/导出 CSV 格式的文件
 * @param data 需要导出的数据
 * @param fileName 导出的文件名称，请勿加后缀名
 */
export declare function downloadCSV(data: Array<any> | HTMLTableElement, fileName: string): void;
/**
 * 下载/导出 JSON 格式的文件
 * @param data 需要导出的数据
 * @param fileName 导出的文件名称，请勿加后缀名
 */
export declare function downloadJSON(data: any, filename: string): void;
/**
 * 下载/导出 TXT 格式的文件
 * @param data 需要导出的数据
 * @param fileName 导出的文件名称，请勿加后缀名
 */
export declare function downloadText(data: string, filename: string): void;
/**
 * 下载/导出图片
 * @param target 需要导出的图片来源：URL ｜ Image 标签 ｜ Canvas 元素
 * @param fileName 导出的文件名称，请勿加后缀名
 * @param type 导出的文件格式
 */
export declare function downloadImage(target: string | HTMLImageElement | HTMLCanvasElement, filename: string, type?: string): void;
declare const DownloadTools: {
    downloadImage: typeof downloadImage;
    downloadXLS: typeof downloadXLS;
    downloadXLSX: typeof downloadXLSX;
    downloadCSV: typeof downloadCSV;
    downloadJSON: typeof downloadJSON;
    downloadText: typeof downloadText;
};
export default DownloadTools;
