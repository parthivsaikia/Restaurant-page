import {loadHome} from "./home";
import { loadMenu } from "./menu";
import { loadAbout } from "./about";
import { loadContact } from "./contact";
loadHome();

const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');
const aboutBtn = document.querySelector('.about');
const contactBtn = document.querySelector('.contact');
// const orderNowBtn = document.querySelector('.order-now');

homeBtn.addEventListener('click',loadHome);
menuBtn.addEventListener('click',loadMenu);
aboutBtn.addEventListener('click',loadAbout);
contactBtn.addEventListener('click',loadContact);
// orderNowBtn.addEventListener('click',loadMenu);