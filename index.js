// const userTableBody = document.getElementById("userTableBody");
const createBtn = document.getElementById("create-btn");
const taskText = document.getElementById("addTaskText");
const taskDate = document.getElementById("addTaskDate");

// function renderUsers(users) {
//   userTableBody.innerHTML = "";
//   users.forEach((user) => {
//     const row = document.createElement("tr");
//     const idCell = document.createElement("td");
//     const nameCell = document.createElement("td");
//     const emailCell = document.createElement("td");
//     idCell.textContent = user.id;
//     nameCell.textContent = user.name;
//     emailCell.textContent = user.email;
//     row.appendChild(idCell);
//     row.appendChild(nameCell);
//     row.appendChild(emailCell);
//     userTableBody.appendChild(row);
//   });
// }

// const xmlRequest = new XMLHttpRequest();

// xmlRequest.onreadystatechange = function () {
//   if (xmlRequest.readyState < 4) {
//     console.log(xmlRequest.readyState);
//     console.log("Loading...");
//   } else {
//     const users = JSON.parse(xmlRequest.response);
//     renderUsers(users);
//   }
// };

// xmlRequest.open("GET", "http://localhost:3000/", true);
// xmlRequest.send();

// async function postUser(user) {
//   const resp = await fetch("http://localhost:3000/", {
//     method: "POST",
//     body: JSON.stringify(user),
//   });
//   const users = await resp.json();
//   renderUsers(users);
// }

createBtn.addEventListener("click", () => {
  const task = {
    taskTextVar: taskText.value,
    taskDateVar: taskDate.value
  };
  localStorage.setItem("list1", JSON.stringify(task));
});

// let tempVar1 = localStorage.getItem("list1");

// console.log(tempVar1.taskTextVar);
