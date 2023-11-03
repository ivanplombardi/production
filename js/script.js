// Example for loading images, you can expand this for videos and music
document.addEventListener("DOMContentLoaded", function () {
    const photosContainer = document.querySelector("#photos .media-container");

    // Replace with your image URLs
    const photoUrls = [
        "photos/00060005.jpg",
        "photos/00060020.jpg",
        "photos/000366250002.jpg",
        "photos/000366250005.jpg"
        // Add more image URLs here
    ];

    photoUrls.forEach((url) => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "NOLA Tuba";
        img.className = "media-item";
        
        // Set the width and height to make the image smaller
        img.style.width = "200px"; // Adjust the width as needed
        img.style.height = "auto"; // Maintain the aspect ratio
        
        photosContainer.appendChild(img);

        document.addEventListener("DOMContentLoaded", function() {
            const images = document.querySelectorAll(".enlargeable");
        
            images.forEach(function(image) {
                image.addEventListener("click", function() {
                    // Create a modal for the enlarged image
                    const modal = document.createElement("div");
                    modal.className = "modal";
                    document.body.appendChild(modal);
        
                    // Create the enlarged image inside the modal
                    const modalImage = document.createElement("img");
                    modalImage.src = this.src;
                    modal.appendChild(modalImage);
        
                    // Close the modal when clicking on it
                    modal.addEventListener("click", function() {
                        modal.remove();
                    });
                });
            });
        });
        
    });
});
