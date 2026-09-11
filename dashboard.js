// ===============================
// CITIZEN DASHBOARD JAVASCRIPT
// ===============================


// User information
const user = {
    name: "Ram Krishna",
    role: "Citizen"
};


// ===============================
// LOAD USER
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("userName").textContent = user.name;

    document.getElementById("welcomeName").textContent = user.name;

});


// ===============================
// VIEW COMPLAINT
// ===============================

function viewComplaint(complaintId) {

    window.location.href =
        "complaint-details.html?id=" + complaintId;

}


// ===============================
// NOTIFICATIONS
// ===============================

function openNotifications() {

    window.location.href = "notifications.html";

}


// ===============================
// LOGOUT
// ===============================

function logout() {

    const confirmLogout =
        confirm("Are you sure you want to logout?");

    if (confirmLogout) {

        // Remove login information
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("role");

        // Redirect to login
        window.location.href = "../login.html";

    }

}


// ===============================
// MOBILE SIDEBAR
// ===============================

const mobileMenu =
    document.querySelector(".mobile-menu");

const sidebar =
    document.querySelector(".sidebar");


if (mobileMenu) {

    mobileMenu.addEventListener("click", function () {

        sidebar.classList.toggle("show");

    });

}


// ===============================
// CLOSE SIDEBAR
// ===============================

document.addEventListener("click", function (event) {

    if (
        window.innerWidth <= 768 &&
        !sidebar.contains(event.target) &&
        !mobileMenu.contains(event.target)
    ) {

        sidebar.classList.remove("show");

    }

});