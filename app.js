const chalk = require('chalk')
const yargs = require('yargs')
const note = require('./notes.js')

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true, // Must provide title argument
            type: 'string' // title argument will be string
        },
        body: {
            describe: 'Title body',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv) {
        note.addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.removeNote(argv.title)
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'read a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.readNote(argv.title)
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'List a new note',
    handler() {
        note.listNotes()
    }
})

// create update command to update note body
yargs.command({
    command: 'updatebody',
    describe: 'Update Exsiting Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: ' Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.updateNoteBody(argv.title, argv.body)
    }
})

// create update command to update note title
yargs.command({
    command: 'updatetitle',
    describe: 'Update Exsiting Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        newtitle: {
            describe: 'New Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.updateNoteTitle(argv.title,argv.newtitle)
    }
})
yargs.parse()
//console.log(yargs.argv)

