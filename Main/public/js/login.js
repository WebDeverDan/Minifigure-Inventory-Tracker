const loginFormHandler = async (event) => {
  event.preventDefault();
  
  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  // console.log(email,password)
  if (email && password) {
    // Send a POST request to the API endpoint
    
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      // console.log("Daniel");
      // If successful, redirect the browser to the dashboard page
      document.location.replace('/login');
    } else {
      // if there's an error, put this alert up. Future dev will be a modal
      alert('Incorrect email or password, please try again!');
    }
  }
};

document
  .querySelector('#login_Btn')
  .addEventListener("submit", loginFormHandler);
