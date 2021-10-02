const newSetHandler = async (event) => {
    event.preventDefault();
   
    alert("something")
    const name = document.querySelector('#set-name').value.trim();
    const theme= document.querySelector('#set-theme').value.trim();
    const value = document.querySelector('#set-value').value.trim();
    const quantity = document.querySelector('#set-quantity').value.trim();
    const condition = document.querySelector('#condition').value.trim();
    const favorite = document.querySelector('#set-favorite').value.trim();
    const notes = document.querySelector('#set-notes').value.trim();
  
    if (name && theme && value && quantity && condition && favorite && notes) {
      const response = await fetch(`/api/set`, {
        method: 'POST',
        body: JSON.stringify({ name, theme, value, quantity, condition, favorite, notes }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        alert('Set Created!');
        document.location.replace('/');
      } else {
        alert('Failed to add set');
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
  