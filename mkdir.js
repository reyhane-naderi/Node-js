
    var fs = require('fs');
    var args = process.argv;
    const newFolder = process.argv[2]
    count = process.argv[3]
    console.log(newFolder)
    for (let i= 1 ; i <= count ; i++) {
        
       fs.mkdir("./"+ newFolder + i, (err)=>{
        i++;
        (err)
    })   
    }
  
