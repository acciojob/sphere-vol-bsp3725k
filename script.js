function volume_sphere() {
    //Write your code here
	event.preventDefault(); // Prevent form submission to allow in-page calculation

  const radiusInput = document.getElementById("radius").value; // Get radius input as string
  const radius = parseFloat(radiusInput); // Convert input to a floating-point number

  // Validate the input: Check if radius is a non-negative number
  if (isNaN(radius) || radius < 0) {
    document.getElementById("volume").value = "NaN"; // Set output to 'NaN' for invalid input
    return;
  }

  // Calculate the volume of the sphere: V = (4/3) * π * r^3
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display the calculated volume rounded to 4 decimal places
  document.getElementById("volume").value = volume.toFixed(4);
  
} 
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
