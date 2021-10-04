const editFigureHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#figure-name').value.trim();
    const theme= document.querySelector('#figure-theme').value.trim();
    const value = document.querySelector('#figure-value').value.trim();
    const quantity = document.querySelector('#figure-quantity').value.trim();
    const condition = document.querySelector('#condition').value.trim();
    const rare = document.querySelector('#rarity').value.trim();
    const favorite = document.querySelector('#favorite').value.trim();
    const notes = document.querySelector('#figure-notes').value.trim();
    const figureID = event.target.getAttribute("data-id");

    if (name || theme || value || quantity || condition || rare || favorite || notes) {
      const response = await fetch(`/figure/${figureID}`, {
        method: 'PUT',
        body: JSON.stringify({ name, theme, value, quantity, condition, rare, favorite, notes }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      console.log(response)
      if (response.ok) {
        alert('Figure Edited!');
        document.location.replace('/myFigures');
      } else {
        alert('Failed to edit figure');
      }
    }
  };


document
.querySelector('.save_figBtn')
   .addEventListener('click', editFigureHandler);