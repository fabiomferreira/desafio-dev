const express = require('express');
const multer = require('multer');

const bodyParser = require('body-parser');
const storage = multer.memoryStorage()
const upload =  multer({storage}).single('upload_file');
const app = express();
const port = 3000;

const router = express.Router();


router.get('/', (req, res) => {
	res.send('API is working!')
})

router.post('/uploadFile/', upload, (req, res) => {
	const {file} = req;
	const buffer = Buffer.from(file.buffer);
	console.log(buffer.toString());
	res.sendStatus(200)
})

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(bodyParser.json());
app.use('/v1', router);

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})