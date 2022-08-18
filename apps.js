"use strict";
const list = document.querySelector(".list");
const submitButton = document.querySelector(".submit");
const input = document.querySelector(".input");

const clearInput = function () {
  input.value = "";
};

let createListItem = function () {
  let listItem = document.createElement("li");
  listItem.innerHTML = input.value;

  list.appendChild(listItem);

  //remove button
  const removeButton = document.createElement("button"); // renamed as removeButton
  removeButton.textContent = "Remove";
  removeButton.classList.add("float-right");

  //complete button
  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.classList.add("float-right");
  listItem.appendChild(completeButton);
  listItem.appendChild(removeButton);
  //functionality of buttons
  removeButton.addEventListener("click", function () {
    list.removeChild(listItem);
  });
  completeButton.addEventListener("click", function () {
    listItem.classList.add("line-through");
  });
};

document.addEventListener("keydown", function (e) {
  if (e.key === `Enter` && input.value != "") { // fixed bug where clicking ENTER creates a empty list item
    createListItem();
  }
});

document.addEventListener("keyup", function (e) {
  if (e.key === `Enter`) {
    clearInput();
  }
});
submitButton.addEventListener("mousedown", createListItem);
submitButton.addEventListener("mouseup", clearInput);
