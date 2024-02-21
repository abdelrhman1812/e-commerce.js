//register

let userName = document.getElementById("userName");

let userEmail = document.getElementById("userEmail");

let userPassword = document.getElementById("userPassword");

let btnRegister = document.getElementById("btnRegister");

/* Btn Register And Login In index Page */
let registerBtn = document.getElementById("registerBtn");
let logoutBtn = document.getElementById("logoutBtn");

/* element contain Total Price */
let total = document.getElementById("total");


let lengthCart = document.getElementById("lengthCart")

let numOfItems;
/* check about users in array or no */
let users;
if (localStorage.getItem("userData") == null) {
  users = [];
} else {
  users = JSON.parse(localStorage.getItem("userData"));
  // console.log(users);
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
    console.log(" user already exists.");
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

function logout() {
  let nameUser = document.getElementById("nameUser");
  localStorage.removeItem("name");
  nameUser.innerHTML = "";
  window.location.href = "login.html";




}


/* =========================== Products ===========================  */

/* ========= all products =========  */

let products = [
  {
    id: 1,
    img: "images/mobile/phone-01.jpg",
    title: "Iphone 1",
    price: 100,
    qunet: 1,
  },
  {
    id: 2,
    img: "images/mobile/phone-02.jpg",
    title: "Iphone 2",
    price: 200,
    qunet: 1,
  },
  {
    id: 3,
    img: "images/mobile/phone-03.png",
    title: "Iphone 3",
    price: 15000,
    qunet: 1,
  },
  {
    id: 4,
    img: "images/mobile/phone-04.jpg",
    title: "Iphone 4",
    price: 15000,
    qunet: 1,
  },

  {
    id: 5,
    img: "images/mobile/phone-05.jpg",
    title: "Iphone 5",
    price: 15000,
    qunet: 1,
  },

  {
    id: 6,
    img: "images/mobile/phone-06.jpg",
    title: "Iphone 6",
    price: 15000,
    qunet: 1,
  },

  {
    id: 7,
    img: "images/mobile/phone-07.jpg",
    title: "Iphone 7",
    price: 15000,
    qunet: 1,
  },
  {
    id: 8,
    img: "images/mobile/phone-08.jpg",
    title: "Iphone 8",
    price: 15000,
    qunet: 1,
  },

  {
    id: 9,
    img: "images/mobile/phone-09.jpg",
    title: "Iphone 9",
    price: 15000,
    qunet: 1,
  },

  {
    id: 10,
    img: "images/mobile/phone-10.png",
    title: "Iphone 10",
    price: 15000,
    qunet: 1,
  },

];

/* ========= Dispaly Product =========  */

function dispalyProduct() {
  let container = document.getElementById("containerProducts");
  /* cheak  that container if no exist not give me error */
  if (!container) {
    console.log("Container  not exist.");
    return;
  }
  let empty = "";
  for (let i = 0; i < products.length; i++) {
    empty += `
          <div class="col-md-4">
            <div class="item">
              <img src="${products[i].img}" class="w-100" alt="${products[i].name}">
              <h3>${products[i].title}</h3>
              <p>${products[i].price} EGP</p>
              <div class="icons">
              <i class="fa-solid  fa-heart  text-danger "></i>
                <i class="fa-solid fa-cart-shopping text-warning  " onclick="addToCart(${products[i].id})"></i>
              </div>
            </div>
          </div>`;
  }

  container.innerHTML = empty;
}

/* check for products is existing or no in cart that contain producsts  */
let cartProducts;
let emptyMessage = document.getElementById("empty");

if (localStorage.getItem("product") == null) {
  cartProducts = [];
} else {
  cartProducts = JSON.parse(localStorage.getItem("product"));
  numOfItems = cartProducts.length
}

if (lengthCart) {
  lengthCart.innerHTML = numOfItems
}

/* ========= Add product to in Cart=========  */


function addToCart(productId) {
  console.log(productId);
  /* i make check if user make login or no*/
  if (localStorage.getItem("name")) {
    let productToAdd = products.find((product) => product.id == productId);

    if (!cartProducts.some((cartProduct) => cartProduct.id === productId)) {
      cartProducts.push(productToAdd);
      localStorage.setItem("product", JSON.stringify(cartProducts));
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Product added to cart",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Product is already in the cart!",
      });
    }
  } else {
    console.log("You Must Login");
    window.location.href = "login.html";
  }
  numOfItems = cartProducts.length
  if (lengthCart) {
    lengthCart.innerHTML = numOfItems
  }



}



