document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleBtn');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');

    toggleBtn.addEventListener('click', function () {
        sidebar.classList.toggle('collapsed');

        // Optional: Save state in localStorage
        if (sidebar.classList.contains('collapsed')) {
            localStorage.setItem('sidebarCollapsed', 'true');
        } else {
            localStorage.setItem('sidebarCollapsed', 'false');
        }
    });

    // Optional: Load saved state
    if (localStorage.getItem('sidebarCollapsed') === 'true') {
        sidebar.classList.add('collapsed');
    }
});



menuBar = document.querySelector('.menu-bar');
sideBar = document.querySelector('.sidebar');
exitSidebarBtn = document.querySelector('.exit-sidebar');


// Toggle sidebar 
menuBar.addEventListener('click', function() {
    sideBar.classList.toggle('open');
});

// Exit sidebar 
exitSidebarBtn.addEventListener('click', function() {
    sideBar.classList.toggle('open');
    menuBar.style.display = 'flex';
});


const navBtns = document.querySelectorAll('.menu');
const sections = document.querySelectorAll('section');

// Show different page sections on clicking the navigation
function showSection(section) {
    Object.values(navBtns).forEach(btn => btn.classList.remove('active'));
    navBtns[section].classList.add('active');
    sideBar.classList.toggle('open');
}

Object.keys(navBtns).forEach(section => {
    navBtns[section].addEventListener('click', () => showSection(section));
});

// Activate active class on the navbar links when scrolling the sections
window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        let sectionTop = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;

        if (sectionTop >= offset && sectionTop < offset + height) {
            currentSection = section.getAttribute('id');
        }
    });

    navBtns.forEach(menu => {
        menu.classList.remove('active');
        if (menu.querySelector(`a[href="#${currentSection}"]`)) {
            menu.classList.add('active');
        }
    });
});

// Project section 
const projectMenuItems = document.querySelectorAll('.project-menu');

const projectCategories = {
    webDesign: document.querySelectorAll('.web-design'),
    webDev: document.querySelectorAll('.web-dev'),
    appDesign: document.querySelectorAll('.app-design'),
    appDev: document.querySelectorAll('.app-dev'),
};


// Toggle different project categories 
function showProjects(category) {
    if (category === 'all') {
        Object.values(projectCategories).forEach(items => items.forEach(item => item.style.display = 'flex'));
    } else {
        Object.values(projectCategories).forEach(items => items.forEach(item => item.style.display = 'none'));
        projectCategories[category].forEach(item => item.style.display = 'flex');
    }

    // Toggle the active class on the menu links 
    projectMenuItems.forEach(menu => menu.classList.remove('active-project'));
    document.querySelector(`[data-category="${category}"]`).classList.add('active-project');
}

document.addEventListener('DOMContentLoaded', () => {
    showProjects('appDev');
});

projectMenuItems.forEach(menu => {
    menu.addEventListener('click', () => {
        const category = menu.getAttribute('data-category');
        showProjects(category);
    });
});




