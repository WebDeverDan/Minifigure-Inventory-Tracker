const newFigureHandler = async (event) => {
    event.preventDefault();
   
    alert("something")
    const name = document.querySelector('#figure-name').value.trim();
    const theme= document.querySelector('#figure-theme').value.trim();
    const value = document.querySelector('#figure-value').value.trim();
    const quantity = document.querySelector('#figure-quantity').value.trim();
    const condition = document.querySelector('#condition').value.trim();
    const rare = document.querySelector('#rarity').value.trim();
    const favorite = document.querySelector('#favorite').value.trim();
    const notes = document.querySelector('#figure-notes').value.trim();
  
    if (name && theme && value && quantity && condition && rare && favorite && notes) {
      const response = await fetch(`/api/figure`, {
        method: 'POST',
        body: JSON.stringify({ name, theme, value, quantity, condition, rare, favorite, notes }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        alert('Figure Created!');
        document.location.replace('/');
      } else {
        alert('Failed to create figure');
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
  //       document.location.replace('/figure');
  //     } else {
  //       alert('Failed to delete figure');
  //     }
  //   }
  // };
  




  
  document
    .querySelector('.add_figBtn')
    .addEventListener('click', newFigureHandler);
  
  // document
  //   .querySelector('.project-list')
  //   .addEventListener('click', delButtonHandler);
  