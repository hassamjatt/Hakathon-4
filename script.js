// Get references to input fields and preview elements
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const locationInput = document.getElementById("location");
const bioInput = document.getElementById("bio");

const previewName = document.getElementById("preview-name");
const previewEmail = document.getElementById("preview-email");
const previewLocation = document.getElementById("preview-location");
const previewBio = document.getElementById("preview-bio");

// Update preview in real time as user types
nameInput.addEventListener("input", () => previewName.textContent = nameInput.value || "Your Name");
emailInput.addEventListener("input", () => previewEmail.textContent = emailInput.value || "Your Email");
locationInput.addEventListener("input", () => previewLocation.textContent = locationInput.value || "Your Location");
bioInput.addEventListener("input", () => previewBio.textContent = bioInput.value || "Your Bio");

// Function to trigger print dialog for PDF download
function generatePDF() {
    window.print();
}

