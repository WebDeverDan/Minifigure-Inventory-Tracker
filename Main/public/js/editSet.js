const name = document.querySelector('#set-name');
const theme = document.querySelector('#set-theme');
const number = document.querySelector('#set-number');
const value = document.querySelector('#set-value');
const quantity = document.querySelector('#set-quantity');
const condition = document.querySelector('#set-condition');
const setTotalV = document.querySelector('#set-totalV');
const notes = document.querySelector('#set-notes');

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

populateDropdowns('set-condition', 'data-condition', condition);
populateDropdowns('value', 'data-condition', condition);


const editSetHandler = async (event) => {
  event.preventDefault();
  const kitID = event.target.getAttribute('data-id');
  const updatedname = name.value.trim();
  const updatednumber = number.value.trim();
  const updatedtheme = theme.value.trim();
  const updatedvalue = value.value.trim();
  const updatedquantity = quantity.value.trim();
  const updatedcondition = condition.value.trim();
  const updatedtotal_v = setTotalV.value.trim();
  const updatednotes = notes.value.trim();
  // console.log(kitID);
  if (
    updatedname ||
    updatednumber ||
    updatedtheme ||
    updatedvalue ||
    updatedquantity ||
    updatedcondition ||
    updatedtotal_v ||
    updatednotes
  ) {
    const response = await fetch(`/api/kit/${kitID}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: updatedname,
        number: updatednumber,
        theme: updatedtheme,
        quantity: updatedquantity,
        condition: updatedcondition,
        value: updatedvalue,
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
        title: 'Set Updated!',
        text: 'Click OK to return to your sets!',
        icon: 'success',
      }).then((value) => (parent.window.location = '/mySets'));
    }
  }
};

document
  .querySelector('#save_setBtn')
  .addEventListener('click', editSetHandler);

const deletebutton = async (event) => {
  const kitId = event.target.getAttribute('data-id');
  console.log(kitId);
  const response = await fetch(`/api/kit/${kitId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/mySets');
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector('#delete_setBtn')
  .addEventListener('click', deletebutton);
