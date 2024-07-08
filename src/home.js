import image from './images/Pizza.jpeg';
import luffyImg from './images/Luffy.jpeg';
import zoroImg from './images/zoro.jpeg';
import chopperImg from './images/chopper.jpeg';
import frankyImg from './images/franky.jpeg';
import homeImg from './images/home.svg';
import menuImg from './images/menu.svg';
import aboutImg from './images/about.svg';
import contactImg from './images/phone.svg';
import headerImg from './images/headerlogo.jpeg'
import './style.css';

function addImagesToNav(){
    const headerLogoContainer = document.querySelector('.header-logo');
    const home = document.querySelector('.home');
    const menu = document.querySelector('.menu');
    const about = document.querySelector('.about');
    const contact = document.querySelector('.contact');

    const headerLogo = new Image();
    headerLogo.src = headerImg;
    const myHomeImg = new Image();
    myHomeImg.src = homeImg;
    const myMenuImg = new Image();
    myMenuImg.src = menuImg;
    const myAboutImg = new Image();
    myAboutImg.src = aboutImg;
    const myContactImg = new Image();
    myContactImg.src = contactImg;
    headerLogoContainer.appendChild(headerLogo);
    home.appendChild(myHomeImg);
    menu.appendChild(myMenuImg);
    about.appendChild(myAboutImg);
    contact.appendChild(myContactImg);


}

function makeElement(element,className){
    const elementName = document.createElement(element);
    elementName.classList.add(className);
    return elementName;
}

function homePage(){
    const container = makeElement('div','container');
    container.appendChild(heroSection());
    container.appendChild(customerReview())
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

function customerReview(){
    const customerReviewSection = makeElement('div','customer-review-section');
    const customerReviewSectionHeading = makeElement('h1','customer-section-heading');
    const cardsHolder = makeElement('div','cards-holder');
    customerReviewSectionHeading.textContent = "What people think about us";
    function makeReviewCard(customerName,stars,date,imageSrc){
        const reviewCard = makeElement('div','card');
        const dateAndStarSection = makeElement('div','date-and-star');
        const starSection = makeElement('span','star-section');
        const dateSection = makeElement('span','date-section');
        dateAndStarSection.append(starSection,dateSection);
        const review = makeElement('p','review');
        const nameAndImageSection = makeElement('div','name-and-image');
        const nameSection = makeElement('span','name');
        const imageDiv = makeElement('span','customer-image-container');
        nameAndImageSection.appendChild(imageDiv);
        nameAndImageSection.appendChild(nameSection);

        const customerImage = new Image();
        customerImage.src = imageSrc;
        customerImage.classList.add('customer-image');

        imageDiv.appendChild(customerImage);
        

        for(let i = 0;i<stars;i++){
            starSection.textContent += "⭐";
        }
        dateSection.textContent = date;
        nameSection.textContent = customerName;

        reviewCard.append(dateAndStarSection,review,nameAndImageSection);
        return {reviewCard,review};
    }

    const luffy = makeReviewCard('Monkey D. Luffy',5,'10-02-2024',luffyImg);
    const zoro = makeReviewCard('Roronoa Zoro',5,'01-03-2024',zoroImg);
    const chopper = makeReviewCard('Tony Tony Chopper',5,'14-03-2024',chopperImg);
    const franky = makeReviewCard('Franky',5,'10-04-2024',frankyImg);

    luffy.review.textContent = '"I will become the KING OF THE PIRATES. The meat was super delicious. Sanji is the best cook overall."';
    zoro.review.textContent = '"Baka cook is good. I love onigiri!!! and the booze specially."';
    chopper.review.textContent = `"Sanji's cotton candy are the best in the whole New World."`;
    franky.review.textContent = `"Superrrr!!! I need cola for my Coup de Burst and this place have the best colas."`;

    cardsHolder.append(luffy.reviewCard,zoro.reviewCard,chopper.reviewCard,franky.reviewCard)
    customerReviewSection.append(customerReviewSectionHeading,cardsHolder);

    return customerReviewSection;
}

function addToBody(){
    const content = document.querySelector('#content');
    addImagesToNav();
    content.appendChild(homePage());
}

export {makeElement,addToBody};

