var icon = document.getElementById("icon")
let logo = document.getElementsByClassName("logo")[0]
let favico = document.getElementsByClassName("favico")[0]
let btn = 
icon.addEventListener('click', function run(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
            icon.src = "images/sun.png";
            logo.src = "images/favico/android-chrome-512x512(1).png"
            favico.href = "images/favico/favicon-32x32(1).png"
          
    }
    else{
        icon.src = "images/moon.png";
        logo.src = "images/favico/android-chrome-192x192.png"
        favico.href = "images/favico/favicon-32x32.png"
    }
    
})
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    console.log("hello world");
    
})

    
let burger = document.getElementsByClassName('burger')[0]    
let header = document.getElementsByTagName("header")[0]

burger.addEventListener('click', function run(){
   
        header.classList.toggle("remove")
    
})

let all = document.getElementById("btn-4");
let Cube = document.getElementById("btn-5");
let text = document.getElementById("btn-6");
let win = document.getElementById("btn-7");
let content = document.getElementById("card-1");
let content2 = document.getElementById("card-2");
let content3 = document.getElementById("card-3");


all.addEventListener("click" , function() {
    content2.style.display = 'block';
    content3.style.display = 'block';
    content.style.display = 'block';
});
Cube.addEventListener("click" , function(){
    content2.style.display = 'none';
    content3.style.display = 'none';
    content.style.display = 'block';
});
text.addEventListener("click" , function(){
    content.style.display = 'none';
    content3.style.display = 'none';
    content2.style.display = 'block';
});
win.addEventListener("click" , function(){
    content.style.display = 'none';
    content3.style.display = 'block';
    content2.style.display = 'none';
});

