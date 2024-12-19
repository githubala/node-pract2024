const book = {
  author: 'balachandra',
  title: 'ego is enemy',
};

const fs = require('fs');

const dataJSON = JSON.stringify(book);

// const dataBuffer = fs.readFileSync('2-json.js');
// const data = dataBuffer.toString();
console.log(dataJSON);

// fs.writeFileSync('1-json.json', dataJSON);

const dataBuffer = fs.readFileSync('1-json.json');

//since the dataBuffer give you binary code like 22 24 45
console.log(dataBuffer);
//we have to convert to string using toString()
const dataStr = dataBuffer.toString();
const data = JSON.parse(dataStr);
console.log(data.author);

//below are steps to change the values

data.author = 'bala';
data.title = 'health is wealth';

//this is only changes to show
console.log(data.author);

// to make the change in the file 1-json.json  we have do the below

const changedData = JSON.stringify(data);

fs.writeFileSync('1-json.json', changedData);
