const fs=require('fs')
const chalk=require('chalk')

// Getting notes
const getNotes=()=>{
 return 'Your notes'
}
// Adding Notes
const addNotes=(title,body)=>{
const notes=loadNotes()
const duplicateNote=notes.find(n=>n.title===title)
if(!duplicateNote){
    notes.push({
        title:title,
        body:body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse("New Note added"))
}
else{
        console.log(chalk.red.inverse('Note title taken'))
}

}
//  Saving notes

const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)

}
//  Removing notes
const removeNotes=(title)=>{
    const notes=loadNotes() 
    const noteToRemove=notes.filter(n=>n.title!==title)
   
    if(notes.length>noteToRemove.length){
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(noteToRemove)
    }
    else{
        console.log(chalk.red.inverse("No note found!"))
    }

}
//  Read Note
const readNote=(title)=>{
const notes=loadNotes()
const noteToRead=notes.find(note=>note.title===title)

if(noteToRead){
    console.log(chalk.inverse.magenta(noteToRead.title))
}
else{
    console.log(chalk.red.inverse("Error"))
}
}
const listNotes=()=>{
    console.log(chalk.blue.inverse("Your Notes"))
    const notes=loadNotes()
    notes.forEach(note => {
        console.log(note.title)
    });
}
// Loading notes
const loadNotes=()=>{
    try {
        const dataBuffer=fs.readFileSync('notes.json')
const dataJSON=dataBuffer.toString()
return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }

}
module.exports={
    addNotes:addNotes,
    getNotes:getNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNote:readNote
}