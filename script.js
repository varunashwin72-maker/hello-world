// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Get Started button functionality
document.querySelector('.btn-primary').addEventListener('click', function() {
    const contactSection = document.querySelector('#contact');
    contactSection.scrollIntoView({
        behavior: 'smooth'
    });
});

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Simple validation
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received. We'll get back to you soon.`);
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Mobile menu toggle (for future enhancement)
console.log('Website loaded successfully!');