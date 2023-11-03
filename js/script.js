// Example for loading images, you can expand this for videos and music
document.addEventListener("DOMContentLoaded", function () {
    const photosContainer = document.querySelector("#photos .media-container");

    // Replace with your image URLs
    const photoUrls = [
        "photos/image1.jpg",
        "photos/image2.jpg",
        "photos/image3.jpg",
        // Add more image URLs here
    ];

    photoUrls.forEach((url) => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "Image";
        img.className = "media-item";
        
        // Set the width and height to make the image smaller
        img.style.width = "200px"; // Adjust the width as needed
        img.style.height = "auto"; // Maintain the aspect ratio
        
        photosContainer.appendChild(img);
    });
});
