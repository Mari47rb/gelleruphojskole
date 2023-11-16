/* RØD TRÅD */

const krop = document.querySelector("body");
const firkant = document.getElementById("kasse");
let scrollPosition;

function flytFirkant() {
    scrollPosition = Math.round(window.scrollY);
    scrollPosition = scrollPosition/8;
    firkant.style.top = scrollPosition + "px";
}

krop.onscroll = flytFirkant;

/* AFSPILLING AF lYD & ANIMATION */
const knap_frederik = document.getElementById("frederik");
const lyd = document.getElementById("lyd");

knap_frederik.onclick = function(){ //når man klikker på frederik går lyden igang
    lyd.play();
};

knap_frederik.onclick = function () { //at den pauser og starter igen når man klikker
    if (lyd.paused) {
        lyd.play();
    } else {
        lyd.pause();
    }
};

const knap_emily = document.getElementById("emily_glansbillede");
const lyd_emily = document.getElementById("lyd_emily");
const emilyAnimation = document.getElementById("emilysanimation");

emilyAnimation.style.display = "none";

knap_emily.onclick = function(){
    lyd_emily.play();
    emilyAnimation.style.display = "inline"; //at animationen og lyden går igang på samme tid
};

knap_emily.onclick = function () {
    if (lyd_emily.paused) {
        lyd_emily.play();
        emilyAnimation.style.display = "inline";
    } else {
        lyd_emily.pause();
        emilyAnimation.style.display = "none";
    }
};

const knap_kris = document.getElementById("kristine_glansbillede");
const lyd_kris = document.getElementById("lyd_kris");
const krisAnimation = document.getElementById("kristinesanimation");

krisAnimation.style.display = "none";

knap_kris.onclick = function(){
    lyd_kris.play();
    krisAnimation.style.display = "inline";
};

knap_kris.onclick = function () {
    if (lyd_kris.paused) {
        lyd_kris.play();
        krisAnimation.style.display = "inline";
    } else {
        lyd_kris.pause();
        krisAnimation.style.display = "none";
    }
};

const knap_ane = document.getElementById("ane_billede");
const lyd_ane = document.getElementById("lyd_ane");
const aneAnimation = document.getElementById("aneanimation");

aneAnimation.style.display = "none";

knap_ane.onclick = function(){
    lyd_ane.play();
    aneAnimation.style.display = "inline";
};


knap_ane.onclick = function () {
    if (lyd_ane.paused) {
        lyd_ane.play();
        aneAnimation.style.display = "inline";
    } else {
        lyd_ane.pause();
        aneAnimation.style.display = "none";
    }
};


// Baggrund skrifter farve her 
/*window.addEventListener('scroll', () => {
    const skiftBaggrund = window.scrollY;
 
    if (skiftBaggrund < 2200) {
      document.body.style.backgroundColor = '#F5E4DC';
    } else if (skiftBaggrund < 3200) {
      document.body.style.backgroundColor = '#CC6F41';
    } else{
      document.body.style.backgroundColor = '#F5E4DC';
    }
  });*/

