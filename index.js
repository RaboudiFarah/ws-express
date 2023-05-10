const express = require('express');
const logger = require ('./middelware/logger');
const app = express();

app.use(logger)
 app.use(express.static(__dirname + "/public"))

// app.get ("/",(req,res)=>{
//   res.send ("Hello world");
// });


const PORT=8075
 app.listen(PORT , (err) => {
  err ? console.log(err)
:console.log(`Server is running on port ${PORT}`);
});


