let value = 0;
const ratingButtons = document.querySelectorAll('.rating-buttons');
const ratingCard = document.getElementById('rating-card');
const tyCard = document.getElementById('ty-card');
const rate = document.querySelector('span');

const submit = document.querySelector(".submit-button");

submit.addEventListener("click", onSubmit);
ratingButtons.forEach((button) => {
  button.addEventListener("click", ratingClick);
});

function onSubmit() {
  ratingCard.classList.add("hide");
  tyCard.classList.remove("hide");
  rate.innerText = value;
}

function ratingClick(e) {
  ratingButtons.forEach((button) => {
    button.classList.remove("clicked");
  });

  if (e.target.classList.contains("rating-buttons")) {
    e.target.classList.add("clicked");
  } else {
    e.target.parentElement.classList.add("clicked");
  }

  value = e.target.value;
}