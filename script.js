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

// Memorial Grant Modal: auto-open after 5 seconds on every page load
(function() {
    const modal = document.getElementById('memorial-modal');
    const closeBtn = document.getElementById('modal-close');
    if (!modal) return;

    function openModal() {
        modal.style.display = 'flex';
        modal.classList.add('fade-in');
        if (closeBtn) closeBtn.focus();
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.style.display = 'none';
        modal.classList.remove('fade-in');
        document.body.style.overflow = '';
    }

    setTimeout(openModal, 5000);

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
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

// Gallery Lightbox
(function() {
    const overlay = document.getElementById('lightbox-overlay');
    const closeBtn = document.getElementById('lightbox-close');
    const lightboxImg = document.getElementById('lightbox-img');
    if (!overlay || !lightboxImg) return;

    function openLightbox(src, alt) {
        lightboxImg.src = src;
        lightboxImg.alt = alt || '';
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
    }

    function closeLightbox() {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    }

    // Click on gallery items opens lightbox
    document.querySelectorAll('.gallery-lightbox-item').forEach(function(item) {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img) openLightbox(img.src, img.alt);
        });
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const img = this.querySelector('img');
                if (img) openLightbox(img.src, img.alt);
            }
        });
    });

    // Close via X button
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

    // Close via overlay click (outside modal)
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) closeLightbox();
    });

    // Close via Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.style.display === 'flex') {
            closeLightbox();
        }
    });
})();
