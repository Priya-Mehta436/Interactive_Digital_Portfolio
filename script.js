// Initialize AOS
AOS.init({
    offset: 0,
    duration: 1000,
    once: true
});


// Enhanced JavaScript for portfolio functionality
document.addEventListener('DOMContentLoaded', function() {
    // Hide loader after page load
    window.addEventListener('load', function() {
        const loader = document.getElementById('loader');
        setTimeout(function() {
            loader.classList.add('hidden');
        }, 1000);
    });

    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            hamburger.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // Close mobile menu when clicking on a link
    const navLinksItems = document.querySelectorAll('.nav-links a');
    for (let i = 0; i < navLinksItems.length; i++) {
        navLinksItems[i].addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    }

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        const backToTop = document.getElementById('backToTop');
        
        if (window.scrollY > 100) {
            header.classList.add('sticky');
            backToTop.classList.add('active');
        } else {
            header.classList.remove('sticky');
            backToTop.classList.remove('active');
        }
    });

    // Animate stats counter
    function animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        
        for (let i = 0; i < stats.length; i++) {
            const stat = stats[i];
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000;
            const step = target / (duration / 16);
            
            let current = 0;
            
            const timer = setInterval(function() {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current);
            }, 16);
        }
    }

    // Start stats animation when page loads
    setTimeout(animateStats, 500);

    // Project filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    for (let i = 0; i < filterButtons.length; i++) {
        filterButtons[i].addEventListener('click', function() {
            for (let j = 0; j < filterButtons.length; j++) {
                filterButtons[j].classList.remove('active');
            }
            
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            for (let k = 0; k < projectCards.length; k++) {
                const card = projectCards[k];
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block'; 
                } else {
                    card.style.display = 'none';
                }
            }
        });
    }

    // Contact form validation
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Simple validation
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        
        if (name.value.trim() === '') {
            isValid = false;
            name.style.borderColor = '#ff1744';
        } else {
            name.style.borderColor = '#3a3a45';
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '' || !emailRegex.test(email.value)) {
            isValid = false;
            email.style.borderColor = '#ff1744';
        } else {
            email.style.borderColor = '#3a3a45';
        }
        
        if (subject.value.trim() === '') {
            isValid = false;
            subject.style.borderColor = '#ff1744';
        } else {
            subject.style.borderColor = '#3a3a45';
        }
        
        if (message.value.trim() === '') {
            isValid = false;
            message.style.borderColor = '#ff1744';
        } else {
            message.style.borderColor = '#3a3a45';
        }
        
        if (isValid) {
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(function() {
                // success message
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        }
    });

    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    for (let i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

});