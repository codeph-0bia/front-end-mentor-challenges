const submit_btn = document.querySelector(".submit-btn");
const card_content_1 = document.querySelector(".card-content-1");
const card_content_2 = document.querySelector(".card-content-2");

const score_el = document.querySelector(".score");

let score = 3;



//TODO: Submit btn
submit_btn.addEventListener('click', onSubmit);

function onSubmit() {
    card_content_1.classList.add(".hide");
    card_content_2.classList.remove(".hide");

    score_el.textContent = score;
}

//TODO: HandleRatings buttons