const formBuyTicket = document.getElementById('e-buyTicket-form');
const flightsList = document.getElementById('flightsList');


formBuyTicket.addEventListener('submit', submitHandlerTicket);

/**
 * Обработчик отправки формы
 * @param {KeyboardEvent} event
 */
function submitHandlerTicket(event) {
    // прерываем всплытие что бы форма не отправлялась
    event.preventDefault();

    const formData = {
        flightName: formBuyTicket.elements.flightname.value,
        fullName: formBuyTicket.elements.fullname.value,
        typeTicket: formBuyTicket.elements.type.value,
        hour: formBuyTicket.elements.hour.value,
        minute: formBuyTicket.elements.minute.value,
    };

    try {
        let newTicket = buyTicket(world.flights, formData.flightName, makeTime(formData.hour, formData.minute), formData.fullName, +formData.typeTicket);
        alert('You successfully buy ticket ->' + newTicket.id);
        formBuyTicket.elements.fullname.value = '';
        formBuyTicket.elements.flightname.value = '';
    } catch (error) {
        console.error(error);
        alert(error.message);
    }

    updateView();
}

//const input = document.getElementsByTagName('input')[0];

//input.addEventListener('keydown', handler);
// input.addEventListener('keypress', handler);
// input.addEventListener('keyup', handler);

//window.addEventListener('keydown', handler);

/**
 * @param {KeyboardEvent} event
 */
function handler(event) {
    // console.log(event.type, event.key, event.code);

    if (event.code == 'KeyS' && event.ctrlKey) {
        event.preventDefault();

    }
}


function initForm() {
    for (let flightName in world.flights) {
        let option = document.createElement('option');
        option.value = flightName;
        flightsList.appendChild(option);
    };

}

initForm();