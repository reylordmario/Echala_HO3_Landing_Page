document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".menu-button");
    const menuLinks = document.querySelectorAll(".menu-link, .submenu-link");

    menuLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            const newText = this.textContent; // Get the text content of the clicked link
            menuButton.textContent = newText; // Set the button text to the clicked link's text content
        });
    });

    // Apply hover effect to the menu button
    menuLinks.forEach(function(link) {
        link.addEventListener("mouseenter", function() {
            const newText = this.textContent; // Get the text content of the hovered link
            menuButton.textContent = newText; // Set the button text to the hovered link's text content
        });
    });
});
