// Reveal Animations on Scroll
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);

// Initial call to reveal elements on load
document.addEventListener("DOMContentLoaded", () => {
    reveal();
    
    // Header Scroll Effect
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.padding = "1rem 0";
            header.style.background = "rgba(10, 25, 47, 0.95)";
            header.style.boxShadow = "0 10px 30px -10px rgba(2, 12, 27, 0.7)";
        } else {
            header.style.padding = "1.5rem 0";
            header.style.background = "rgba(10, 25, 47, 0.85)";
            header.style.boxShadow = "none";
        }
    });

    // Smooth Scrolling for Nav Links (Secondary check)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Optimization for Reveal on Scroll
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(reveal);
});
