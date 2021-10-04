const newSetHandler = async (event) => {
  const options = {
    settings: {
      duration: 5000,
    }
};
  
  event.preventDefault();
   
    
    const name = document.querySelector('#set-name').value.trim();
    const number= document.querySelector('#set-number').value.trim();
    const theme= document.querySelector('#set-theme').value.trim();
    const value = document.querySelector('#set-value').value.trim();
    const quantity = document.querySelector('#set-quantity').value.trim();
    const condition = document.querySelector('#condition').value.trim();
    const favorite = document.querySelector('#set-favorite').value.trim();
    const notes = document.querySelector('#set-notes').value.trim();
  
    if (name && number && theme && value && quantity && condition && favorite && notes) {
      const response = await fetch(`/api/set`, {
        method: 'POST',
        body: JSON.stringify({ name, number, theme, value, quantity, condition, favorite, notes }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        alert("Set Added!");
        document.location.replace('/mySets');
      } else {
        iqwerty.toast.toast('Whoops There Was an Error');
      }
    }
  };
  
  // const delButtonHandler = async (event) => {
  //   if (event.target.hasAttribute('data-id')) {
  //     const id = event.target.getAttribute('data-id');
  
  //     const response = await fetch(`/api/projects/${id}`, {
  //       method: 'DELETE',
  //     });
  
  //     if (response.ok) {
  //       document.location.replace('/set');
  //     } else {
  //       alert('Failed to delete set');
  //     }
  //   }
  // };
  
  document
    .querySelector('.add_setBtn')
    .addEventListener('click', newSetHandler);
  
  // document
  //   .querySelector('.project-list')
  //   .addEventListener('click', delButtonHandler);
  