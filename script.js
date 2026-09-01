/**
 * Scroll reveal animation using Intersection Observer
 * Progressively enhances page experience as sections enter viewport
 */

document.addEventListener('DOMContentLoaded', () => {
    const revealItems = document.querySelectorAll('.reveal');
    
    // Skip if no items to reveal or if IntersectionObserver not supported
    if (!revealItems.length || !('IntersectionObserver' in window)) {
        return;
    }

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealItems.forEach((item) => {
        revealObserver.observe(item);
    });
});
