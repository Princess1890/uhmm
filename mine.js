const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const continueBtn = document.getElementById("continueBtn");

let noCount = 0;


/* =========================
   NO BUTTON
========================= */

noBtn.addEventListener("click", function () {

    noCount++;

    if (noCount === 1) {

        message.innerHTML = "Are you sure? 👀";

        noBtn.innerHTML = "NO 😭";

        moveNoButton();

    }

    else if (noCount === 2) {

        message.innerHTML = "Really really sure? 🥺";

        noBtn.innerHTML = "Still no 🙈";

        moveNoButton();

    }

    else if (noCount === 3) {

        message.innerHTML = "Please? 👉👈🤍";

        noBtn.innerHTML = "Nooo 😭";

        moveNoButton();

    }

    else {

        message.innerHTML = "Okay... I'll stop asking 🥺🤍";

        noBtn.style.display = "none";
    }

});


/* =========================
   MOVE NO BUTTON
========================= */

function moveNoButton() {

    const x = (Math.random() * 240) - 120;
    const y = (Math.random() * 160) - 80;

    noBtn.style.transform =
        `translate(${x}px, ${y}px)`;
}


/* =========================
   YES BUTTON
========================= */

yesBtn.addEventListener("click", function () {

    message.innerHTML =
        "Hehe... I knew you had a soft heart 🤭🤍";

    noBtn.style.display = "none";

    continueBtn.classList.add("show");

    createHearts();

});


/* =========================
   HEART CONFETTI
========================= */

function createHearts() {

    for (let i = 0; i < 20; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "♥";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.top = "100vh";

        heart.style.fontSize =
            (18 + Math.random() * 20) + "px";

        heart.style.color = "#e889a3";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "100";


        document.body.appendChild(heart);


        heart.animate(
            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1
                },

                {
                    transform:
                        `translateY(-100vh) rotate(${Math.random() * 360}deg)`,

                    opacity: 0
                }
            ],
            {
                duration:
                    2500 + Math.random() * 1500,

                easing: "ease-out"
            }
        );


        setTimeout(() => {
            heart.remove();
        }, 4000);

    }

}


/* =========================
   CONTINUE
========================= */

continueBtn.addEventListener("click", function () {
    window.location.href = "cute.html";
});
