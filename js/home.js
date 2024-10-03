// home.js

// Check if user is logged in
window.onload = () => {
    if (!sessionStorage.name) {
        // If not logged in, redirect to login page
        window.location.href = "login.html";
    }
};

// Logout function
function logout() {
    // Clear session storage
    sessionStorage.clear();
    // Redirect to login page
    window.location.href = "login.html";
}
