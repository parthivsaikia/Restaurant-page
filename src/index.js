import {loadHome} from "./home";
import { loadMenu } from "./menu";
import { loadAbout } from "./about";
loadHome();

const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');
const aboutBtn = document.querySelector('.about');
const contactBtn = document.querySelector('.contact');

homeBtn.addEventListener('click',loadHome);
menuBtn.addEventListener('click',loadMenu);
aboutBtn.addEventListener('click',loadAbout);