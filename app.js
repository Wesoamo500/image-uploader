const express=require('express')
const path = require('path')
const app = express()
const multer=require('multer')


app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.listen(8000,()=>{
	console.log('Server working')
})