// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var count = Number(
    prompt("How many characters would you like your password")
  );

  while (count > 129) {
    count = Number(prompt("Please select a number between 1 - 128"));
  }

  var hasLowercase = confirm("Do you want Lowercase");
  var hasUppercase = confirm("Do you want Uppercase");
  var hasNumbers = confirm("Do you want Numbers");
  var hasSpecial = confirm("Do you want Special characters");

  var letters = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "!@#$%^&*()_+=-`~";
  var genPassword = "";

  var all = "";
  if (hasLowercase === true) {
    all = letters;
  }
  if (hasUppercase === true) {
    all += uppercase;
  }
  if (hasNumbers === true) {
    all += numbers;
  }
  if (hasSpecial === true) {
    all += special;
  }

  for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * all.length);
    genPassword += all[random];
  }

  console.log(genPassword);

  return genPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
