const envelope = document.getElementById("envelope");
const scene = document.getElementById("scene");
const greeting = document.getElementById("greeting");

envelope.addEventListener("click", function () {

    // Open the envelope
    scene.classList.add("opened");

    // Wait for the envelope animation
    setTimeout(() => {

        // Show Boyfriend's Day greeting
        greeting.classList.add("show");

    }, 1700);

});