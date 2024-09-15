const input3 = document.querySelector(".input-3 input");
const input3ClearButton = document.querySelector(".input-3 button");

input3.addEventListener("input", (event) =>
  input3ClearButton.classList.toggle("visible", event.target.value)
);

input3ClearButton.addEventListener("click", (event) => {
  event.stopImmediatePropagation();
  event.preventDefault();
  input3ClearButton.classList.remove("visible");
  input3.value = "";
});

const input2 = document.querySelector(".input-2 input");
const input2SearchButton = document.querySelector(".input-2 button");
const input2Icon = document.querySelector(".input-2 .icon");
const input2Spinner = document.querySelector(".input-2 .spinner");

input2SearchButton.addEventListener("click", (event) => {
  input2.focus();
  event.stopImmediatePropagation();
  input2Icon.classList.add("hidden");
  input2Spinner.classList.add("visible");

  console.log("works");

  setTimeout(() => {
    input2Icon.classList.remove("hidden");
    input2Spinner.classList.remove("visible");
    input2.value = "";
    input2.blur();
  }, 1000);
});
