﻿# Profile Card

- This is the simple card created using html, css, js. All the user data has been generated automatically using the the Api.

![](images/profilecard.png)

### Usage

<span style="color: #fff; font-size: 30; font-weight: bold;">Step 1:</span> <br>

xhr.onreadystatechange = function () {
if (xhr.readyState == 4)
if (xhr.status == 200) {
var data = JSON.parse(xhr.responseText);
var newData = data.results[0];

      displayInformation(newData);
    } else {
      error.innerHTML = `Something is wrong, ${xhr.status}`;
    }

};

xhr.send();

<span style="color: #fff; font-size: 24px; font-weight: bold;">Step 2:</span> <br>

function displayInformation(data) {
const {
picture: { large },
name: { first, last },
dob: { age },
phone,
email,
location: {
street: { number, name },
city,
state,
country,
},
} = data;

const concatenatedAddress =
number + " " + name + " " + city + ", " + state + ", " + country;

userName.textContent = `${first} ${last}`;
userAge.textContent = age;
userPhone.textContent = phone;
userEmail.textContent = email;
userAddress.textContent = concatenatedAddress;
userImg.src = large;
}

## Acknowledgments

- Api used - Random user Generator
  https://randomuser.me/
