//your JS code here. If required.
function wait(ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}
async function showMessage(){
	const text = document.getElementById("text").value;
	const delay = parseInt(document.getElementById("delay").value);
	const outputDiv = document.getElementById("output");

	outputDiv.innerText = "";
	await wait(delay);
	outputDiv.innerText = text;
}

document.getElementById("btn").addEventListener("click", showMessage);