document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm"); // Ensure this matches the HTML
    const nameInput = document.getElementById("name");
    const messageInput = document.getElementById("message");
    const response = document.getElementById("response");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = nameInput.value.trim();
        const message = messageInput.value.trim();

        if (name === "" || message === "") {
            alert("Please fill out all fields.");
        } else {
            response.innerText = ` Thanks, ${name}. We'll get back to you soon!`;
            // Optional: reset form
            form.reset();
        }
    });
});
  
  // Theme Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

// Load Users 
document.getElementById("loadUsersBtn").addEventListener("click",
    async () => {
    try {
    const res = await
    fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    const userList = document.getElementById("userList");
    userList.innerHTML = "";
    users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = user.name;
    userList.appendChild(li);
    });
    } catch (err) {
    console.error("Failed to load users:", err);
    }
    });

// FAQ Toggle
document.querySelectorAll(".question").forEach((q) => {
    q.addEventListener("click", () => {
    q.nextElementSibling.classList.toggle("visible");
    });  
    });

// Back to Top Button
document.addEventListener("DOMContentLoaded", () => {
    const backToTopButton = document.getElementById("backToTop");

    if (backToTopButton) {
        // Show the button after scrolling down
        window.addEventListener("scroll", () => {
            console.log("Scroll position:", window.scrollY);
            if (window.scrollY > 100) {
                backToTopButton.style.display = "block"; // Show the button
            } else {
                backToTopButton.style.display = "none"; // Hide the button
            }
        });

        // Scroll to the top when clicked
        backToTopButton.addEventListener("click", () => {
            console.log("Back to Top button clicked!");
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});

// Real-time Clock
function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    const timeString = now.toLocaleTimeString(); // Format: HH:MM:SS
    clockElement.textContent = timeString;
}
setInterval(updateClock, 1000); //Update every second
updateClock(); //Initialize immediately