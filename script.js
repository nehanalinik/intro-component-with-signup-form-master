const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === "") {
    forError(firstName, "First Name cannot be empty");
  } else {
    forSuccess(firstName);
  }

  if (lastNameValue === "") {
    forError(lastName, "Last Name cannot be empty");
  } else {
    forSuccess(lastName);
  }
  if (emailValue === "") {
    forError(email, "Email cannot be empty");
  } else if (!isEmail(emailValue)) {
    forError(email, "Looks like this is not an email");
  } else {
    forSuccess(email);
  }

  if (passwordValue === "") {
    forError(password, "Password cannot be empty");
  } else {
    forSuccess(password);
  }
}

function forError(input, message) {
  input.removeAttribute("placeholder");
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form__inputs error";
}

function forSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form__inputs success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
