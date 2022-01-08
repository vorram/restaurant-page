export default function contacts() {
    const content = document.querySelector('#content');

    const container = document.querySelector('.container');
    while (container.firstChild) {
        container.firstChild.remove();
    }

    const contactsBox = document.createElement('div');
    contactsBox.classList.add('contacts-box');
    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');
    const address = document.createElement('p');
    const phone = document.createElement('p');
    const email = document.createElement('p');
    const map = document.createElement('div');
    map.classList.add('map');
    address.textContent = '8086 Evolution Rd, Jacksonville, FL'
    textContainer.appendChild(address);
    phone.textContent = 'Tel. 1-800-5432-1905'
    textContainer.appendChild(phone);
    email.textContent = 'E-mail: staff@steakhouse.com';
    textContainer.appendChild(email);
    contactsBox.appendChild(textContainer);
    contactsBox.appendChild(map);
    container.appendChild(contactsBox);
 
    return content;
}