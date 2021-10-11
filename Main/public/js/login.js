const loginFormHandler = async (event) => {
  event.preventDefault();
  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  
  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      console.log(email, password)
      // If successful, redirect the browser to the dashboard page
      document.location.replace('/');
    } else {
      alert('Incorrect email or password, please try again!');
    }
  }
};


document
  .querySelector('.login_Btn')
  .addEventListener("click", loginFormHandler);





