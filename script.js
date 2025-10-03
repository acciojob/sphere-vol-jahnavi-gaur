function volume_sphere(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the radius input
    const radiusInput = document.getElementById('radius').value;

    // Convert to number
    const radius = parseFloat(radiusInput);

    // Calculate volume or set to NaN for invalid input
    let volume;
    if (isNaN(radius) || radius < 0) {
        volume = NaN;
    } else {
        volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        volume = volume.toFixed(4); // Round to 4 decimal places
    }

    // Display the result
    document.getElementById('volume').value = volume;
}

// Assign the function to the form's onsubmit
window.onload = function () {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
