function volume_sphere(e) {
    //Write your code here
	e.preventDefault()
	let radius = Number(document.querySelector('#radius').value.trim())
	let volume = document.querySelector('#volume')

	if(Number.isNaN(radius)){
		volume.value = 'NaN'
	}
	else{
		volume.value = (4/3)*3.14*radius*radius*radius
	}
	radius.value = ""
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
