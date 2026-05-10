const title = document.querySelector('#title');
const nav = document.querySelector('nav');
const triggerPoint = title.offsetTop;
const navList = document.querySelector('nav ul');

window.onscroll = function(){ //makes the title smaller and sticky
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


// CLOUDS //////////////////////////////////////////////////////////

window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.cloud-background');
    const cloudTypes = ['img/cloud1.png', 'img/cloud2.png', 'img/cloud3.png'];
    const numberOfClouds = 120;

    for (let i = 0; i < numberOfClouds; i++) {
        const cloud = document.createElement('img');
        
        cloud.src = cloudTypes[Math.floor(Math.random() * cloudTypes.length)];
        cloud.className = 'cloud';

        const top = Math.random() * 100;
        const left = Math.random() * 90;

        const width = Math.random() * 12 + 15;
        
        const opacity = Math.random() * 0.4;

        Object.assign(cloud.style, {
            top: `${top}%`,
            left: `${left}%`,
            width: `${width}rem`,
            opacity: opacity,
            filter: `blur(${Math.random() * 2}px)`,
            transform: `scaleX(${Math.random() > 0.5 ? 1 : -1})`
        });

        container.appendChild(cloud);
    }
}); 

const btn = document.querySelector('#hamburger-btn');
const menu = document.querySelector('#hamburger-menu');
const body = document.querySelector('body');
btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('no-scroll');
});
// CLOUDS //////////////////////////////////////////////////////////

// TABULATOR SWITCHER //////////////////////////////////////////////////////////


const tabsData = [
    {
        title: "Seven Nation Army",
        link: "https://www.songsterr.com/a/wsa/white-stripes-seven-nation-army-tab-s265",
        tab: `e|-----------------------------------------|
B|-----------------------------------------|
G|-----------------------------------------|
D|-----------------------------------------|
A|--7---7---10---7---5---3---2-------------|
E|-----------------------------------------|`
    },
    {
        title: "Smoke on the Water",
        link: "https://www.songsterr.com/a/wsa/deep-purple-smoke-on-the-water-tab-s329",
        tab: `e|-----------------------------------------------|
B|-----------------------------------------------|
G|--0---3---5---0---3---6-5---0---3---5---3---0--|
D|--0---3---5---0---3---6-5---0---3---5---3---0--|
A|-----------------------------------------------|
E|-----------------------------------------------|`
    },
    {
        title: "Come As You Are",
        link: "https://www.songsterr.com/a/wsa/nirvana-come-as-you-are-tab-s14",
        tab: `e|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|---------0---0---------2-------2----------|
E|-0-0-1-2---2---2-1-0-----0-0-----0-1-2----|`
    }
];

let currentIndex = 0;

function createDots() {
    const container = document.getElementById('dots-container');
    container.innerHTML = "";
    tabsData.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.innerHTML = "●";
        dot.style.margin = "0 5px";
        dot.style.color = index === currentIndex ? "#333" : "#ccc";
        dot.style.fontSize = "12px";
        container.appendChild(dot);
    });
}

function updateTab() {
    const song = tabsData[currentIndex];
    document.getElementById('song-link').innerText = song.title;
    document.getElementById('tab-display').innerText = song.tab;
    document.getElementById('song-link').href = song.link;
    createDots();
}

