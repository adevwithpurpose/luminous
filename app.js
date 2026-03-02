// Simple Scroll Animations
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply to sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('opacity-0'); // Initial state
        observer.observe(section);
    });
});

// Add opacity-0 to CSS via style injection for the observer
const style = document.createElement('style');
style.textContent = `
    .opacity-0 { opacity: 0; transform: translateY(20px); transition: opacity 0.8s ease, transform 0.8s ease; }
    .animate-fade-in { opacity: 1 !important; transform: translateY(0) !important; }
`;
document.head.appendChild(style);
