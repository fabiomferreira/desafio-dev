
import React, {useState} from 'react';

const TransactionForm = () => {
	const [file, setFile] = useState(null)

	const handleSubmit = async (event) => {
		event.preventDefault();
		if(!file) return false;
		const formData  = new FormData();
		formData.append('upload_file', file);
		const response = await fetch('/v1/uploadFile', {method: 'POST', body: formData})
		const data = await response.json()
		console.log(data)
	}

	const handleFileChange = event => {
		setFile(event.target.files[0]);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input id="file" type="file" name="upload_file" onChange={handleFileChange}/>
			<button type="submit" required>Send</button>
		</form>
	)
}

export default TransactionForm;