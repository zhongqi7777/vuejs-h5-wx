const insert = require("./index");

var dataStore = [
  72,
  1,
  68,
  95,
  75,
  54,
  58,
  10,
  35,
  6,
  28,
  45,
  69,
  13,
  88,
  99,
  24,
  28,
  30,
  31,
  78,
  2,
  77,
  82,
  72
];

console.log("原始数据:" + dataStore);
console.log("插入排序:" + insert.insertionSort(dataStore));

// 原始数据:72,1,68,95,75,54,58,10,35,6,28,45,69,13,88,99,24,28,30,31,78,2,77,82,72
// 插入排序:1,2,6,10,13,24,28,28,30,31,35,45,54,58,68,69,72,72,75,77,78,82,88,95,99
