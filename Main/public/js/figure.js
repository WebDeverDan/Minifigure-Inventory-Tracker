

const newFigureHandler = async (event) => {
    event.preventDefault();
   
    const name = document.querySelector('#figure-name').value.trim();
    const theme= document.querySelector('#figure-theme').value.trim();
    const value = document.querySelector('#figure-value').value.trim();
    const quantity = document.querySelector('#figure-quantity').value.trim();
    const condition = document.querySelector('#condition').value.trim();
    const rare = document.querySelector('#rarity').value.trim();
    const total_v = document.querySelector('#fig_totalV').value.trim();
    const notes = document.querySelector('#figure-notes').value.trim();
  
    if (name && theme && value && quantity && condition && rare && total_v && notes) {
      const response = await fetch(`/api/figure`, {
        method: 'POST',
        body: JSON.stringify({ name, theme, value, quantity, condition, rare, total_v, notes }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        // document.location.replace('/addFigure');
        swal({title: "Figure Added!", text: "Click OK to keep adding figs", icon: "success"})
        .then((value) =>
        parent.window.location="/addFigure"
      );
      } 
    }
  };
  










// const deleteB = document.querySelector("#delete_button");
// console.log(deleteB)

// const deletebutton = async (event) => {
//   const userID =  event.target.getAttribute("data-id")
//   console.log(userID);
//   const response = await fetch(`/delete/${userID}`, {
//     method: 'DELETE',
//     headers: { 'Content-Type': 'application/json' },
//   });

//   if (response.ok) {
//     document.location.replace('/login');
//     alert("You have deleted your account. See you soon!");
//   } else {
//     alert(response.statusText);
//   }
// };

// deleteB.addEventListener('click', deletebutton);




  
  document
    .querySelector('.add_figBtn')
    .addEventListener('click', newFigureHandler);
  

 


  // document
  //   .querySelector('.project-list')
  //   .addEventListener('click', delButtonHandler);
  