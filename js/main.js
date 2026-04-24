/* ========================================
   Bait Muhandis - Main JavaScript
   ======================================== */

// Language Switcher
let currentLang = localStorage.getItem('language') || 'en';

function switchLanguage(lang) {
    currentLang = lang;
    const html = document.documentElement;
    const body = document.body;
    const langBtn = document.getElementById('langBtn');

    if (lang === 'ar') {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        body.classList.add('rtl');
        if (langBtn) langBtn.querySelector('.lang-text').textContent = 'EN';
        localStorage.setItem('language', 'ar');
    } else {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        body.classList.remove('rtl');
        if (langBtn) langBtn.querySelector('.lang-text').textContent = 'عربي';
        localStorage.setItem('language', 'en');
    }

    // Translate elements with data-en and data-ar attributes
    document.querySelectorAll('[data-en][data-ar]').forEach(el => {
        // Find if element has an icon
        const icon = el.querySelector('i');
        const translation = el.getAttribute(`data-${lang}`);
        
        if (icon) {
            // Preserve the icon and only replace the text part
            const iconHtml = icon.outerHTML;
            // Check direction for icon placement
            if (lang === 'ar') {
                el.innerHTML = translation + ' ' + iconHtml;
            } else {
                el.innerHTML = iconHtml + ' ' + translation;
            }
        } else {
            // No icon, just replace content
            el.innerHTML = translation;
        }
    });

    // Translate select options
    document.querySelectorAll('option[data-en][data-ar]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });

    // Translate placeholders
    document.querySelectorAll('[data-placeholder-en][data-placeholder-ar]').forEach(el => {
        el.placeholder = el.getAttribute(`data-placeholder-${lang}`);
    });
}

// Initialize language on page load
function initLanguage() {
    const savedLang = localStorage.getItem('language') || 'en';
    switchLanguage(savedLang);
}

document.addEventListener('DOMContentLoaded', function() {
    // Initializations
    initMobileMenu();
    initSmoothScroll();
    initActiveNavigation();
    initScrollAnimations();
    initBackToTop();
    initStatsCounter();
    initContactForm();
    initHeaderScroll();
    initAddonGrids();
    initFilters();
    initSectionFilters();

    // Language switcher MUST be last to catch dynamic content
    initLanguage();

    // Language switcher button
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'ar' : 'en';
            switchLanguage(newLang);
        });
    }
});

/* ========================================
   Section Filters (page-level — unified)
   ======================================== */
