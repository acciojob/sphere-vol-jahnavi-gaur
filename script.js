function volume_sphere(e) {
    //Write your code here
	e.preventDefault()
	let radius = Number(document.querySelector('#radius').value.trim())
	let volumeInput = document.querySelector('#volume')

	if(Number.isNaN(radius)){
		volume.value = 'NaN'
	}
	else{
		let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        volumeInput.value = volume.toFixed(4);
	}
	radius.value = ""
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
