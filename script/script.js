const subButton = document.querySelector(".subscription-button");
const subInner = document.querySelector(".subscription-inner");

subButton.addEventListener("click", () => {
  subInner.innerHTML = ` <label class="subscription-label" for="subscription-email">Newsletter Signup</label>`;

  subButton.style.width = "450px";
  subButton.textContent = "THANK YOU!"
});
