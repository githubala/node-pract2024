// const fs = require('fs');
// fs.writeFileSync('notes.text', 'now we have changed the text');
const add = require('./utils.js');
const getNotes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

yargs.command({
  command: 'add',
  describe: 'add an item',
  builder: {
    title: {
      describe: 'title of item',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'body notes',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    //console.log('add item', argv.title + ' ' + argv.body);
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: 'delete',
  describe: 'delete an item',
  handler: function (argv) {
    console.log('delete item', argv);
  },
});

yargs.command({
  command: 'list',
  describe: 'list of items',
  handler: function (argv) {
    console.log('list of items', argv);
  },
});

yargs.command({
  command: 'read',
  describe: 'read an item',
  handler: function (argv) {
    console.log('read item', argv);
  },
});

//const notes = getNotes();

//const sum = add(2, 3);
//const msg = chalk.red('error');

//const command = process.argv;
//console.log(process.argv);
//yargs.version('1.2.3');
console.log(yargs.argv);

// console.log(msg);
// console.log(notes);
// console.log(sum);
