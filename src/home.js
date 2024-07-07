import image from './Pizza.jpeg';
import './style.css';

function makeElement(element,className){
    const elementName = document.createElement(element);
    elementName.classList.add(className);
    return elementName;
}

function homePage(){
    const container = makeElement('div','container');
    container.appendChild(heroSection());
    return container;
}

function heroSection(){
    const heroSectionContainer = makeElement('div','hero-section');
    const heroInfo = makeElement('div','hero-info');
    const heroInfoHeading = makeElement('h1','hero-info-heading');
    const heroInfoPara = makeElement('p','hero-info-para');
    const heroImageContainer = makeElement('div','hero-image-container');
    const heroImage = new Image();
    heroImage.src = image;
    heroImage.classList.add('hero-image');
    heroImageContainer.appendChild(heroImage);
    heroSectionContainer.appendChild(heroInfo);
    heroSectionContainer.appendChild(heroImageContainer);
    heroInfo.appendChild(heroInfoHeading);
    heroInfo.appendChild(heroInfoPara);
    heroInfoHeading.textContent = "Tasty but Healthy";
    heroInfoPara.textContent = "Live life, love food";

    

    return heroSectionContainer;
}

function addToBody(){
    const body = document.querySelector('body');
    body.appendChild(homePage());
}

export {makeElement,addToBody};

// function customerReview(){

// }