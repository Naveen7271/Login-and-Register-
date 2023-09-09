//Array to store registered users

const users = [
  { email: "naveen@gmail.com", password: "naveen" }
];

function registerUser(){
  const regEmail=document.getElementById("email").value;
  const regPassword=document.getElementById("password").value;


  //check if the email is already registered
  if(users.some(user => user.email === email)){
    window.alert("Email is already registered");
    return;
  }


  //store the user in the array
  users.push({email: email, password: password});
  Window.alert("Registration successful. Please Login.");
  clearRegistrationForm();

  setTimeout(() => {
    window.location.href = 'index1.html';
}, 1000);

}


function loginUser() {
  console.log(users)
  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;

  // Check if the email and password match a registered user
  const user = users.find(user => user.email === loginEmail && user.password === loginPassword);

  if (user) {
      console.log("Login successful. Redirecting...");
      // You can add the redirection logic here
      // For simplicity, we'll just reload the page
      setTimeout(() => {
        window.location.href = 'https://www.google.com';
      }, 1000);
  } else {
      console.log("Invalid email or password. Please try again.");
  }

  clearLoginForm();
}


function showMessage(message) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
}

function clearRegistrationForm() {
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}

function clearLoginForm() {
  document.getElementById("loginEmail").value = "";
  document.getElementById("loginPassword").value = "";
}