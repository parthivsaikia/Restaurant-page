import { makeElement } from "./home";
import sanji from './images/sanji.jpeg';
import './style.css';
import { pageName } from "./home";

function aboutContainer(){
    const aboutContainerDiv = makeElement('div','about-container-div');
    const aboutImgDiv = makeElement('div','about-img-div');
    const aboutInfo = makeElement('div','about-info');
    const aboutInfoName = makeElement('h1','about-info-name');
    const aboutInfoPara = makeElement('p','about-info-para');
    const aboutImg = new Image();
    aboutImg.src = sanji;
    aboutInfoPara.textContent = `Sanji, the esteemed cook of the Straw Hat Restaurant, is renowned for his culinary brilliance and fiery dedication to his craft. With a tall, lean build and his characteristic curly eyebrow, Sanji's presence in the kitchen is as striking as it is masterful. His culinary journey began at a young age, driven by a profound love for cooking and an unwavering ambition to find the All Blue, a legendary sea said to be a paradise for chefs.

Sanji's expertise extends beyond his exceptional knife skills and creative recipes; he is also a master of the powerful martial art known as "Black Leg Style," which he employs to protect his crew and his kitchen with equal fervor. His dishes, infused with both flavor and passion, have earned the Straw Hat Restaurant a reputation for excellence, delighting diners from all corners of the world. Sanji's commitment to his friends, his dream, and his impeccable cuisine makes him a vital and beloved member of the Straw Hat crew.`

    aboutImgDiv.appendChild(aboutImg);
    aboutInfo.append(aboutInfoName,aboutInfoPara);
    aboutContainerDiv.append(aboutImgDiv,aboutInfo);

    return aboutContainerDiv;
}

function loadAbout(){
    const content = document.querySelector('#content');
    content.innerHTML = "";
    content.appendChild(aboutContainer());
}

export {loadAbout};