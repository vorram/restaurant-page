import Steak from './steak.jpg';

export default function menu() {
    const container = document.querySelector('.container');
    while (container.firstChild) {
        container.firstChild.remove();
    }

    const menuBox = document.createElement('div');
    menuBox.classList.add('menu-box');
    container.appendChild(menuBox);

    let menuArray = [];
    class MenuItem {
        constructor(name, price, picture) {
            this.name = name;
            this.price = price;
            this.picture = picture;
        }
    }
    const steakOne = new MenuItem('Steak One', '$10', Steak);
    menuArray.push(steakOne);
    const steakTwo = new MenuItem('Steak Two', '$20', Steak);
    menuArray.push(steakTwo);
    const steakThree = new MenuItem('Steak Three', '$30', Steak);
    menuArray.push(steakThree);

    menuArray.forEach(function(item) {
        const itemBox = document.createElement('div');
        itemBox.classList.add('item-box');
        menuBox.appendChild(itemBox);

        const itemPicture = new Image();
        itemPicture.classList.add('item-picture');
        itemPicture.src = item.picture;
        itemBox.appendChild(itemPicture);

        const itemName = document.createElement('div');
        itemName.classList.add('item-name');
        itemName.textContent = item.name;
        itemBox.appendChild(itemName);

        const itemPrice = document.createElement('div');
        itemPrice.classList.add('item-price');
        itemPrice.textContent = item.price;
        itemBox.appendChild(itemPrice);
    });
}