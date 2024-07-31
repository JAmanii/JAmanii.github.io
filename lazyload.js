document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll(".portfolio-image");

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    });

    lazyImages.forEach(image => {
        imageObserver.observe(image);
    });
});
