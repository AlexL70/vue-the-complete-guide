const btnEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

function addGoal() {
    const value = inputEl.value;
    const newListEl = document.createElement("li");
    newListEl.textContent = value;
    listEl.appendChild(newListEl);
    inputEl.value = "";
}

btnEl.addEventListener("click", addGoal);