function initSectionFilters() {
    const sections = Array.from(document.querySelectorAll('.product-detail-section'));
    if (sections.length < 2) return;

    sections.forEach((sec, i) => sec.setAttribute('data-sec-id', i));

    const host = document.querySelector('section.products-detail .container');
    if (!host) return;

    // Create Main Dynamic Header (Icon + Title + Subtitle)
    const mainHeader = document.createElement('div');
    mainHeader.className = 'section-main-header';
    mainHeader.innerHTML = `
        <div class="section-header-icon" id="mainHeaderIcon">
            <i class="fas fa-th-large"></i>
        </div>
        <h2 id="mainHeaderTitle" data-en="All Products" data-ar="جميع المنتجات">All Products</h2>
        <p id="mainHeaderDesc" data-en="Explore our comprehensive range of high-quality solutions" data-ar="استكشف مجموعتنا الشاملة من الحلول عالية الجودة">Explore our comprehensive range of high-quality solutions</p>
    `;
    host.insertBefore(mainHeader, host.firstChild);

    // Build Bar
    const bar = document.createElement('div');
    bar.className = 'section-filter-bar';

    const lbl = document.createElement('span');
    lbl.className = 'section-filter-bar-label';
    lbl.innerHTML = '<i class="fas fa-layer-group"></i> SECTIONS';
    bar.appendChild(lbl);

    bar.appendChild(makeSectionPill('All Sections', 'fas fa-th-large', 'all'));

    sections.forEach((sec, i) => {
        const iconEl = sec.querySelector('.section-title > i');
        const h2El   = sec.querySelector('.section-title h2');
        const icon   = iconEl ? iconEl.className : 'fas fa-box';
        const name   = h2El ? (h2El.getAttribute('data-en') || h2El.textContent.trim()) : `Section ${i + 1}`;
        bar.appendChild(makeSectionPill(name, icon, i));
    });

    host.insertBefore(bar, mainHeader.nextSibling);

    bar.addEventListener('click', e => {
        const btn = e.target.closest('.section-filter-btn');
        if (!btn) return;

        bar.querySelectorAll('.section-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const idx = btn.getAttribute('data-sec-idx');
        
        // Update Main Header
        const iconId = document.getElementById('mainHeaderIcon').querySelector('i');
        const titleId = document.getElementById('mainHeaderTitle');
        const descId = document.getElementById('mainHeaderDesc');

        if (idx === 'all') {
            iconId.className = 'fas fa-th-large';
            titleId.textContent = 'All Products';
            titleId.setAttribute('data-en', 'All Products');
            titleId.setAttribute('data-ar', 'جميع المنتجات');
            descId.textContent = 'Explore our comprehensive range of high-quality solutions';
            descId.setAttribute('data-en', 'Explore our comprehensive range of high-quality solutions');
            descId.setAttribute('data-ar', 'استكشف مجموعتنا الشاملة من الحلول عالية الجودة');
        } else {
            const sec = sections.find(s => s.getAttribute('data-sec-id') === idx);
            const secIcon = sec.querySelector('.section-title > i');
            const secTitle = sec.querySelector('.section-title h2');
            const secDesc = sec.querySelector('.section-title p');

            iconId.className = secIcon ? secIcon.className : 'fas fa-box';
            titleId.textContent = secTitle ? secTitle.textContent : '';
            titleId.setAttribute('data-en', secTitle ? (secTitle.getAttribute('data-en') || secTitle.textContent) : '');
            titleId.setAttribute('data-ar', secTitle ? (secTitle.getAttribute('data-ar') || '') : '');
            
            descId.textContent = secDesc ? secDesc.textContent : '';
            descId.setAttribute('data-en', secDesc ? (secDesc.getAttribute('data-en') || secDesc.textContent) : '');
            descId.setAttribute('data-ar', secDesc ? (secDesc.getAttribute('data-ar') || '') : '');
        }

        sections.forEach(sec => {
            const show = idx === 'all' || sec.getAttribute('data-sec-id') === idx;
            sec.classList.toggle('section-hidden', !show);
        });

        // Toggle visibility of the original section titles when focused
        sections.forEach(sec => {
            const titleSection = sec.querySelector('.section-title');
            if (titleSection) {
                titleSection.style.display = (idx === 'all') ? 'block' : 'none';
            }
        });

        if (idx !== 'all') {
            const target = sections.find(s => s.getAttribute('data-sec-id') === idx);
            if (target) {
                setTimeout(() => {
                    const headerOffset = 220; 
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo({ top: mainHeader.offsetTop - 100, behavior: 'smooth' });
        }
    });
}

function makeSectionPill(label, iconClass, idx) {
    const btn = document.createElement('button');
    btn.className = 'section-filter-btn' + (idx === 'all' ? ' active' : '');
    btn.setAttribute('data-sec-idx', String(idx));
    btn.innerHTML = `<i class="${iconClass}"></i> ${label}`;
    return btn;
}


/* ========================================
   Product Filters
   ======================================== */
function initFilters() {
    const grids = document.querySelectorAll('.products-grid');
    grids.forEach(grid => {
        const items = Array.from(grid.querySelectorAll('.product-item[data-filter-tags]'));
        if (items.length === 0) return;

        // Collect unique tags preserving insertion order
        const tagSet = new Set();
        items.forEach(item => {
            item.getAttribute('data-filter-tags').split(',').forEach(t => tagSet.add(t.trim()));
        });
        if (tagSet.size < 2) return;

        // Build filter bar
        const bar = document.createElement('div');
        bar.className = 'filter-bar';

        const allBtn = createFilterBtn('All', true);
        bar.appendChild(allBtn);
        tagSet.forEach(tag => bar.appendChild(createFilterBtn(tag, false)));

        // Empty state placeholder
        const empty = document.createElement('p');
        empty.className = 'filter-empty-msg';
        empty.innerHTML = '<i class="fas fa-search"></i>No products match this filter.';
        grid.appendChild(empty);

        grid.parentNode.insertBefore(bar, grid);

        // Click handler
        bar.addEventListener('click', e => {
            const btn = e.target.closest('.filter-btn');
            if (!btn) return;

            bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            let visible = 0;
            items.forEach(item => {
                const tags = item.getAttribute('data-filter-tags').split(',').map(t => t.trim());
                const show = filter === 'All' || tags.includes(filter);
                item.classList.toggle('filter-hidden', !show);
                if (show) visible++;
            });
            empty.style.display = visible === 0 ? 'block' : 'none';
        });
    });
}

function createFilterBtn(label, isActive) {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (isActive ? ' active' : '');
    btn.setAttribute('data-filter', label);
    btn.textContent = label;
    return btn;
}


/* ========================================
   Add-on Grids (Accessories)
   ======================================== */
function initAddonGrids() {
    const grids = document.querySelectorAll('.addon-grid');
    if (grids.length === 0) return;

    grids.forEach(grid => {
        const parentId = grid.getAttribute('data-for');
        if (typeof productData === 'undefined') return;
        
        const product = productData[parentId];
        if (!product || !product.options || product.options.length === 0) {
            const section = grid.closest('.addon-section');
            if (section) section.style.display = 'none';
            return;
        }

        const currentLang = document.documentElement.getAttribute('lang') || 'en';

        grid.innerHTML = product.options.map(opt => `
            <div class="addon-card" onclick="showProductModal('${parentId}', '${opt.label}')">
                <div class="addon-img">
                    <img src="${opt.image || 'images/fire-fighting/accessories/default.png'}" alt="${opt.label}">
                </div>
                <div class="addon-info">
                    <h4 data-en="${opt.label}" data-ar="${opt.label_ar || opt.label}">${opt.label}</h4>
                    <p>${opt.value}</p>
                </div>
            </div>
        `).join('');
    });
}

/* ========================================
   Mobile Menu
   ======================================== */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Toggle icon between bars and times
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
}

/* ========================================
   Smooth Scrolling
   ======================================== */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                
                const target = document.querySelector(href);
                
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

/* ========================================
   Active Navigation
   ======================================== */
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function setActiveNav() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', setActiveNav);
    setActiveNav(); // Run once on load
}

/* ========================================
   Scroll Animations
   ======================================== */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.feature-card, .product-card, .product-item, .service-card, .stat, .contact-item, .about-text, .about-image, .about-content-text, .about-hero-image, .stat-card'
    );

    // Add scroll-animate class to all elements
    animatedElements.forEach(el => {
        el.classList.add('scroll-animate');
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

/* ========================================
   Back to Top Button
   ======================================== */
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });

        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/* ========================================
   Stats Counter Animation
   ======================================== */
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (statNumbers.length === 0) return;

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

function animateCounter(element, target) {
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

/* ========================================
   Contact Form
   ======================================== */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();

            // Basic validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                showNotification('Thank you for your message! We will get back to you soon.', 'success');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    `;

    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 20px;
                cursor: pointer;
                margin-left: auto;
                padding: 0;
                line-height: 1;
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

/* ========================================
   Header Scroll Effect
   ======================================== */
function initHeaderScroll() {
    const header = document.querySelector('.header');

    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }
        });
    }
}

/* ========================================
   Product Filter (Optional Enhancement)
   ======================================== */
// This can be expanded for filtering products by category
function filterProducts(category) {
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        if (category === 'all') {
            product.style.display = 'block';
        } else {
            // Add filtering logic here if needed
            product.style.display = 'block';
        }
    });
}

/* ========================================
   Preloader (Optional)
   ======================================== */
window.addEventListener('load', function() {
    // Remove any loading states
    document.body.classList.remove('loading');
});

/* ========================================
   Parallax Effect for Hero Section
   ======================================== */
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.5;
        hero.style.backgroundPositionY = rate + 'px';
    }
});

/* ========================================
   Keyboard Navigation Support
   ======================================== */
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
});

/* ========================================
   Console Welcome Message
   ======================================== */
console.log('%c🔥 Welcome to FireTech Supplies!', 'color: #e63946; font-size: 24px; font-weight: bold;');
console.log('%cYour trusted partner for Fire Safety, Cables & Tools', 'color: #1d3557; font-size: 14px;');
console.log('%cContact us: info@firetechsupplies.com', 'color: #666; font-size: 12px;');