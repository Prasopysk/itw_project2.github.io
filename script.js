const title = document.querySelector('#title');
const nav = document.querySelector('nav');
const triggerPoint = title.offsetTop;

window.onscroll = function(){
    if(window.scrollY >= triggerPoint){
        title.classList.add("stuck");
    } else {
        title.classList.remove("stuck");
    }
};

window.addEventListener('scroll', () => {
    const scroll = window.scrollY;

    if (scroll >= 400) {
        nav.classList.add('new-color');
    } else {
        nav.classList.remove('new-color');
    }
});



const mainElement = document.querySelector('main');
const clouds = document.querySelectorAll('.cloud');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const mainTop = mainElement.offsetTop;
    
    // 1. PARALLAX EFFECT (The Delay)
    // We move the clouds at 20% of the scroll speed
    clouds.forEach((cloud, index) => {
        const speed = (index + 1) * 0.05; // Different speeds for each cloud
        cloud.style.transform = `translateY(${scrollY * speed}px)`;
    });

    // 2. OPACITY LOGIC
    // Start fading between (Main Y - 40) and (Main Y)
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