function changeTab(direction) {
    currentIndex += direction;
    if (currentIndex >= tabsData.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = tabsData.length - 1;

    updateTab();
}
createDots(); //inicialization when loaded

// TABULATOR SWITCHER //////////////////////////////////////////////////////////

// CHORD VIEWER //////////////////////////////////////////////////////////

const chordData = [
    {
        content: `
            <p><span>E</span>U stánků <span>A</span>na levnou krásu,<br>
            <span>E</span>postávaj a <span>Ami</span>smějou se času,<br>
            <span>E</span>s cigaretou a <span>H7</span>s holkou, co nemá kam <span>E</span>jít.</p>

            <p><span>E</span>Skleniček pár a <span>A</span>pár tahů z trávy,<br>
            <span>E</span>uteče den jak <span>Ami</span>večerní zprávy,<br>
            <span>E</span>neuměj žít a <span>H7</span>bouřej se a neposlou<span>E</span>chaj. <span>E7</span></p>

            <p><strong>Ref:</strong><br>
            Jen <span>A</span>zahlídli svět - maj <span>H7</span>na duši vrásky,<br>
            <span>E</span>tak málo je, tak <span>Ami</span>málo je lásky,<br>
            <span>E</span>ztracená víra <span>H7</span>hrozny z vinic neposbí<span>E</span>rá. (<span>E7</span>)</p>

            <p><span>E</span>U stánků <span>A</span>na levnou krásu,<br>
            <span>E</span>postávaj a <span>Ami</span>ze slov a hlasů<br>
            <span>E</span>poznávám, jak <span>H7</span>málo jsme jim stačili <span>E</span>dát. <span>E7</span> <br></p>

            <p><strong>Ref</strong><br>
            <p><strong>Ref</strong><br>
        `
    },
    {
    content: `
            <p><span>Ami</span>Dneska už mně <span>C</span>fóry <span>Ami</span>ňák nejdou přes <span>E</span>pysky,<br>
            <span>Ami</span>stojím s dlouhou <span>C</span>kravatou na <span>Ami</span>bedně <span>E</span>vod <span>Ami</span>whisky,<br>
            stojím s dlouhým <span>C</span>vobojkem jak <span>Ami</span>stájovej <span>E</span>pinč,<br>
            tu <span>Ami</span>kravatu, co <span>C</span>nosím, mi <span>Ami</span>navlík' <span>E</span>soudce <span>Ami</span>Lynč.<span>A</span></p>

            <p><strong>Ref:</strong><br>
            Tak <span>D</span>kopni do tý <span>E</span>bedny, ať <span>A</span>panstvo nečeká,<br>
            jsou <span>D</span>dlouhý schody <span>E</span>do nebe a <span>A</span>štreka daleká,<br>
            do <span>D</span>nebeskýho <span>E</span>baru, já <span>A</span>sucho v krku mám,<br>
            tak <span>D</span>kopni do tý <span>E</span>bedny, ať <span>A</span>na cestu se <span>Ami</span>dám.</p>

            <p><span>Ami</span>Mít tak všechny <span>C</span>bedny vod <span>Ami</span>whisky vy<span>E</span>pitý,<br>
            <span>Ami</span>postavil bych <span>C</span>malej dům na <span>Ami</span>louce <span>E</span>ukry<span>Ami</span>tý,<br>
            postavil bych <span>C</span>malej dům a <span>Ami</span>z vokna koukal <span>E</span>ven<br>
            a <span>Ami</span>chlastal bych tam s <span>C</span>Bilem a <span>Ami</span>chlastal <span>E</span>bych tam <span>Ami</span>Ben.<span>A</span></p>

            <p><strong>REF</strong></p>

            <p><span>Ami</span>Kdyby jsi se, <span>C</span>hochu, jen <span>Ami</span>pořád nechtěl <span>E</span>rvát,<br>
            <span>Ami</span>nemusel jsi <span>C</span>dneska na <span>Ami</span>týhle <span>E</span>bedně <span>Ami</span>stát,<br>
            moh' jsi někde <span>C</span>v suchu tu svoji <span>Ami</span>whisku <span>E</span>pít,<br>
            <span>Ami</span>nemusel jsi <span>C</span>dneska na <span>Ami</span>krku <span>E</span>laso <span>Ami</span>mít.<span>A</span></p>

            <p><strong>REF</strong></p>

            <p><span>Ami</span>Když jsem štípnul <span>C</span>koně a <span>Ami</span>ujel jen pár <span>E</span>mil,<br>
            <span>Ami</span>nechtěl běžet, <span>C</span>dokavád se <span>Ami</span>whisky <span>E</span>nena<span>Ami</span>pil,<br>
            zatracená <span>C</span>smůla zlá, <span>Ami</span>zatracenej <span>E</span>pech,<br>
            <span>Ami</span>když kůň cucá <span>C</span>whisku jak <span>Ami</span>u <span>E</span>potoka <span>Ami</span>mech.<span>A</span></p>

            <p><strong>REF</strong></p>

            <p><span>Ami</span>Až kopneš do tý <span>C</span>bedny, jak <span>Ami</span>se to dě<span>E</span>lává,<br>
            <span>Ami</span>do krku mi <span>C</span>zvostane jen <span>Ami</span>dírka <span>E</span>mrňa<span>Ami</span>vá,<br>
            jenom dírka <span>C</span>mrňavá a <span>Ami</span>k smrti jenom <span>E</span>krok,<br>
            <span>Ami</span>má to smutnej <span>C</span>konec, a <span>Ami</span>whisky <span>E</span>ani <span>Ami</span>lok.<span>A</span></p>

            <p><strong>REF</strong></p>

            <p>Tak <span>D</span>kopni do tý bedny!</p>
        `
    },
    {
        content: `
            <p><span>C</span>Z rozmlácenýho <span>Ami</span>kostela,<br>
            <span>C</span>v krabici s <span>G7</span>kusem mýdla,<br>
            <span>C</span>přinesl <span>Ami</span>jsem si anděla,<br>
            <span>C</span>poláma<span>G7</span>li mu křídla.</p>

            <p><span>C</span>Díval se na mě <span>Ami</span>oddaně,<br>
            <span>C</span>já měl jsem <span>G7</span>trochu trému.<br>
            <span>C</span>Tak vtiskl <span>Ami</span>jsem mu do dlaně<br>
            <span>C</span>lahvičku <span>G7</span>od parfému.</p>

            <p><strong>Ref:</strong><br>
            <span>C</span>A proto <span>Ami</span>prosím, věř mi,<br>
            <span>C</span>chtěl jsem ho <span>G7</span>žádat,<br>
            <span>C</span>aby mi <span>Ami</span>mezi dveřmi<br>
            <span>C</span>pomohl <span>G7</span>hádat,<br>
            <span>C</span>co mě <span>Ami</span>čeká <span>G7</span>a ne<span>C</span>mine,<br>
            <span>C</span>co mě <span>Ami</span>čeká <span>G7</span>a ne<span>C</span>mine.</p>

            <p><span>C</span>Pak hlídali jsme <span>Ami</span>oblohu,<br>
            <span>C</span>pozoru<span>G7</span>jíce ptáky,<br>
            <span>C</span>deba<span>Ami</span>tujíce o Bohu<br>
            <span>C</span>a hraní <span>G7</span>na vojáky.</p>

            <p><strong>REF</strong></p>
        `
    },
    {
        content: `
            <p><span>G</span>Z posledních <span>D</span>pocitů <span>Emi</span>poskládám ještě <span>C</span>jednou úžasnou chvíli,<br>
            <span>G</span>je to tím, že <span>D</span>jsi tu, <span>Emi</span>možná tím, že <span>C</span>kdysi jsme byli Ty a<br>
            <span>G</span>já my dva, <span>D</span>dvě nahý těla, <span>Emi</span>tak neříkej, že <span>C</span>jinak si to chtěla,<br>
            <span>G</span>tak neří<span>D</span>kej, neří<span>Emi</span>kej, neříkej <span>C</span>mi nic.</p>

            <p><strong>Ref:</strong><br>
            <span>G</span>Jenže ty <span>D</span>neslyšíš, <span>Emi</span>jenže ty nepo<span>C</span>sloucháš,<br>
            <span>G</span>snad ani <span>D</span>nevidíš, nebo <span>Emi</span>spíš nechceš vi<span>C</span>dět<br>
            <span>G</span>a druhejm <span>D</span>závidíš a <span>Emi</span>v očích kapky <span>C</span>slaný vody,<br>
            <span>G</span>zkus změnu, <span>D</span>uvidíš. <span>Emi</span>Pak vítej do svo<span>C</span>body.</p>

            <p><span>G</span>Jsi anděl, <span>D</span>netušíš. <span>Emi</span>Anděl, co ze strachu mu <span>C</span>utrhali křídla.<br>
            <span>G</span>A až to <span>D</span>ucítíš, <span>Emi</span>zkus kašlat na pra<span>C</span>vidla.<br>
            <span>G</span>Říkej si <span>D</span>o mně, co chceš. <span>Emi</span>Já jsem byl odjakživa <span>C</span>blázen.<br>
            <span>G</span>Nevím, co <span>D</span>nechápeš, <span>Emi</span>ale vrať se na <span>C</span>zem.</p>

            <p><strong>REF</strong></p>
        `
    },
    {
        content: `
            <p>1. <span>G</span>Stíny dnů a snů se k obratníku <span>C</span>stáčí,<br>
            <span>G</span>ruce snů černejch se snaží zakrýt <span>C</span>oči,<br>
            <span>Ami</span>světlo tvý prozradí proč já <span>G</span>vím,<br>
            <span>Ami</span>s novým <span>C</span>dnem že se <span>D</span>zas navrátí.</p>

            <p><strong>Ref:</strong><br>
            <span>G</span>Proud motýlů unáší strach,<br>
            <span>C</span>na listy sedá hvězdnej prach,<br>
            <span>Emi</span>proletí ohněm a mizí stále <span>D</span>dál.<br>
            <span>G</span>Neslyšný kroky stepujou,<br>
            <span>C</span>v nebeským rytmu swingujou,<br>
            <span>Emi</span>že se ráno, že se ráno vytrá<span>D</span>tí.</p>

            <p>3. Stíny dnů vyrostou a zmizí,<br>
            nebeský znamení, rozsvěcujou hvězdy,<br>
            všechno ví z povzdálí vedou naše kroky,<br>
            a měsíc nový stíny vyplaší.</p>

            <p><strong>REF</strong></p>
        `
    },
    {
        content: `
            <p><span>D</span>Ztrácíš se před očima,<br>
            <span>A</span>rosteš jen ve vlastním stínu.<br>
            <span>Emi</span>Každá další vina,<br>
            <span>G</span>odkrývá moji vinu.</p>

            <p><span>D</span>Na chodbách v bludných kruzích,<br>
            <span>A</span>zářivka vyhasíná,<br>
            <span>Emi</span>a já ti do infuzí,<br>
            <span>G</span>chci přilít trochu vína.</p>

            <p><span>D</span>Ve vínu dávno nic,<br>
            <span>A</span>ve vínu dávno nic nehle<span>Emi</span>dám. <span>G</span></p>

            <p><span>D</span>Jak luna mizí s nocí v bělostných <span>A</span>šatech pro nemocné,<br>
            <span>Emi</span>prosit je zvláštní pocit,<br>
            <span>G</span>jen, ať je den, noc ne.</p>

            <p><span>D</span>Obzor ne klesne níž, je ráno a <span>A</span>ty spíš.<br>
            <span>Emi</span>Od vlků odraná, hvězdáře <span>G</span>Giordana.</p>
        `
    }
];

const menuItems = document.querySelectorAll('.chords-menu span');
const textDisplay = document.querySelector('.chords-text');

menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        
        menuItems.forEach(btn => btn.classList.remove('active'));
        
        item.classList.add('active');
        
        if (chordData[index]) {
            textDisplay.innerHTML = chordData[index].content;
        } else {
            textDisplay.innerHTML = "<p>Text pro tuto píseň zatím chybí.</p>";
        }
    });
});

