//register

let userName = document.getElementById("userName");

let userEmail = document.getElementById("userEmail");

let userPassword = document.getElementById("userPassword");

let btnRegister = document.getElementById("btnRegister");

/* Btn Register And Login In index Page */
let registerBtn = document.getElementById("registerBtn");
let logoutBtn = document.getElementById("logout");

/* check */
let users;
if (localStorage.getItem("userData") == null) {
  users = [];
} else {
  users = JSON.parse(localStorage.getItem("userData"));
  console.log(users);
}

/* ========= Register =========  */

function register() {
  if (
    nameValidition() &&
    emailValidition() &&
    passwordValidition() &&
    !isEmailExist()
  ) {
    let valueInputRegister = {
      name: userName.value,
      email: userEmail.value,
      password: userPassword.value,
    };

    users.push(valueInputRegister);
    console.log("Registration successful");
    localStorage.setItem("userData", JSON.stringify(users));
    let successRegister = document.getElementById("successRegister");
    successRegister.classList.replace("d-none", "d-block");

    setTimeout(() => {
      window.location.href = "login.html";
    }, 3000);
  } else {
    console.log("Registration failed. Validation or user already exists.");
    return false;
  }
}

/* ========= Login =========  */
function login() {
  let userLoginEmail = document.getElementById("userLoginEmail").value;
  let userLoginPassword = document.getElementById("userLoginPassword").value;
  let invalidValues = document.getElementById("invalidValues");
  let successLogin = document.getElementById("successLogin");

  invalidValues.classList.replace("d-blok", "d-none");
  successLogin.classList.replace("d-blok", "d-none");

  if (emailValiditionLogin() && passwordValiditionLogin()) {
    let userFound = false;

    for (let i = 0; i < users.length; i++) {
      if (
        users[i].email === userLoginEmail &&
        users[i].password === userLoginPassword
      ) {
        console.log("Login successful");
        userFound = true;
        localStorage.setItem("name", users[i].name);
        window.location.href = "index.html";
        return;
      }
    }

    if (!userFound) {
      invalidValues.classList.replace("d-none", "d-blok");
    }
  }
}

/* ========= Validation Register =========  */

function nameValidition() {
  let nameValid = document.getElementById("nameValid");
  let regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/;
  if (regex.test(userName.value) == true && userName.value != "") {
    nameValid.classList.replace("d-block", "d-none");
    return true;
  } else {
    nameValid.classList.replace("d-none", "d-block");
    return false;
  }
}

function emailValidition() {
  let validEmailRegister = document.getElementById("validEmailRegister");
  let regex = /@[a-z]{5,10}(\.com)$/;
  if (regex.test(userEmail.value) == true && userEmail.value != "") {
    validEmailRegister.classList.replace("d-block", "d-none");

    return true;
  } else {
    validEmailRegister.classList.replace("d-none", "d-block");

    return false;
  }
}

function passwordValidition() {
  let validPasswordRegister = document.getElementById("validPasswordRegister");
  let regex = /^.{5,15}$/;
  if (regex.test(userPassword.value) == true && userPassword.value != "") {
    validPasswordRegister.classList.replace("d-block", "d-none");

    return true;
  } else {
    validPasswordRegister.classList.replace("d-none", "d-block");

    return false;
  }
}

/* ========= Validation Login =========  */

function emailValiditionLogin() {
  let userLoginEmail = document.getElementById("userLoginEmail");
  let validationLoginemail = document.getElementById("validationLoginemail");
  let regex = /@[a-z]{5,10}(\.com)$/;
  if (regex.test(userLoginEmail.value) == true && userLoginEmail.value != "") {
    validationLoginemail.classList.replace("d-block", "d-none");

    return true;
  } else {
    validationLoginemail.classList.replace("d-none", "d-block");

    return false;
  }
}

function passwordValiditionLogin() {
  let userLoginPassword = document.getElementById("userLoginPassword");

  let validationLoginPassword = document.getElementById(
    "validationLoginPassword"
  );
  let regex = /^.{5,15}$/;
  if (
    regex.test(userLoginPassword.value) == true &&
    userLoginPassword.value != ""
  ) {
    validationLoginPassword.classList.replace("d-block", "d-none");

    return true;
  } else {
    validationLoginPassword.classList.replace("d-none", "d-block");

    return false;
  }
}

function isEmailExist() {
  let isExist = document.getElementById("isExist");

  for (let i = 0; i < users.length; i++) {
    if (users[i].email.toLowerCase() === userEmail.value.toLowerCase()) {
      isExist.classList.replace("d-none", "d-block");
      return true;
    }
  }

  isExist.classList.replace("d-block", "d-none");

  return false;
}

function showAndDisplay() {
  let nameUser = document.getElementById("nameUser");

  if (localStorage.getItem("name")) {
    registerBtn.classList.replace("d-block", "d-none");
    logoutBtn.classList.add("d-block");
    let username = localStorage.getItem("name");
    nameUser.innerHTML = username;
  } else {
    registerBtn.classList.replace("d-none", "d-block");
    logoutBtn.classList.add("d-none");
  }
}

function logout() {
  let nameUser = document.getElementById("nameUser");
  localStorage.removeItem("name");
  nameUser.innerHTML = "";
  window.location.href = "login.html";
}

/* ========= Products =========  */

let products = [
  {
    img: "images/1.webp",
    title: "Iphone",
    price: 20000,
  },
  {
    img: "images/1.webp",
    title: "Iphone",
    price: 300000,
  },
  {
    img: "images/3.webp",
    title: "Iphone",
    price: 15000,
  },
];

function dispalyProduct() {
  let empty = "";
  for (let i = 0; i < products.length; i++) {
    empty += `
          <div class="col-md-4">
            <div class="item">
              <img src="${products[i].img}" class="w-100" alt="${products[i].name}">
              <h3>${products[i].title}</h3>
              <p>${products[i].price} EGP</p>
              <div class="icons">
                <i class="fa-solid fa-heart text-danger"></i>
                <i class="fa-solid fa-cart-shopping text-warning"></i>
              </div>
            </div>
          </div>`;
  }

  document.getElementById("containerProducts").innerHTML = empty;
}

document.addEventListener("DOMContentLoaded", function () {
  showAndDisplay();
  dispalyProduct();
});
