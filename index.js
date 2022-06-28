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

const formatDate = (text) => 
	`${text.slice(0,4)}-${text.slice(4,6)}-${text.slice(6,8)}`

const formatValue = text => (parseInt(text)/100).toFixed(2)

const formatTime = text => `${text.slice(0,2)}:${text.slice(2,4)}:${text.slice(4,6)}`

const handleTransactions = (fileText) => {
	const fileLines = fileText.split('\n');
	console.log(fileLines[0])
	return fileLines.map(line => ({
		type: line.slice(0,1),
		date: formatDate(line.slice(1, 10)),
		value: formatValue(line.slice(9, 20)),
		cpf: line.slice(19, 31),
		card: line.slice(30, 42),
		time: formatTime(line.slice(42, 48)),
		owner: line.slice(48, 62).trim(),
		store: line.slice(62, 82).trim(),
	}));
}

router.post('/uploadFile/', upload, (req, res) => {
	const {file} = req;
	const buffer = Buffer.from(file.buffer);
	const transactions = handleTransactions(buffer.toString());
	res.send(transactions);
})

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(bodyParser.json());
app.use('/v1', router);

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})