window.addEventListener('DOMContentLoaded', () => {
    menuItems[0].classList.add('active');
});

// CHORD VIEWER //////////////////////////////////////////////////////////

// TRIP TO SCHOOL //////////////////////////////////////////////////////////

const tripPhases = [
    {
        title: "1. 'Chůze' na vlak",
        desc: "Nejotravnější část cesty - obvykle to totiž není chůze, ale běh",
        x: "-5%",
        y: "-44%",
        scale: "12",
        btnText: "Nastoupit na vlak ➔"
    },
    {
        title: "2. Jízda do Krpole",
        desc: "Celej zadejchanej nastoupim do toho vlaku, který nakonec měl 10 minut zpoždění a stejně jsem tudíž čekal chvíli na nádru. Ty nový vlaky jsou ale fajn, hezky se v nich dělají na poslední chvíli věci do školy",
        x: "0%",
        y: "-35%",
        scale: "6",
        btnText: "Příjezd do Krpole ➔"
    },
    {
        title: "3. Konečně na fakultu",
        desc: "Fakulta FITu je v hezkém prostoru bývalého kláštěra kousek od nádraží",
        x: "0%",
        y: "5%",
        scale: "1.3",
        btnText: "Učení ➔"
    },
    {
        title: "4. Škola",
        desc: "",
        x: "2%",
        y: "38%",
        scale: "10",
        btnText: "Domůůů ➔"
    },
    {
        title: "5. Zpatky jedu stejně",
        desc: "Docela repetetivní, jedu zase vlakem",
        x: "0%",
        y: "5%",
        scale: "1.3",
        btnText: "Snažit se 30 minut neusnout ve vlaku... ➔"
    },
    {
        title: "6. Pěší přesun",
        desc: "A zase pjecha ty 2 km přes celé Modřice (občas si to ale zkrátím busem)",
        x: "0%",
        y: "-35%",
        scale: "6",
        btnText: "Dojít domů, usnout a jít znovu ➔"
    }
];

