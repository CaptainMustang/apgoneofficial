// Reveal elements on scroll
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.detail-block').forEach(block => observer.observe(block));

// Interactive Confetti & Scale Animation
const dateTrigger = document.getElementById('confetti-trigger');

dateTrigger.addEventListener('click', () => {
    // Elegant gold/white confetti
    confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.8 },
        colors: ['#d4af37', '#ffffff', '#1a1a1a']
    });
    
    // Add a quick haptic-style visual pulse
    dateTrigger.style.transform = 'scale(1.05)';
    setTimeout(() => dateTrigger.style.transform = 'scale(1)', 200);
});
