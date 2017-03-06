const express=require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.listen(PORT,() => {
	console.log("Listening on Port:%s",PORT)
	console.log("Stop with Ctrl+C");
});