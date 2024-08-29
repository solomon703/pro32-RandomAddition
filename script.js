// ! Main div creation
let main = document.createElement('div');
document.body.appendChild(main);
// ! Heading creation
let heading = document.createElement('h1');
heading.textContent = "This is tested content";
// ! Appending child to the parent
main.appendChild(heading);
// ! Change heading button
let butt = document.createElement('button');
butt.textContent = "Change Heading";
main.appendChild(butt);
butt.classList.add('button');
butt.onclick = function(){
  heading.textContent = "5.0 Technologies Changed";
};
// ! Change style button
let butt1 = document.createElement('button');
butt1.textContent = "Add Styles";
butt1.classList.add('button');
main.appendChild(butt1);
butt1.onclick = function(){
  heading.classList.add('style')
};
// ! Remove Style button
let butt2 = document.createElement('button');
butt2.textContent = "Remove Styles";
main.appendChild(butt2);
butt2.classList.add('button');
butt2.onclick = function(){
  heading.classList.remove('style');
}