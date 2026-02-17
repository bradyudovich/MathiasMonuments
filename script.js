// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Move focus to the target for accessibility
            target.focus({ preventScroll: true });
        }
    });
});

// Contact form submission handler (for legacy index.html)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // For demonstration purposes, show an alert
        // In a real application, you would send this data to a server
        alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon.`);
        
        // Reset the form
        contactForm.reset();
    });
}

// Add scroll effect to header - toggle header--scrolled class at 80px
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 80) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    }
});

// Handle quote form submission
function handleQuoteFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const message = form.querySelector('#message').value;
    
    // For demonstration purposes, show an alert
    // TODO: Replace this with actual backend API call when ready
    // Example: fetch('/api/quote', { method: 'POST', body: JSON.stringify({ name, email, message }) })
    alert(`Thank you, ${name}! Your quote request has been received. We'll get back to you at ${email} soon.`);
    
    // Reset the form
    form.reset();
}
