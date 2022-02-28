# password-gen
## David Aylward
<hr>

##  Table Of Contents

1. [About](#about)

2. [How To Use](#how-to-use)

3. [Script Breakdown](#script-breakdown)

4. [Reference Links](#reference-links)

5. [Visuals](#visuals)

<hr>

## About

This page is made to show off a web application, this application allows you to generate a random password based off the parameters you give it. The page is styled very simply to not take attention away from the main point of the page. This application could be used within different pages and even other applications.

<hr>


## How To Use

This program thrives on it's user friendly interface and simplicity. First start by clicking the "Generate Password" button. This will then run you through multiple prompts that allows you to set the parameters of your password. The first prompt will ask you how long you would like your password, in this prompt you can answer any number 1 - 128. The next two prompts will be asking if you want lowercase and then if you want uppercase letters, these are both yes or no answers. You may select yes for both and get a mix of lowercase and uppercase. Following this you will see a prompt asking if you want any numbers in your password, this is a yes or no question. The same answer choices are avalible for the final prompt asking if you want the use of special characters. Special characters include "!@#$%^&*()_+=-`~". Finally your password will appear in the dashed box in the middle of the page, from here you can copy the password to your clipboard and use as you please.

<hr>

## Script Breakdown

The script works off a collection of variables, loops, and conditional statements. First you are met on the page with a prompt asking "How many characters would you like your password", this number is recorded and set as the variable "count". Using this information we create a loop that ensures the number selected is less than 129, if it is above 128 the user will be met with a new prompt stating "Please select a number between 1 - 128"

```
function generatePassword() {
  var count = Number(
    prompt("How many characters would you like your password")
  );

  while (count > 129) {
    count = Number(prompt("Please select a number between 1 - 128"));
  }

```
Next we prompt the user with 4 prompts asking for the parameters of their password. We store the answers to these prompts in variables which we later call upon to generate the password.

```
var hasLowercase = confirm("Do you want Lowercase");
  var hasUppercase = confirm("Do you want Uppercase");
  var hasNumbers = confirm("Do you want Numbers");
  var hasSpecial = confirm("Do you want Special characters");
```
After that we set the variables that allow us to select Lowercase, Uppercase, Numbers, and Special characters.

```
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "!@#$%^&*()_+=-`~";
  var genPassword = "";

```
Now I added how we will call upon those variables we defined in the last block of code. This is done with a conditional statement. 

```
 var all = "";
  if (hasLowercase === true) {
    all = letters;
  }
```
This line is saying if they select yes to having lowercase letters we will add all letters to the possible outcome. This is repeated with the following lines. 

```
 if (hasUppercase === true) {
    all += uppercase;
  }
  if (hasNumbers === true) {
    all += numbers;
  }
  if (hasSpecial === true) {
    all += special;
  }

```

Finally we are left with a loop that selects a random value from the above statement.

```
for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * all.length);
    genPassword += all[random];
```

<hr>

## Reference Links

### Conditional Statements

https://www.w3schools.com/js/js_if_else.asp

### For Loops

https://www.w3schools.com/js/js_loop_for.asp

### Math Functions 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

<hr>

## Visuals

### First Prompt
![First Prompt](/images/first.png)

### Option prompt if value is over 128
![Optional Prompt](/images/second.png)

### Second Prompt
![Second Prompt](/images/third.png)

### Third Prompt
![First Prompt](/images/fourth.png)

### Fourth Prompt
![Fourth Prompt](/images/fifth.png)

### Fifth Prompt
![Fifth Prompt](/images/sixth.png)

### Generated Password
![Generated Password](/images/seventh.png)
