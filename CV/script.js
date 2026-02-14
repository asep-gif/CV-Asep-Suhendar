document.addEventListener("DOMContentLoaded", function() {
    const reveals = document.querySelectorAll(".reveal-on-scroll");
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 80;
        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add("active");
            }
        });
    };
    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);
});