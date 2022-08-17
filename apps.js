"use strict";
const list = document.querySelector(".list");
const submitBtn = document.querySelector(".submit");
const input = document.querySelector(".input");

const clearInput = function () {
  input.value = "";
};

let createListItem = function () {
  let listItem = document.createElement("li");
  listItem.innerHTML = input.value;
  list.appendChild(listItem);
  console.log(listItem.innerHTML);
  //remove button
  const remove = document.createElement("button");
  remove.textContent = "Remove";
  remove.classList.add("float-right");
  //complete button
  const complete = document.createElement("button");
  complete.textContent = "Complete";
  complete.classList.add("float-right");
  listItem.appendChild(complete);
  listItem.appendChild(remove);
  //functionality of buttons
  remove.addEventListener("click", function () {
    list.removeChild(listItem);
  });
  complete.addEventListener("click", function () {
    listItem.classList.add("line-through");
  });
};

document.addEventListener("keydown", function (e) {
  if (e.key === `Enter`) {
    createListItem();
  }
});

document.addEventListener("keyup", function (e) {
  if (e.key === `Enter`) {
    clearInput();
  }
});
submitBtn.addEventListener("mousedown", createListItem);
submitBtn.addEventListener("mouseup", clearInput);
