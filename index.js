//buttons
const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const b3 = document.querySelector("#b3");
const b4 = document.querySelector("#b4");
const b5 = document.querySelector("#b5");
const b6 = document.querySelector("#b6");
const b7 = document.querySelector("#b7");
const b8 = document.querySelector("#b8");
const b9 = document.querySelector("#b9");
const b10 = document.querySelector("#b10");
const bg = document.querySelector (".bg");
const pet = document.querySelector ("#pet");



//walking//
b1.addEventListener("click", action);
function action(a) {
b1.addEventListener("click", action);
a.stopImmediatePropagation();
bg.classList.add("mbg");
pet.removeAttribute("class");
pet.classList.add("petwalk");
b1.removeEventListener("click", action);
b1.onclick = saction1;
}
function saction1()
{
bg.classList.remove ("mbg");
b1.addEventListener ("click", action);
pet.classList.remove ("action");
pet.removeAttribute ("class");

}

//jump
b2.addEventListener("click", action2);
function action2(b) {
b2.addEventListener("click", action2);
b.stopImmediatePropagation();
bg.classList.add("mbg");
pet.removeAttribute("class");
pet.classList.add("petjump");
b2.removeEventListener("click", action2);
b2.onclick = saction2;
}
function saction2()
{
bg.classList.remove ("mbg");
b2.addEventListener ("click", action2);
pet.classList.remove ("action2");
pet.removeAttribute ("class");

}

//eyes
b3.addEventListener("click", action3);
function action3(c) {
b3.addEventListener("click", action3);
c.stopImmediatePropagation();
bg.classList.add("mbg");
pet.removeAttribute("class");
pet.classList.add("peteyes");
b3.removeEventListener("click", action3);
b3.onclick = saction3;
}
function saction3()
{
bg.classList.remove ("mbg");
b3.addEventListener ("click", action3);
pet.classList.remove ("action3");
pet.removeAttribute ("class");

}

//tail
b4.addEventListener("click", action4);
function action4(d) {
b4.addEventListener("click", action4);
d.stopImmediatePropagation();
bg.classList.add("mbg");
pet.removeAttribute("class");
pet.classList.add("pettail");
b4.removeEventListener("click", action4);
b4.onclick = saction4;
}
function saction4()
{
bg.classList.remove ("mbg");
b4.addEventListener ("click", action4);
pet.classList.remove ("action4");
pet.removeAttribute ("class");
}

//tounge
b5.addEventListener("click", action5);
function action5(e) {
b5.addEventListener("click", action5);
e.stopImmediatePropagation();
bg.classList.add("mbg");
pet.removeAttribute("class");
pet.classList.add("pettounge");
b5.removeEventListener("click", action5);
b5.onclick = saction5;
}
function saction5()
{
bg.classList.remove ("mbg");
b5.addEventListener ("click", action5);
pet.classList.remove ("action5");
pet.removeAttribute ("class");
}

//fart
b6.addEventListener("click", action6);
function action6(f) {
b6.addEventListener("click", action6);
f.stopImmediatePropagation();
bg.classList.add("mbg");
pet.removeAttribute("class");
pet.classList.add("petfart");
b6.removeEventListener("click", action6);
b6.onclick = saction6;
}
function saction6()
{
bg.classList.remove ("mbg");
b6.addEventListener ("click", action6);
pet.classList.remove ("action6");
pet.removeAttribute ("class");
}

//fly
b7.addEventListener("click", action7);
function action6(g) {
b7.addEventListener("click", action7);
g.stopImmediatePropagation();
bg.classList.add("mbg");
pet.removeAttribute("class");
pet.classList.add("petfly");
b7.removeEventListener("click", action7);
b7.onclick = saction7;
}
function saction7()
{
bg.classList.remove ("mbg");
b7.addEventListener ("click", action7);
pet.classList.remove ("action7");
pet.removeAttribute ("class");
}

//color
b8.addEventListener("click", action8);
function action8(h) {
b8.addEventListener("click", action8);
h.stopImmediatePropagation();
bg.classList.add("mbg");
pet.removeAttribute("class");
pet.classList.add("petcolor");
b8.removeEventListener("click", action8);
b8.onclick = saction8;
}
function saction8()
{
bg.classList.remove ("mbg");
b8.addEventListener ("click", action8);
pet.classList.remove ("action8");
pet.removeAttribute ("class");
}


//mirror
b9.addEventListener("click", action9);
function action9(i) {
b9.addEventListener("click", action9);
i.stopImmediatePropagation();
bg.classList.add("mbg");
pet.removeAttribute("class");
pet.classList.add("petmirror");
b9.removeEventListener("click", action9);
b9.onclick = saction9;
}
function saction9()
{
bg.classList.remove ("mbg");
b9.addEventListener ("click", action9);
pet.classList.remove ("action9");
pet.removeAttribute ("class");
}

//rotate
b10.addEventListener("click", action10);
function action(j) {
b10.addEventListener("click", action10);
j.stopImmediatePropagation();
bg.classList.add("mbg");
pet.removeAttribute("class");
pet.classList.add("petrotate);
b10.removeEventListener("click", action10);
b10.onclick = saction10;
}
function saction10()
{
bg.classList.remove ("mbg");
b10.addEventListener ("click", action10);
pet.classList.remove ("action10");
pet.removeAttribute ("class");

}
