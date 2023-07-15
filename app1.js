const yargs =require('yargs');
const data10 = require ("./data10")
yargs.command({
    command :"add",
    describe :"to add an item",
    builder:{
       fname:{
           describe:"firstname",
          demandOption:true ,
          type :"string",
       },
       lname:{
           describe:"lastname",
    demandOption:true ,
          type :"string",
       },
    },
    handler: (x)=>{
      data10.addPerson(x.id,x.fname ,x.lname,x.age,x.city)
    }
   })
   yargs.command({
    command :"delete",
    describe :"to delete an item",
    builder:{
       fname:{
           describe:"firstname",
        
          type :"string",
       },
       lname:{
           describe:"lastname",
 
          type :"string",
       },
    },
    handler: (x)=> {
      data10.deleteData(x.id)
    }
   })
   yargs.command({

      command:"list",
      describe:"list data",
      handler : ()=>{
         data10.listData()
      }

   })
   yargs.command({
      command:"read" ,
      describe:"to read data" ,
      builder:{
         id :{
            describe:"this is id description in read command",
            demandOption:true,
            type:"string"
         }
      },
      handler : (x)=>{
     data10.readData(x.id) 
     
     
      }
   })
yargs.parse()
  