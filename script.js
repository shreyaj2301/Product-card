document.addEventListener("DOMContentLoaded", () => {
    const cartButtons = document.querySelectorAll(".add-to-cart");
    const quickViewButtons = document.querySelectorAll(".quick-view");
    const modal = document.getElementById("quick-view-modal");
    const closeModal = document.querySelector(".close-modal");

    // Add to Cart Functionality
    cartButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.textContent = "Added!";
            button.style.backgroundColor = "green";
            setTimeout(() => {
                button.textContent = "Add to Cart";
                button.style.backgroundColor = "#e44d26";
            }, 1500);
        });
    });

    // Quick View Functionality
    quickViewButtons.forEach(button => {
        button.addEventListener("click", () => {
            modal.style.display = "block";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const favoriteButtons = document.querySelectorAll(".favorite");

    favoriteButtons.forEach((button) => {
        button.addEventListener("click", function () {
            button.classList.toggle("favorited"); // Toggle the favorited class
        });
    });
});


   

