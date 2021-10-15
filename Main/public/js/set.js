const addSetBtn = document.querySelector('.add_setsBtn');
addSetBtn.setAttribute("style", "background-color:#212529");

const newSetHandler = async (event) => {
  event.preventDefault();
   
    
    const name = document.querySelector('#set-name').value.trim();
    const number= document.querySelector('#set-number').value.trim();
    const theme= document.querySelector('#set-theme').value.trim();
    const value = document.querySelector('#set-value').value.trim();
    const quantity = document.querySelector('#set-quantity').value.trim();
    const condition = document.querySelector('#set-condition').value.trim();
    const total_v = document.querySelector('#set-totalV').value.trim();
    const notes = document.querySelector('#set-notes').value.trim();
  
    if (name && number && theme && value && quantity && condition && total_v && notes) {
      const response = await fetch(`/api/kit`, {
        method: 'POST',
        body: JSON.stringify({ name, number, theme, value, quantity, condition, total_v, notes }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        swal({title: "Set Added!", text: "Click OK to keep adding sets", icon: "success"})
        .then((value) =>
        parent.window.location="/addSet"
      );
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
  