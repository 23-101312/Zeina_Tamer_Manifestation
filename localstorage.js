let users = [{
  name: "student",
  gmail: "student@eui.edu.eg",
  password: 123456,
}
];

localStorage.setItem("localUsers", JSON.stringify(users))

let cart = JSON.parse(localStorage.getItem("cart")) || [];