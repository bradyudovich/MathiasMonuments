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

// CTA button: reveal lead capture form with fade-in
(function() {
    const ctaBtn = document.getElementById('cta-button');
    const formSection = document.getElementById('lead-form-section');
    if (ctaBtn && formSection) {
        ctaBtn.addEventListener('click', function() {
            const isExpanded = ctaBtn.getAttribute('aria-expanded') === 'true';
            if (!isExpanded) {
                formSection.style.display = 'block';
                formSection.classList.add('fade-in');
                formSection.removeAttribute('aria-hidden');
                ctaBtn.setAttribute('aria-expanded', 'true');
                // Focus the first visible input for accessibility
                const firstInput = formSection.querySelector('input:not([type="hidden"])');
                if (firstInput) {
                    firstInput.focus();
                }
                // Smooth scroll to the form
                formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                formSection.style.display = 'none';
                formSection.classList.remove('fade-in');
                formSection.setAttribute('aria-hidden', 'true');
                ctaBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }
})();

// Populate hidden ref field from ?ref= URL parameter (default: "brady")
(function() {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref') || 'brady';
    const refField = document.getElementById('lead-ref');
    if (refField) refField.value = ref;
})();

// Lead capture form: show coupon code without page refresh
(function() {
    const form = document.getElementById('lead-capture-form');
    if (form) {
        form.addEventListener('submit', handleLeadCaptureSubmit);
    }
})();

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

// Footer: auto-update copyright year
(function() {
    const yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
