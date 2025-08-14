window.addEventListener('load', () => {
    console.log("The page has loaded, with the gray rectangle and black sheet ready.");

    const aboutProjectLink = document.getElementById('aboutProjectLink');
    const aboutMeLink = document.getElementById('aboutMeLink');
    const mainPageLink = document.getElementById('mainPageLink'); 
    const mainPage = document.getElementById('mainPage');
    const aboutPage = document.getElementById('aboutPage');
    const aboutMePage = document.getElementById('aboutMePage');
    const showPage = (pageToShow) => {
        const pages = [mainPage, aboutPage, aboutMePage];
        pages.forEach(page => {
            page.classList.add('hidden');
        });
        pageToShow.classList.remove('hidden');
    };
     aboutProjectLink.addEventListener('click', (event) => {
        event.preventDefault();
        showPage(aboutPage);
    });
    aboutMeLink.addEventListener('click', (event) => {
        event.preventDefault();
        showPage(aboutMePage);
    });
    mainPageLink.addEventListener('click', (event) => {
        event.preventDefault();
        showPage(mainPage);
    });
});
