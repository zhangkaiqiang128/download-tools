# 安装与使用

ExportTools 一个浏览器端数据导出工具包，能够下载常用的 XLS、XLSX、CSV、JSON 等格式数据以及图片文件。

## 安装

npm
```bash
npm install export-tools --save
```

浏览器
```html
<script src="https://cdn.jsdelivr.net/npm/export-tools/lib/export-tools.js"></script>
```

## 引入

ES6 引入
```javascript
// 全量引入
import ExportTools from "export-tools";

// 只使用单个方法
import { exportXLSX } from "export-tools";
```

浏览器引入
```javascript
// 浏览器引入后会全局声明 exportTools 对象
ExportTools.exportXLS([], '文件名称')；
```

# Examples

## 下载 Excel xls 格式文件

```javascript
import ExportTools from "export-tools";

// 下载表格节点数据
ExportTools.exportXLS(document.querySelector('#table-demo'), '文件名称');

// 下载数组数据
ExportTools.exportXLS([
    {姓名: '张三', 年龄: 18, 性别: '女'},
    {姓名: '李四', 年龄: 17, 性别: '男'},
    {姓名: '王五', 年龄: 22, 性别: '女'}
], '文件名称');
```

## 下载 Excel xlsx 格式文件


```javascript
// 下载表格节点数据
ExportTools.exportXLSX(document.querySelector('#table-demo'), '文件名称');

// 下载数组数据
ExportTools.exportXLSX([
    {姓名: '张三', 年龄: 18, 性别: '女'},
    {姓名: '李四', 年龄: 17, 性别: '男'},
    {姓名: '王五', 年龄: 22, 性别: '女'}
], '文件名称');
```
## 下载 CSV 格式文件

```javascript
// 下载表格节点数据
ExportTools.exportCSV(document.querySelector('#table-demo'), '文件名称');

// 下载数组数据
ExportTools.exportCSV([
    {姓名: '张三', 年龄: 18, 性别: '女'},
    {姓名: '李四', 年龄: 17, 性别: '男'},
    {姓名: '王五', 年龄: 22, 性别: '女'}
], '文件名称');
```
## 下载图片

```javascript
import ExportTools from "export-tools";

// 通过URL下载图片
ExportTools.exportImage('img.png', '图片名称', 'png');

// 通过 Image 元素下载图片
ExportTools.exportImage(document.querySelector('img'), '图片名称', 'png');

// 导出 Canvas 元素为图片
ExportTools.exportImage(document.querySelector('canvas'), '图片名称', 'png');
```

## 下载 JSON 格式文件

```javascript
import ExportTools from "export-tools";

// 需要下载的数据
const data = [
 {姓名: '张三', 年龄: 18, 性别: '女'},
 {姓名: '李四', 年龄: 17, 性别: '男'},
 {姓名: '王五', 年龄: 22, 性别: '女'}
]

ExportTools.exportJSON(data, '文件名称')
```

## 下载 TXT 格式文件

```javascript
import ExportTools from "export-tools";

ExportTools.exportText('需要下载的本文内容', '文件名称')
```
