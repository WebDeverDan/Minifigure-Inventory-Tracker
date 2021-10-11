const name = document.querySelector('#figure-name');
const theme = document.querySelector('#figure-theme');
const value = document.querySelector('#figure-value');
const quantity = document.querySelector('#figure-quantity');
const condition = document.querySelector('#condition');
const rare = document.querySelector('#rarity');
const total_v = document.querySelector('#fig_totalV');
const notes = document.querySelector('#figure-notes');

function populateDropdowns(selectorname, data, element) {
  const dataValue = element.getAttribute(data);
  const selectorEl = document.querySelectorAll('.' + selectorname);

  for (let i = 0; i < selectorEl.length; i++) {
    let selectorValue = selectorEl[i].getAttribute('value');
    console.log(dataValue, selectorValue);
    if (selectorValue === dataValue) {
      selectorEl[i].setAttribute('selected', true);
    }
  }
}

populateDropdowns('rarity', 'data-rarity', rare);
populateDropdowns('condition', 'data-condition', condition);
populateDropdowns('value', 'data-condition', condition);

const editFigureHandler = async (event) => {
  event.preventDefault();
  const figureID = event.target.getAttribute('data-id');
  const updatedname = name.value.trim();
  const updatedtheme = theme.value.trim();
  const updatedvalue = value.value.trim();
  const updatedquantity = quantity.value.trim();
  const updatedcondition = condition.value.trim();
  const updatedrare = rare.value.trim();
  const updatedtotal_v = total_v.value.trim();
  const updatednotes = notes.value.trim();

  if (
    updatedname ||
    updatedtheme ||
    updatedvalue ||
    updatedquantity ||
    updatedcondition ||
    updatedrare ||
    updatedtotal_v ||
    updatednotes
  ) {
    const response = await fetch(`/api/figure/${figureID}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: updatedname,
        theme: updatedtheme,
        value: updatedvalue,
        quantity: updatedquantity,
        condition: updatedcondition,
        rare: updatedrare,
        total_v: updatedtotal_v,
        notes: updatednotes,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(response);
    if (response.ok) {
      swal({
        title: 'Figure Updated!',
        text: 'Click OK to return to your figures!',
        icon: 'success',
      }).then((value) => (parent.window.location = '/myFigures'));
    }
  }
};

document
  .querySelector('.save_figBtn')
  .addEventListener('click', editFigureHandler);

const deletebutton = async (event) => {
  const figureId = event.target.getAttribute('data-id');
  console.log(figureId);
  const response = await fetch(`/api/figure/${figureId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/myFigures');
  }
};

document
  .querySelector('#delete_figBtn')
  .addEventListener('click', deletebutton);
