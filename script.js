const title = document.querySelector('#title');
const nav = document.querySelector('nav');
const triggerPoint = title.offsetTop;
const navList = document.querySelector('nav ul');

window.onscroll = function(){ //makes the title smaller
    if(window.scrollY >= triggerPoint){
        title.classList.add("stuck");
    } else {
        title.classList.remove("stuck");
    }
};

window.addEventListener('scroll', () => { //gives the nav new color and the menu bar smaller size
    const scroll = window.scrollY;

    if (scroll >= 400) {
        nav.classList.add('new-color');
        navList.classList.add('after-scroll');
    } else {
        nav.classList.remove('new-color');
        navList.classList.remove('after-scroll');
    }
});


const themeButton = document.querySelector('.theme-toggle');

themeButton.addEventListener('click', () => { //dark mode toggle
    document.body.classList.toggle('dark-mode');
});


const mainElement = document.querySelector('main');
const clouds = document.querySelectorAll('.cloud');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const mainTop = mainElement.offsetTop;
    
    clouds.forEach((cloud, index) => {
        const speed = (index + 1) * 0.05; // Different speeds for each cloud
        cloud.style.transform = `translateY(${scrollY * speed}px)`;
    });

    const fadeStart = mainTop - 40;
    const fadeEnd = mainTop;

    let newOpacity = 1;

    if (scrollY > fadeStart) {
        // Map the 40px range to a 1.0 to 0.0 scale
        newOpacity = 1 - ((scrollY - fadeStart) / (fadeEnd - fadeStart));
    }

    // Clamp opacity between 0 and 1
    // newOpacity = Math.max(0, Math.min(1, newOpacity));

    // clouds.forEach(cloud => {
    //     cloud.style.opacity = newOpacity;
    // });
});

const tags = document.querySelectorAll('.tag');

tags.forEach((tag, index) => {
    // Každému tagu dáme trochu jiné zpoždění animace, aby se hýbaly organicky
    const randomDelay = Math.random() * 2;
    tag.style.animationDelay = `${randomDelay}s`;
    
    // Volitelně: každému tagu dáme trochu jinou rychlost
    const randomDuration = 3 + Math.random() * 2;
    tag.style.animationDuration = `${randomDuration}s`;
});