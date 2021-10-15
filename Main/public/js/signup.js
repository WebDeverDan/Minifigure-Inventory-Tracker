// DON"T TOUCH SIGN UP! IT IS WORKING AS IT SHOULD


const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log("Daniel")
  const first_name = document.querySelector('#first_name-signup').value.trim();
  const last_name = document.querySelector('#last_name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const years_collecting = document.querySelector('#years-signup').value.trim();
  const age = document.querySelector('#age-signup').value.trim();
  const favorite_fig = document.querySelector('#favorite-signup').value.trim();

  if (
    first_name &&
    last_name &&
    email &&
    password &&
    years_collecting &&
    age &&
    favorite_fig
  ) {
    const response = await fetch('/api/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        password,
        years_collecting,
        age,
        favorite_fig,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
     
      swal({title: "Welcome!", text: "Click OK to proceed", icon: "success"})
      .then((value) =>
      parent.window.location="/"
    );
    } 
  }
};

document
  .querySelector('.create-profileBtn')
  .addEventListener('click', signupFormHandler);


  