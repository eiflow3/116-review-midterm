loginform = document.getElementById("login-form");
registerform = document.getElementById("register-form");

// put the login form in a variable
const loginNotification = document.getElementById("login-notification");

// Add an event listener to the login form.
loginform.addEventListener("submit", async (e) => {
  // Prevent the form from submitting.
  e.preventDefault();

  // The URL to which the form data will be sent.
  url = "http://localhost:3000/login";

  // Create a FormData object to store the form data.
  const formData = new FormData(loginform);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    /*
    The data received from the server is in string format.
    We need to convert it to JSON format so that we can access the data.
    */
    let data = await response.text();
    data = JSON.parse(data);

    /*
    Check the message and change the color of the message accordingly.
    Green for success and red for failure.
    */
    if (data.message === "Login Success") {
      loginNotification.style.color = "green";
    } else {
      loginNotification.style.color = "red";
    }

    /* Display the message in the notification.
    LOGIN NOTIFICATION ELEMENT:
                            <p id="login-notification"></p>
    */
    loginNotification.innerText = data.message;
  } catch (error) {
    console.log(error);
  }
});

// put the register form in a variable
const registerNotification = document.getElementById("register-notification");

// Add an event listener to the register form.
registerform.addEventListener("submit", async (e) => {
  // Prevent the form from submitting.
  e.preventDefault();

  // The URL to which the form data will be sent.
  url = "http://localhost:3000/register";

  // Create a FormData object to store the form data.
  const formData = new FormData(registerform);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    /*
    The data received from the server is in string format.
    We need to convert it to JSON format so that we can access the data.
    */
    let data = await response.text();
    data = JSON.parse(data);

    /*
    Check the message and change the color of the message accordingly.
    Green for success and red for failure.
    */
    if (data.message === "Account Created") {
      registerNotification.style.color = "green";
    } else {
      registerNotification.style.color = "red";
    }

    /* Display the message in the notification.
    REGISTER NOTIFICATION ELEMENT:
                            <p id="register-notification"></p>
    */
    registerNotification.innerText = data.message;
  } catch (error) {
    console.log(error);
  }
});
    