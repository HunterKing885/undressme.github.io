document.addEventListener('DOMContentLoaded', function () {
    const topLayer = document.getElementById('topLayer');
    const backgroundLayer = document.querySelector('.background-layer');
    const nextButton = document.getElementById('nextButton');

    let clickCount = 0;

    topLayer.addEventListener('click', function () {
        this.style.display = 'none';
    });

    nextButton.addEventListener('click', function () {
        clickCount++;
        topLayer.style.display = 'block'; // Show the top layer
				exitButton.addEventListener('click', function () { window.close(); // Close the window or tab 
								});

        // Adjust the loop to the number of images you have
        const imageCount = 3; // Change this to the total number of images
        clickCount = clickCount % imageCount + 1;

        topLayer.src = `images/topLayer${clickCount}.jpg`;
        backgroundLayer.src = `images/background${clickCount}.jpg`;
    });
    
    
});
