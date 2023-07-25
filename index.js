const form = document.getElementById("form");

const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const address = document.getElementById("address");
const password = document.getElementById("password");

const firstnameError = document.getElementById("firstnameError").textContent;
const lastnameError = document.getElementById("lastnameError").textContent;
const emailError = document.getElementById("emailError").textContent;
const addressError = document.getElementById("addressError").textContent;
const passwordError = document.getElementById("passwordError").textContent;

const mailPattern = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

const fields = [
  {
    element: firstname,
    errorId: "firstnameError",
    errorMsg: firstnameError,
  },
  {
    element: lastname,
    errorId: "lastnameError",
    errorMsg: lastnameError,
  },
  {
    element: email,
    errorId: "emailError",
    errorMsg: emailError,
  },
  {
    element: address,
    errorId: "addressError",
    errorMsg: addressError,
  },
  {
    element: password,
    errorId: "passwordError",
    errorMsg: passwordError,
  },
];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateForm()) {
    alert("Form submitted successfully");    
    form.reset();
  }
});

function validateForm() {
  let valid = true;

  fields.forEach(({ element, errorId, errorMsg }) => {
    const errorElement = document.getElementById(errorId);

    if (element.value.trim() === "") {
      errorElement.textContent = errorMsg;
      errorElement.classList.add("visible");
      element.classList.add("invalid");
      errorElement.setAttribute("aria-hidden", "false");
      errorElement.setAttribute("aria-invalid", "true");
      valid = false;
    } else if (element === email && !mailPattern.test(element.value.trim())) {
      errorElement.textContent = "Looks like this is not an email";
      errorElement.classList.add("visible");
      element.classList.add("invalid");
      errorElement.setAttribute("aria-hidden", "false");
      errorElement.setAttribute("aria-invalid", "true");
      valid = false;
    } else {
      errorElement.textContent = "";
      errorElement.classList.remove("visible");
      element.classList.remove("invalid");
      errorElement.setAttribute("aria-hidden", "true");
      errorElement.setAttribute("aria-invalid", "false");
    }
  });

  return valid;
}
