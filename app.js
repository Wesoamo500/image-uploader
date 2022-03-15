const express = require('express');
const formidable = require('express-formidable');

const router = require('./routes/image.route');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/images'));

app.use(
    formidable({
        uploadDir: './images',
        multiples: false,
    })
);

app.use('/api/images', router);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000,(req,res)=>{
	console.log('5500')
});