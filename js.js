$(document).ready(function () {
        //your code here
            $('.loader').fadeOut();
            $('.loader-mask').delay(650).fadeOut('slow');
        });

       
        let currentLang = 'en';

        // Load profile image
        const profileImg = document.getElementById('profileImg');
        profileImg.onerror = function() {
            this.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%232563eb' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' font-size='80' fill='white' text-anchor='middle' dy='.3em' font-family='Arial'%3EAH%3C/text%3E%3C/svg%3E";
        };

        function toggleLanguage() {
            currentLang = currentLang === 'en' ? 'ar' : 'en';
            const body = document.body;
            const langButton = document.querySelector('.lang-switch');
            
            // Update direction
            body.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
            body.setAttribute('lang', currentLang);
            
            // Update button text
            langButton.textContent = currentLang === 'en' ? 'العربية' : 'English';
            
            // Update all translatable elements
            const elements = document.querySelectorAll('[data-en][data-ar]');
            elements.forEach(el => {
                el.textContent = el.getAttribute(`data-${currentLang}`);
            });

            // Smooth scroll behavior
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });

            // Smooth scroll for navigation
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click');
            });

            
        }

        // ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});

$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});


const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active'); // Optional: add an active state for the icon itself (e.g., to animate it)
});