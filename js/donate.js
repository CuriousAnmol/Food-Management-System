// donate.js

// Form loading animation
const form = [...document.querySelector(".form").children];
form.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 1;
    }, i * 100);
});

// Form validation and submission
const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const foodItemInput = document.querySelector(".food-item");
const quantityInput = document.querySelector(".quantity");
const addressInput = document.querySelector(".address");
const contactInput = document.querySelector(".contact");
const expiryInput = document.querySelector(".expiry");
const submitBtn = document.querySelector(".submit-btn");

// Event listener for the submit button
submitBtn.addEventListener("click", () => {
    // Create an object to hold the donation data
    const donationData = {
        name: nameInput.value,
        email: emailInput.value,
        foodItem: foodItemInput.value,
        quantity: quantityInput.value,
        address: addressInput.value,
        contact: contactInput.value,
        expiry: expiryInput.value,
    };

    // Validate contact number format (example: 10 digits)
    const contactPattern = /^[0-9]{10}$/;
    if (!contactPattern.test(contactInput.value)) {
        alertBox("Please enter a valid 10-digit contact number.");
        return;
    }

    // Fetch API call to submit the donation data
    fetch("/submit-donation", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(donationData),
    })
    .then((res) => res.json())
    .then((data) => {
        validateData(data);
    })
    .catch((error) => {
        alertBox("An error occurred. Please try again.");
    });
});

// Function to validate the server response
const validateData = (data) => {
    if (data.success) {
        alertBox("Donation submitted successfully!");
        // Clear the form fields
        nameInput.value = '';
        emailInput.value = '';
        foodItemInput.value = '';
        quantityInput.value = '';
        addressInput.value = '';
        contactInput.value = '';
        expiryInput.value = '';
    } else {
        alertBox(data.message || "Donation submission failed.");
    }
};

// Function to show alert messages
const alertBox = (message) => {
    const alertContainer = document.querySelector(".alert-box");
    const alertMsg = document.querySelector(".alert");
    alertMsg.innerHTML = message;

    alertContainer.style.top = `5%`;
    setTimeout(() => {
        alertContainer.style.top = null;
    }, 5000);
};
