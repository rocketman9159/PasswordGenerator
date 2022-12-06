// Assignment code here
function generatePassword() {
    var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
    var possibleCharacters = [];
  
    // User inputs and validation
    Characters = prompt("How many characters would you like in your password? Choose between 8-128 characters.");
    if (Characters < 8 || Characters > 128) {
      return "You must select a valid number of characters.";
    } else if (isNaN(Characters)) {
      Characters = prompt("Please enter a valid number.");
    }
    else {
      alert("Your password will be " + Characters + " characters long.");
      
    }

    Uppercase = confirm("Would you like uppercase characters?");
    if (Uppercase) {
      alert("Your password will include uppercase characters.");
    }
    else {
      alert("Your password will NOT include uppercase characters.");
    }
  
     Lowercase = confirm("Would you like lowercase characters?");
    if (Lowercase) {
      alert("Your password will include lowercase characters.");
    }
    else {
      alert("Your password will NOT include lowercase characters.");
    }

    Numbers = confirm("Would you like to use numbers?");
    if (Numbers) {
      alert("Your password will include numbers.");
    }
    else {
      alert("Your password will NOT include numbers.");
    }
  
    Special = confirm("Would you like special characters?");
    if (Special) {
      alert("Your password will include special characters.");
    }
    else {
      alert("Your password will NOT include special characters.");
    }
  
    if (Lowercase === false && Uppercase === false && Numbers === false && Special === false) {
      return "You must select at least one character type.";
    };
  
    //  Selected Characters
    if (Lowercase) {
      possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
    }
    if (Uppercase) {
      possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
    }
    if (Numbers) {
      possibleCharacters = possibleCharacters.concat(numericCharacters);
    }
    if (Special) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
    }
  
    //  Length of password pool
    let finalPassword = ""
    for (let i = 0; i < Characters; i++) {
      let rng =[Math.floor(Math.random() * possibleCharacters.length)];
      
      finalPassword = finalPassword + possibleCharacters[rng];
    }
    return finalPassword;
  };
  
  // Apply references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword)