const submit_btn = document.querySelector(".submit-btn");
const card_content_1 = document.querySelector(".card-content-1");
const card_content_2 = document.querySelector(".card-content-2");

const score_el = document.querySelector(".score");
let score = 3;

const ratingBtns = document.querySelectorAll('.rating-btn');



submit_btn.addEventListener('click', onSubmit);
ratingBtns.forEach(b => {
    b.addEventListener('click', handleRatingClick);
})


function onSubmit() {
    card_content_1.classList.add("hide");
    card_content_2.classList.remove("hide");

    score_el.textContent = score;
}

function handleRatingClick(event) {
    ratingBtns.forEach(b => {
        b.classList.remove(".active");
    });

    if (event.target.classList.contains("rating-btn")) {
        event.target.classList.add("active");
    } else {
        event.target.parentElement.classList.add("active");
    }

    score = event.target.textContent;

}