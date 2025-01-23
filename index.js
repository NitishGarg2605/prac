const express = require('express');
const app = express();



app.get('/add', function (req, res){
  console.log("adding");
  res.json({
    "status": "success",
    "message": "Addition requested"
  })
})
app.get('/subtraction', function (req, res){
    console.log("subtracting");
    res.json({
      "status": "success",
      "message": "Subtraction requested"
    })
});







app.listen(3000,function(req,res){
    console.log('Server running on port 3000');
})