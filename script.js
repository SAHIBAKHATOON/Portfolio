 
const toggleButton = document.getElementById("toggleButton");
const  navLinks = document.getElementById("navLinks");

toggleButton.addEventListener('click', () => {
navLinks.classList.toggle('active')
})

let btn = document.querySelector(".btn-1");
btn.addEventListener('click', function(){
    btn.innerHTML = "About me :)"
});

let btn1 = document.querySelector("#btn");
btn1.addEventListener('click', function(){
    btn1.innerHTML = "Learn More :)"
})