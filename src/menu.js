import {makeElement} from './home';
import './style.css';
import cherrypie from './images/CherryPies.jpeg';
import meatpie from './images/MeatPie.jpeg';
import sandwiches from './images/Sandwiches.jpeg';
import hamburger from './images/Hamburger.jpeg';
import onigiri from './images/Onigiri.jpeg';
import oshiruko from './images/Oshiruko.jpeg'

import grilledPizza from './images/grilledpizza.jpeg';
import chickedMeatballsImg from './images/chickenmeatballs.jpeg';
import porkChop from './images/porkchopstirfry.jpeg';
import chickenFriedRiceImg from './images/chickenfriedrice.jpeg';
import tacoPastaImg from './images/tacopasta.jpeg';
import chickenMeatloaf from './images/chickenmeatloaf.jpeg';

import cottonCandy from './images/cottoncandy.jpeg';
import chocolateFunfettiCake from './images/chocolatefunfetticake.jpeg';
import lemonRaspberryCake from './images/lemonraspberrycake.jpeg';
import bastani from './images/bastani.jpeg';
import sawdustPie from './images/sawdustpie.jpeg';
import espressoCake from './images/espressocake.jpeg';

import lassi from './images/lassi.jpeg';
import lemonade from './images/lemonade.jpeg';
import tea from './images/tea.jpeg';
import appleJuice from './images/applejuice.jpeg';
import orangeJuice from './images/orangejuice.jpeg';
import mangoJuice from './images/mango.jpeg';

function container(){

    const menuContainer = makeElement('div','menu-container');

    const appetizers =  makeElement('div','appetizers');
    const mainCourse = makeElement('div','mainCourse');
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
    };

    const mainCourseList = {
        'Grilled Pizza':{price:500,imageSrc:grilledPizza},
        'Chicken Meatballs':{price:700,imageSrc:chickedMeatballsImg},
        'Pork Chop Stir-Fry':{price:700,imageSrc:porkChop},
        'Chicken Fried Rice':{price:800,imageSrc:chickenFriedRiceImg},
        'Taco Pasta':{price:600,imageSrc:tacoPastaImg},
        'Chicken Meatloaf':{price:800,imageSrc:chickenMeatloaf}
    };

    const dessertsList = {
        'Cotton Candy':{price:100,imageSrc:cottonCandy},
        'Chocolate Funfetti Cake':{price:300,imageSrc:chocolateFunfettiCake},
        'Lemon Raspberry Cake':{price:300,imageSrc:lemonRaspberryCake},
        'Bastani':{price:270,imageSrc:bastani},
        'Sawdust Pie':{price:300,imageSrc:sawdustPie},
        'Espresso Cake':{price:280,imageSrc:espressoCake}
    };

    const beveragesList = {
        'Lassi':{price:100,imageSrc:lassi},
        'Lemonade':{price:80,imageSrc:lemonade},
        'Tea':{price:80,imageSrc:tea},
        'Apple Juice':{price:90,imageSrc:appleJuice},
        'Orange Juice':{price:90,imageSrc:orangeJuice},
        'Mango Juice':{price:85,imageSrc:mangoJuice}
    }

    function makeMenu(name,foodType,object){
        const menuCardHeading = makeElement('h2','menu-card-heading');
        menuCardHeading.textContent = name;
        const foodCardDiv = makeElement('div','food-card-div');
        function addToMenu({name,price,imageSrc}){
            const foodCard = makeElement('div','food-card');
            const foodImageDiv = makeElement('div','food-image-div');
            const foodName = makeElement('h4','food-name');
            const nameAndPrice = makeElement('div','name-and-price');
            const foodPrice = makeElement('p','food-price');
            const foodDescription = makeElement('p','food-description');
            const foodImage = new Image();
            nameAndPrice.append(foodName,foodPrice)
            foodImage.src = imageSrc;
            foodImageDiv.appendChild(foodImage);
            foodName.textContent = name;
            foodPrice.textContent = '₶  '+price;
            foodCard.append(foodImageDiv,nameAndPrice,foodDescription);

            foodCardDiv.appendChild(foodCard);
        }
        foodType.append(menuCardHeading,foodCardDiv);
        const foodArray = Object.entries(object);
        foodArray.forEach(([name,details]) => {
            addToMenu({name,...details});
        });

        

    }
    makeMenu('Appetizers',appetizers,appetizersList);
    makeMenu('Main Courses',mainCourse,mainCourseList);
    makeMenu('Desserts',desserts,dessertsList);
    makeMenu('Beverages',beverages,beveragesList);
    return menuContainer;
}

function loadMenu(){
    const content = document.querySelector('#content');
    content.innerHTML = "";
    content.appendChild(container());
}

export {loadMenu};