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

// Populate hidden ref field from ?ref= URL parameter (default: "brady")
(function() {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref') || 'brady';
    const refField = document.getElementById('lead-ref');
    if (refField) refField.value = ref;
})();

// Lead capture form: show coupon code without page refresh
function handleLeadCaptureSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.querySelector('#lead-name').value.trim();
    const email = form.querySelector('#lead-email').value.trim();
    const ref = form.querySelector('#lead-ref').value;

    // No external service — log submission data locally
    console.log('Lead capture submission:', { name, email, ref });

    document.getElementById('lead-form-container').style.display = 'none';
    const thankyou = document.getElementById('lead-thankyou');
    thankyou.querySelector('.lead-name-display').textContent = name || 'there';
    thankyou.style.display = 'block';
}