/* ========= dispaly  Product in Cart page =========  */

function dispalyProductCart() {
  // console.log(cartProducts);
  let container = document.getElementById("cartProduct");
  if (!container) {
    console.log("Container element not found.");
    return;
  }
  let empty = "";

  for (let i = 0; i < cartProducts.length; i++) {
    empty += `
    <div class="row mt-4">
    <div class="product">
    <span>${i + 1}</span>
        <div class="image">
            <img src="${cartProducts[i].img}" alt="">
        </div>
        <div class="info">
            <p class="title"> ${cartProducts[i].title} </p>
            <p class="price"> ${cartProducts[i].price} EGP </p>
        </div>
        <div class="actions">
            <i class="fa-solid fa-trash text-danger" onclick="rmPorduct(${cartProducts[i].id
      })"></i>
          <div class=btnUpdate>
          <button class="btn btn-sm btn-warning" onclick="updateQ(${cartProducts[i].id}, 'increase')">+</button>
          <span class="count">${cartProducts[i].qunet}</span>
          <button class="btn btn-sm btn-warning" onclick="updateQ(${cartProducts[i].id}, 'decrease')">-</button>
          </div>


        </div>
    </div>

</div>`;
  }


  container.innerHTML = empty;
}

/* ========= dispaly Total Price =========  */

let price;
function totalPrice() {
  let totlaPriceProducts = cartProducts.reduce((x, y) => {
    return x + y.price;
  }, 0);
  price = totlaPriceProducts;
  console.log(totlaPriceProducts);
  showTotalPrice();
}

totalPrice();

function showTotalPrice() {
  if (total) {
    total.innerHTML = price;
  }
}

/* ========= Update count of product =========  */

function updateQ(id, action) {
  let productUpdate = cartProducts.find((product) => product.id == id);
  if (action === 'increase') {
    productUpdate.qunet += 1;
    price += productUpdate.price;
  } else {
    if (productUpdate.qunet <= 1) {
      return false
    }
    productUpdate.qunet -= 1;
    price -= productUpdate.price;

  }


  showTotalPrice();
  dispalyProductCart();

  console.log(productUpdate.qunet);
}

/* =========  Remove  Product From Cart =========  */
function rmPorduct(cartProdctId) {
  let newCart = cartProducts.filter((product) => {
    return product.id !== cartProdctId;
  });

  cartProducts = newCart;
  localStorage.setItem("product", JSON.stringify(newCart));
  // Swal.fire({
  //   icon: "error",
  //   title: "Oops...",
  //   text: "Product is Deleted!",
  // });

  if (cartProducts.length == 0) {
    if (total) {
      total.classList.add("d-none");
    }
    if (emptyMessage) {
      emptyMessage.classList.replace("d-none", "d-block");
    }
  }
  dispalyProductCart();
}

/* check to dispaly element none or block */
let userNameLocalStorge;
if (localStorage.getItem("name") == null) {
  userNameLocalStorge = "";
  if (total) {
    total.classList.add("d-none");
  }
} else {
  userNameLocalStorge = localStorage.getItem("name");
  // console.log(users);
}

/*   dispaly Btns Register and Login */

function showAndDisplay() {
  let nameUser = document.getElementById("nameUser");
  if (nameUser) {
    nameUser.innerHTML = userNameLocalStorge;
  }

  if (localStorage.getItem("name") == null) {
    if (registerBtn) {
      registerBtn.classList.replace("d-none", "d-block");
      logoutBtn.classList.replace("d-block", "d-none");
      if (lengthCart) {
        lengthCart.innerHTML = 0
      }

    }
  } else {
    if (registerBtn) {
      registerBtn.classList.replace("d-block", "d-none");
      logoutBtn.classList.replace("d-none", "d-block");
    }
  }

}

document.addEventListener("DOMContentLoaded", function () {
  showAndDisplay();
  dispalyProduct();
  if (localStorage.getItem("name")) {
    dispalyProductCart();

  }


});

/*   condition to display block message when cart is empt */

if (cartProducts.length == 0) {
  if (emptyMessage) {
    emptyMessage.classList.replace("d-none", "d-block");
  }
}






// // Slider

// $(document).ready(function () {
//   $('.slider').owlCarousel({
//     items: 1,
//     loop: true,
//     autoplay: true,
//     autoplayTimeout: 3000,
//     // autoWidth: true
//     autoHeight: true
//   });
// });