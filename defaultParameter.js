"use strict";

const container = document.querySelector(".container");
const inputfield = document.querySelector(".inputfield");
const taskfield = document.querySelector(".taskfield");
const input = document.querySelector(".input");
const task = document.querySelector(".task");
const addbtn = document.querySelector(".addbtn");
const tasklist = document.querySelector(".taskList");

//INISILIZATION CODE WITH EMPTY TASK-----
tasklist.innerHTML = "";

// ----------DELETE FUNCTIONALITY HERE -----------//
const deletelist = function () {
  const delbtn = document.querySelectorAll(".deletebtn");
  delbtn.forEach((el) => {
    el.addEventListener("click", function () {
      el.closest(".taskfield").remove();
    });
  });
};

//---------ADD NEW TAST FUNCTIONALITY HERE-------//
addbtn.addEventListener("click", function (e) {
  e.preventDefault();
  addlist();
});
// add new task list--------------------------------------------------------
const addlist = function () {
  const text = input.value.trim();
  //   console.log(text);
  const html = `<div class="taskfield">
          <div class="task">${text}</div>
          <button class="deletebtn">x</button>
        </div>`;
  tasklist.insertAdjacentHTML("beforeend", html);
  input.blur();
  input.value = "";
  deletelist();
};
deletelist();

// ------------ALTERNATIVE FOR DELETION TASK-----------//
//----------------- Event delegation for delete functionality----
// tasklist.addEventListener("click", function (e) {
//   if (e.target.classList.contains("deletebtn")) {
//     e.target.closest(".taskfield").remove();
//   }
// })
