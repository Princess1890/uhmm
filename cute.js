const letterBtn = document.getElementById("letterBtn");
const letter = document.getElementById("letter");
const backBtn = document.getElementById("backBtn");


letterBtn.addEventListener("click", function () {

    letter.classList.add("show");

    letterBtn.style.display = "none";

    backBtn.classList.add("show");

    setTimeout(() => {

        letter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 200);

});


backBtn.addEventListener("click", function () {

    letter.classList.remove("show");

    letterBtn.style.display = "inline-block";

    backBtn.classList.remove("show");

});