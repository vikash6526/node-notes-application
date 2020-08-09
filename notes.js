const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNote()
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green.inverse('New Note Added!!'))
    } else {
        console.log(chalk.red.inverse('Note Title taken!'))
    }

}

const updateNoteBody = (title, body) => {
    const notes = loadNote()
    const findNote = notes.find((note) => note.title === title)
    const notesToSave = notes.filter((note) => note.title !== title)
    if (findNote) {
        notesToSave.push({
            title: title,
            body: findNote.body + " " + body
        })
        saveNotes(notesToSave)
        console.log(chalk.green('Note Updated!!'))
    } else {
        console.log(chalk.red('Note Not Found'))
    }
}

const updateNoteTitle = (title,newTitle) => {
    const notes = loadNote()
    const findNote = notes.find((note) => note.title === title)
    const notesToSave = notes.filter((note) => note.title !== title)
    if (findNote) {
        notesToSave.push({
            title: newTitle,
            body: findNote.body
        })
        saveNotes(notesToSave)
        console.log(chalk.green('Title Updated!!'))
    } else {
        console.log(chalk.red('Note Not Found'))
    }
}

const removeNote = (title) => {
    const notes = loadNote()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse.bold('Note Removed!!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse.bold('NO Note Found!!'))
    }
}

const readNote = (title) => {
    const notes = loadNote()
    const findNotes = notes.find((note) => note.title === title)
    if (findNotes) {
        console.log(findNotes.body)
    } else {
        console.log(chalk.red('Note Not found'))
    }
}

const listNotes = () => {
    const notes = loadNote()
    console.log(chalk.green('Your Note...'))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('note.json', dataJson)
}

const loadNote = () => {
    try {
        const dataBufer = fs.readFileSync('note.json')
        const dataJson = dataBufer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
    updateNoteBody: updateNoteBody,
    updateNoteTitle: updateNoteTitle
}