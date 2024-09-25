
const $ = selector => {
        return document.querySelector(selector)
};

const header = $('.header');
const menuIcon = $(".material-symbols-outlined");
const horizmenu = $('.header ul.row');
const menu = $('ul.nav');
let circles = document.getElementsByClassName('colorfulLine')
circles = [...circles];
const texts = document.querySelectorAll('.circle .numtext');
const projects = document.querySelectorAll('.project-number');

function getRealWidth(){
    circles[0].style.width = 60 + '%';
    counter(texts[0] , 60 , 20 , 1 , true);
    circles[1].style.width = 82 + '%';
    counter(texts[1] , 82 , 15 , 1 , true);
    circles[2].style.width = 86 + '%';
    counter(texts[2] , 86 , 15 , 1 , true);
}

function counter(elm , number , time , init, addpercent){
    let initial = 0;
    let myInterval = setInterval(() => {
        (addpercent) ? elm.innerText = `${initial += init}%`
        : elm.innerText = `${initial += init}`;
        (initial === number) ? clearInterval(myInterval) : '';
    }, time)
};

function projectsCount(){
    counter(projects[0] , 260 , 20 , 2 , false);
    counter(projects[1] , 120 , 40 , 2 , false);
    counter(projects[2] , 260 , 20 , 2 , false);
};

window.addEventListener('scroll', checkabout);
function checkabout(){

    if(innerWidth > 1200){
        if(scrollY > 525){
            getRealWidth();
            window.removeEventListener('scroll', checkabout);
        }    
    }else if(innerWidth > 750 && innerWidth < 1200){
        if(scrollY > 753){
            getRealWidth();
            window.removeEventListener('scroll', checkabout);
        }
    }else if(innerWidth > 300 && innerWidth < 750){
        if(scrollY > 620){
                getRealWidth();
            window.removeEventListener('scroll', checkabout);
        }
    } 
}
menuIcon.onclick = () => {
    menu.classList.toggle("show");
}

if(innerWidth > 860){
    menuIcon.classList.add('d-none')
}else{
    horizmenu.classList.add('d-none');
}

window.onresize = () => {
    if(innerWidth < 860){
        menuIcon.classList.remove('d-none');
        horizmenu.classList.add('d-none')
    }else {
        menuIcon.classList.add('d-none');
        horizmenu.classList.remove('d-none');
    }
}

window.addEventListener('scroll', checkProjects);
function checkProjects(){

    if(innerWidth > 1200){
        // desktop viewport
        if(scrollY > 3295){
            projectsCount();
            window.removeEventListener('scroll', checkProjects);
        }   
        //tablet viewport 
    }else if(innerWidth > 750 && innerWidth < 1200){
        if(scrollY > 4720){
            projectsCount();;
            window.removeEventListener('scroll', checkProjects);
        }
        // mobile viewport
    }else if(innerWidth > 300 && innerWidth < 750){
        if(scrollY > 5380){
            projectsCount();
            window.removeEventListener('scroll', checkProjects);
        }
    }
}

new Splide(".splide" , {
    type: 'loop',
    speed: 1000,
    pagination: false
}).mount();



