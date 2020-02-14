const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function getFieldName(input) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input.id)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function checkEmail(input) {
  const re = /\S+@\S+\.\S+/;
  console.log("?");
  if (re.test(input.value)) {
    showSuccess(input.id);
  } else {
    showError(input, "Email is not valid");
  }
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input.id)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input.id)} cannot be greater that ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

function checkPaswordsMatch(input1, input2) {
  console.log(input1.value);
  if (input1.value !== input2.value) {
    showError(input1, "Passwords do not match");
    showError(input2, "Passwords do not match");
  }
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPaswordsMatch(password, password2);
});
