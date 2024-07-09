import { makeElement } from "./home";
import phone from "./images/phone.svg"
import './style.css';
import strawhats from './images/strawhats.jpeg';

function contactDiv(){
    const contactContainer = makeElement('div','contact-container');
    const contactImgContainer = makeElement('div','contact-image-container');
    const contactInfoContainer = makeElement('div','contact-info-container');
    const contactPara = makeElement('p','contact-para');
    contactPara.textContent = "The Straw Hat Pirates, also known as the Mugiwara Pirates, Straw Hat Crew, or simply the Straw Hats, are an extremely infamous and powerful pirate crew that originated from the East Blue. They are the main focus and protagonists of the manga and anime One Piece and are led by the main protagonist, Monkey D. Luffy. "

    contactInfoContainer.append(contactPara);
    const contactImg = new Image();
    contactImg.src = strawhats;
    contactImgContainer.appendChild(contactImg);
    contactContainer.append(contactImgContainer,contactInfoContainer);

    return contactContainer;
}

function loadContact(){
    const content = document.querySelector('#content');
    content.innerHTML = "";
    content.appendChild(contactDiv());
}

export {loadContact};