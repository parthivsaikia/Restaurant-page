import {makeElement} from './home';
import cherrypie from './images/CherryPies.jpeg';
import meatpie from './images/MeatPie.jpeg';
import sandwiches from './images/Sandwiches.jpeg';
import hamburger from './images/Hamburger.jpeg';
import onigiri from './images/Onigiri.jpeg';
import oshiruko from './images/Oshiruko.jpeg'

function container(){
    const menuContainer = makeElement('div','menu-container');

    const appetizers =  makeElement('div','appetizers');
    const mainCourse = makeElement('div','main');
    const desserts = makeElement('div','desserts');
    const beverages = makeElement('div','beverages');

    menuContainer.append(appetizers,mainCourse,desserts,beverages);

    const appetizersList = {
        // 'Food Type':'appetizers',
        'Cherry Pies': {price:200, imageSrc:cherrypie},
        'Meat Pie': {price:300, imageSrc:meatpie},
        'Sandwiches': {price:200, imageSrc:sandwiches},
        'Hamburger':{price:300, imageSrc:hamburger},
        'Onigiri':{price:250, imageSrc:onigiri},
        'Oshiruko':{price:300, imageSrc:oshiruko},
    }

    // const mainCourseList = {
    //     'Grilled Pizza':
    // }
    function makeMenu(foodType,object){
        const menuCardHeading = makeElement('h2','menu-card-heading');
        function addToMenu({name,price,imageSrc}){
            
            const foodCard = makeElement('div','food-card');
            const foodImageDiv = makeElement('div','food-image-div');
            const foodName = makeElement('h2','food-name');
            const foodPrice = makeElement('p','food-price');
            const foodDescription = makeElement('p','food-description');
            const foodImage = new Image();
            foodImage.src = imageSrc;
            foodImageDiv.appendChild(foodImage);
            foodName.textContent = name;
            foodPrice.textContent = price;
            foodCard.append(foodImageDiv,foodName,foodPrice,foodDescription);

            foodType.appendChild(foodCard);

        }
        foodType.append(menuCardHeading);
        const foodArray = Object.entries(object);
        foodArray.forEach(([name,details]) => {
            addToMenu({name,...details});
        });

        

    }
    makeMenu(appetizers,appetizersList);

    return menuContainer;
}

function loadMenu(){
    const content = document.querySelector('#content');
    content.innerHTML = "";
    content.appendChild(container());
}

export {loadMenu};