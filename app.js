const validator=require('validator')
const chalk=require('chalk')
const yargs=require('yargs')
const notes=require('./notes')
// Customize Version
yargs.version('1.1.0')

// Create add command

yargs.command({
    command:"add",
    describe:"Add a new note",
    builder:{
 title:{
 describe:"Note title",
 demandOption:true,
 type:"string"
},
body:{
   describe:"Description for adding a note",
   demandOption:true,
   type:'string' 
}
 },
  
    handler(argv){
       notes.addNotes(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command:"remove",
    describe:"Remove a note",
    builder:{
        title:{
            describe:" Remove title",
            demandOption:true,
            type:"string"
           }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }

})
// Create read command
yargs.command({
    command:"read",
    describe:"Reading a note",
    builder:{
        title:{
            describe:" Enter title to Read",
            demandOption:true,
            type:"string"
           }
    },
    handler(argv){
        notes.readNote(argv.title)
    }

})
// Create list command
yargs.command({
    command:"list",
    describe:"Notes List",
    handler(){
        notes.listNotes()
    }

})

yargs.parse()
//  add ,remove,read,list