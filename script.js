const xhr = new XMLHttpRequest();
const userName = document.querySelector(".userName");
const userAge = document.querySelector(".userAge");
const userPhone = document.querySelector(".userPhone");
const userEmail = document.querySelector(".userEmail");
const userAddress = document.querySelector(".userAddress");
const userImg = document.querySelector(".userImage");
const error = document.querySelector(".error");
xhr.open("GET", "https://randomuser.me/api/", true);

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