const trip_btn = document.getElementById('trip-btn');
const trip_title = document.getElementById('trip-title');
const desc = document.getElementById('trip-desc');
const mapImg = document.getElementById('trip-map');

let currentPhaseIndex = -1; 

trip_btn.addEventListener('click', () => {
    currentPhaseIndex++;
    if (currentPhaseIndex >= tripPhases.length) {
        currentPhaseIndex = 0;
    }

    const currentData = tripPhases[currentPhaseIndex];

    trip_title.innerText = currentData.title;
    desc.innerText = currentData.desc;
    trip_btn.innerText = currentData.btnText;

    mapImg.style.transform = `scale(${currentData.scale}) translate(${currentData.x}, ${currentData.y})`;
});





// HISTORY MAP //////////////////////////////////////////////////////////

const countryData = [
    {
        id: 'German_Empire',
        title: 'Německá říše',
        image: 'img/flags/germany-flag.png',
        descrip: 'Průmyslová a vojenská velmoc pod vedením císaře Viléma II. Hlavní spojenec Rakouska-Uherska a tvůrce Schlieffenova plánu. Disponovalo nejmodernější armádou a ambicemi ovládnout kontinent i světová moře.'
    },
    {
        id: 'AustroHungarian_Empire',
        title: 'Rakousko-Uhersko',
        image: 'img/flags/austria-flag.png',
        descrip: 'Rozlehlá mnohonárodnostní monarchie v čele s Františkem Josefem I. Sužována vnitřními etnickými konflikty. Atentát na následníka trůnu v Sarajevu se stal rozbuškou, která zapálila celou Evropu.'
    },
    {
        id: 'French_Republic',
        title: 'Francie',
        image: 'img/flags/france-flag.png',
        descrip: 'Demokratická republika s touhou po odvetě za porážku z roku 1871. Chtěla znovuzískání území Alsaska a Lotrinska. Byla klíčovým členem Trojdohody s rozsáhlou koloniální říší.'
    },
    {
        id: 'United_Kingdom_of_Great_Britain_and_Ireland',
        title: 'Velká Británie',
        image: 'img/flags/uk-flag.png',
        descrip: 'Globální impérium s nejsilnějším námořnictvem na světě. Do války vstoupila především kvůli ochraně neutrality Belgie. Představovala hlavní finanční a námořní pilíř protiněmecké koalice.'
    },
    {
        id: 'Russian_Empire',
        title: 'Rusko',
        image: 'img/flags/russia-flag.png',
        descrip: 'Autokratické carství pod vládou Mikuláše II. Obrovská, ale technologicky zaostalá armáda. Považovalo se za ochránce Slovanů na Balkáně, což jej vedlo k přímému střetu s Rakouskem.'
    },
    {
        id: 'Ottoman_Empire',
        title: 'Osmanská říše',
        image: 'img/flags/ottoman-flag.png',
        descrip: 'Upadající impérium přezdívané „nemocný muž na Bosporu“. Po vnitřních reformách se přiklonilo k Německu, aby získalo zpět ztracený vliv v Černomoří a na Kavkaze.'
    },
    {
        id: 'Spain',
        title: 'Španělsko',
        image: 'img/flags/spain-flag.png',
        descrip: 'Zůstalo neutrální. Země byla ekonomicky vyčerpaná z předchozích koloniálních válek a trpěla vnitřními sociálními nepokoji, což jí bránilo v zapojení do velkého evropského konfliktu.'
    },
    {
        id: 'Belgium',
        title: 'Belgie',
        image: 'img/flags/belgium-flag.png',
        descrip: 'Průmyslová a přísně neutrální země. Její území bylo německou armádou využito jako průchod do Francie, což vyvolalo celosvětové pobouření a vstup Británie do války.'
    },
    {
        id: 'Kingdom_of__the_Netherlands',
        title: 'Nizozemsko',
        image: 'img/flags/netherlands-flag.png',
        descrip: 'Udržovalo ozbrojenou neutralitu a sloužilo jako důležitý obchodní uzel a azyl pro uprchlíky.'
    },
    {
        id: 'Kingdom_of_Italy',
        title: 'Itálie',
        image: 'img/flags/italy-flag.png',
        descrip: 'Původně člen Trojspolku, v roce 1914 však vyhlásila neutralitu. Vyčkávala na nejvýhodnější nabídku územních zisků v Alpách a na Jadranu, aby se později přidala k Dohodě.'
    },
    {
        id: 'Switzerland',
        title: 'Švýcarsko',
        image: 'img/flags/switzerland-flag.png',
        descrip: 'Tradičně neutrální země, která sloužila jako centrum diplomacie a humanitární pomoci.'
    },
    {
        id: 'Kingdom_of_Romania',
        title: 'Rumunsko',
        image: 'img/flags/romania-flag.png',
        descrip: 'Zpočátku neutrální království se silnými vazbami na Francii. Čekalo na vhodnou chvíli, aby mohlo od Rakouska-Uherska získat území Transylvánie obývané Rumuny.'
    },
    {
        id: 'Serbia',
        title: 'Srbsko',
        image: 'img/flags/serbia-flag.png',
        descrip: 'Ambiciózní balkánský stát usilující o sjednocení jižních Slovanů. Po odmítnutí rakouského ultimáta se stalo prvním přímým účastníkem a obětí válečného konfliktu.'
    },
    {
        id: 'Kingdom_of_Bulgaria',
        title: 'Bulharsko',
        image: 'img/flags/bulgaria-flag.png',
        descrip: 'Pociťovalo hořkost z porážky v nedávných balkánských válkách. Vyčkávalo, která strana mu nabídne více území v Makedonii, což jej nakonec dovedlo k Ústředním mocnostem.'
    },
    {
        id: 'Kingdom_of_Greece',
        title: 'Řecko',
        image: 'img/flags/greece-flag.png',
        descrip: 'Rozpolcené mezi proněmeckým králem a prodohodovým premiérem. Usilovalo o další územní zisky na úkor hroutící se Osmanské říše v Egejském moři.'
    }
];

const countryPanel = document.getElementById('country');
const flagImg = document.getElementById('country-img');
const titleEl = document.getElementById('country-title');
const descEl = document.getElementById('country-describ');


fetch('img/europe_map.svg')
    .then(response => response.text())
    .then(svgData => {
        const mapContainer = document.getElementById('map-container');
        mapContainer.innerHTML = svgData;

        const paths = mapContainer.querySelectorAll('path');

        paths.forEach(path => {
            if(countryData.find(c => c.id === path.id)) {
                path.style.cursor = 'pointer';
            }

            path.addEventListener('click', () => {
                const data = countryData.find(c => c.id === path.id);

                if (data) {
                    titleEl.innerText = data.title;
                    descEl.innerText = data.descrip;
                    flagImg.src = data.image;
                    flagImg.alt = data.title;

                    paths.forEach(p => p.classList.remove('selected'));
                    path.classList.add('selected');
                }
                
            });
        });
    })