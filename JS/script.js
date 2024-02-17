// <======== Initializing AOS-Animations JS ========>
AOS.init({
    duration: 1200,
});


// <======== JS Program For the Responsive Navigation Bar ========>
const menuIcon = document.querySelector("#navbar-container .navbar .ri-menu-line");
const closeIcon = document.querySelector("#navbar-container .navbar .right-navbar.responsive .ri-close-line");
const middleNavbarResponsive = document.querySelector("#navbar-container .navbar .right-navbar.responsive");
const navigationMenuLinks = document.querySelectorAll("#navbar-container .navbar .right-navbar.responsive ul li a");

menuIcon.addEventListener("click", () => {
    middleNavbarResponsive.style.transform = 'translate(0px)';
})

closeIcon.addEventListener("click", () => {
    middleNavbarResponsive.style.transform = 'translate(200%)';
})

navigationMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        middleNavbarResponsive.style.transform = 'translate(200%)';
    })
})


// <======== Adding TypeWriter Effect in Home-Container ========>
const homeContainerTitle = document.querySelector('#home-container .home-container-title h1');
const homeTitles = ["hello", "hola", "hi", "namaste", "bonjour", "ciao", "marhaba", "aloha", "shalom"];
let titleIndex = 0;
if (homeContainerTitle) {
    updateHomeTitleText();
}

function updateHomeTitleText() {
    homeContainerTitle.innerText = `${homeTitles[titleIndex]}`
    titleIndex++;
    if (titleIndex == 4 || titleIndex == 5 || titleIndex == 7 || titleIndex == 9) {
        homeContainerTitle.style.fontSize = '20vw';
        homeContainerTitle.style.padding = '60px 0px';
    }
    else {
        homeContainerTitle.style.fontSize = '30vw';
        homeContainerTitle.style.padding = '0px 0px';
    }

    if (titleIndex == homeTitles.length) {
        titleIndex = 0;
    }
    setTimeout(updateHomeTitleText, 1200);
}


// <======== Adding AOS-Animations JS in Video-Container ========>
const videoContainer = document.querySelector('#video-container');
if (videoContainer) {
    setTimeout(() => {
        videoContainer.classList.remove('aos-animate')
    }, 500);
    window.addEventListener('scroll', () => {
        videoContainer.classList.add('aos-animate');
    })
}


// <======== JS Program For the Contact Form ========>
const contactContainerForm = document.querySelector("#contact-container .contact-container-form form");
const contactContainerFormAllInputs = document.querySelectorAll("#contact-container .contact-container-form-inputs");

if (contactContainerForm) {
    contactContainerForm.addEventListener("submit", () => {
        setTimeout(() => {
            contactContainerFormAllInputs.forEach((input, index) => {
                if (index == 1) {
                    input.value = "Strategy";
                }
                else {
                    input.value = "";
                }
            })
        }, 2000);
    })
}