// Modern Portfolio JavaScript - Ultra Professional Features

// DOM Elements
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const themeToggle = document.getElementById("theme-toggle");
const loadingScreen = document.getElementById("loading-screen");
const backToTop = document.getElementById("back-to-top");
const cursor = document.querySelector(".cursor");
const cursorFollower = document.querySelector(".cursor-follower");
const contactForm = document.getElementById("contact-form");
// Eliminada la referencia a elementos animados

// Theme Management
let currentTheme = localStorage.getItem("theme") || "light";

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  currentTheme = theme;

  const icon = themeToggle.querySelector("i");
  if (theme === "dark") {
    icon.className = "fas fa-sun";
  } else {
    icon.className = "fas fa-moon";
  }
}

// Initialize theme
setTheme(currentTheme);

// Theme toggle
themeToggle.addEventListener("click", () => {
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
});

// Loading Screen
let loadingProgress = 0;
const loadingProgressBar = document.querySelector(".loading-progress");
const loadingPercentage = document.querySelector(".loading-percentage");

function updateLoadingProgress() {
  loadingProgress += Math.random() * 15;
  if (loadingProgress > 100) loadingProgress = 100;

  loadingProgressBar.style.width = loadingProgress + "%";
  loadingPercentage.textContent = Math.floor(loadingProgress) + "%";

  if (loadingProgress < 100) {
    setTimeout(updateLoadingProgress, 100);
  } else {
    setTimeout(() => {
      loadingScreen.classList.add("hidden");
      document.body.style.overflow = "visible";
    }, 500);
  }
}

// Start loading animation
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(updateLoadingProgress, 500);
});

// Custom Cursor
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let followerX = 0, followerY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.1;
  cursorY += (mouseY - cursorY) * 0.1;
  followerX += (mouseX - followerX) * 0.05;
  followerY += (mouseY - followerY) * 0.05;

  cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`;
  cursorFollower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`;

  requestAnimationFrame(animateCursor);
}

// Start cursor animation
animateCursor();

// Cursor hover effects
const interactiveElements = document.querySelectorAll("a, button, .project-card, .skill-card, .certification-card");
interactiveElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform += " scale(1.5)";
    cursorFollower.style.transform += " scale(1.2)";
  });

  el.addEventListener("mouseleave", () => {
    cursor.style.transform = cursor.style.transform.replace(" scale(1.5)", "");
    cursorFollower.style.transform = cursorFollower.style.transform.replace(" scale(1.2)", "");
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;

  if (scrolled > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Back to top button
  if (scrolled > 300) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }

  // Parallax effect for floating elements
  const floatingElements = document.querySelectorAll(".floating-card");
  floatingElements.forEach((element, index) => {
    const speed = Number.parseFloat(element.dataset.speed) || 0.5;
    element.style.transform = `translateY(${scrolled * speed * 0.1}px)`;
  });
});

// Mobile menu toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Smooth scrolling for navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Back to top functionality
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Initialize typing animation when page loads
window.addEventListener("load", () => {
  setTimeout(() => {
    const typingElement = document.querySelector(".hero-greeting");
    if (typingElement) {
      typeWriter(typingElement, "Hola, soy", 150);
    }
  }, 2000);
});

// Función eliminada ya que no se utiliza

// Animated counters for stats
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);

  function updateCounter() {
    start += increment;
    if (start < target) {
      element.textContent = Math.floor(start);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  }

  updateCounter();
}

// Skills filtering
const categoryBtns = document.querySelectorAll(".category-btn");
const skillCards = document.querySelectorAll(".skill-card");

categoryBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;

    // Update active button
    categoryBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Filter skills
    skillCards.forEach((card) => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 100);
      } else {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        setTimeout(() => {
          card.style.display = "none";
        }, 300);
      }
    });

    // Animate skill bars
    setTimeout(() => {
      const visibleCards = document.querySelectorAll(`.skill-card[data-category="${category}"]`);
      visibleCards.forEach((card) => {
        const progressBar = card.querySelector(".skill-progress");
        const level = progressBar.dataset.level;
        progressBar.style.width = level + "%";
      });
    }, 400);
  });
});

// Projects filtering
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    // Update active button
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Filter projects
    projectCards.forEach((card) => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 100);
      } else {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        setTimeout(() => {
          card.style.display = "none";
        }, 300);
      }
    });
  });
});

// SISTEMA 100% JAVASCRIPT - SIN CSS ANIMATIONS
console.log('🚀 Sistema 100% JavaScript iniciado');

// Función para animar elementos con JavaScript puro
function animateElement(element, startProps, endProps, duration, easing = 'easeOut') {
    return new Promise((resolve) => {
        const startTime = performance.now();
        
        function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing functions
            let easedProgress = progress;
            if (easing === 'easeOut') {
                easedProgress = 1 - Math.pow(1 - progress, 3);
            } else if (easing === 'easeInOut') {
                easedProgress = progress < 0.5 
                    ? 2 * progress * progress 
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            } else if (easing === 'bounce') {
                easedProgress = progress < 0.5 
                    ? 2 * progress * progress 
                    : 1 - Math.pow(-2 * progress + 2, 2) / 2;
            }
            
            // Interpolate properties
            Object.keys(endProps).forEach(prop => {
                const start = startProps[prop];
                const end = endProps[prop];
                const current = start + (end - start) * easedProgress;
                
                if (prop === 'opacity') {
                    element.style.opacity = current;
                } else if (prop === 'translateY') {
                    element.style.transform = `translateY(${current}px)`;
                } else if (prop === 'translateX') {
                    element.style.transform = `translateX(${current}px)`;
                } else if (prop === 'scale') {
                    element.style.transform = `scale(${current})`;
                } else if (prop === 'rotate') {
                    element.style.transform = `rotate(${current}deg)`;
                }
            });
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                resolve();
            }
        }
        
        requestAnimationFrame(animate);
    });
}

// Animaciones específicas
function fadeInUp(element, delay = 0) {
    setTimeout(() => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            animateElement(element, 
                { opacity: 0, translateY: 30 }, 
                { opacity: 1, translateY: 0 }, 
                800, 'easeOut'
            );
        }, 50);
    }, delay);
}

function slideInLeft(element, delay = 0) {
    setTimeout(() => {
        element.style.opacity = '0';
        element.style.transform = 'translateX(-50px)';
        
        setTimeout(() => {
            animateElement(element, 
                { opacity: 0, translateX: -50 }, 
                { opacity: 1, translateX: 0 }, 
                800, 'easeOut'
            );
        }, 50);
    }, delay);
}

function slideInRight(element, delay = 0) {
    setTimeout(() => {
        element.style.opacity = '0';
        element.style.transform = 'translateX(50px)';
        
        setTimeout(() => {
            animateElement(element, 
                { opacity: 0, translateX: 50 }, 
                { opacity: 1, translateX: 0 }, 
                800, 'easeOut'
            );
        }, 50);
    }, delay);
}

function scaleIn(element, delay = 0) {
    setTimeout(() => {
        element.style.opacity = '0';
        element.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            animateElement(element, 
                { opacity: 0, scale: 0.8 }, 
                { opacity: 1, scale: 1 }, 
                600, 'bounce'
            );
        }, 50);
    }, delay);
}

// Inicializar todas las animaciones
function initAllAnimations() {
    console.log('🎬 Iniciando animaciones JavaScript...');
    
    // Section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach((header, index) => {
        fadeInUp(header, index * 200);
    });
    
    // About card
    const aboutCard = document.querySelector('.about-card');
    if (aboutCard) {
        slideInLeft(aboutCard, 300);
    }
    
    // Stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        scaleIn(card, 500 + (index * 150));
    });
    
    // Skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        fadeInUp(card, 800 + (index * 100));
    });
    
    // Project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        if (index % 2 === 0) {
            slideInRight(card, 1000 + (index * 200));
        } else {
            slideInLeft(card, 1000 + (index * 200));
        }
    });
    
    console.log(`✅ Animaciones iniciadas para ${sectionHeaders.length + statCards.length + skillCards.length + projectCards.length} elementos`);
}

// Efectos hover con JavaScript
function initHoverEffects() {
    console.log('🎯 Iniciando efectos hover...');
    
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
    
    console.log(`✅ Efectos hover agregados a ${cards.length} elementos`);
}

// Contadores animados
function animateCounters() {
    console.log('🔢 Animando contadores...');
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach((counter, index) => {
        const target = parseInt(counter.getAttribute('data-target'));
        let current = 0;
        const increment = target / 30;
        
        setTimeout(() => {
            const interval = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(interval);
                } else {
                    counter.textContent = Math.floor(current);
                }
            }, 50);
        }, index * 200);
    });
}

// Efecto de escritura
function typeText() {
    console.log('⌨️ Iniciando efecto de escritura...');
    const heroGreeting = document.querySelector('.hero-greeting');
    if (heroGreeting) {
        const text = heroGreeting.textContent;
        heroGreeting.textContent = '';
        
        let i = 0;
        const interval = setInterval(() => {
            heroGreeting.textContent += text.charAt(i);
            i++;
            if (i >= text.length) {
                clearInterval(interval);
            }
        }, 100);
    }
}

// Inicializar todo
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM listo, iniciando sistema JavaScript...');
    
    // Inicializar animaciones
    setTimeout(initAllAnimations, 100);
    
    // Efectos hover
    setTimeout(initHoverEffects, 200);
    
    // Efecto de escritura
    setTimeout(typeText, 500);
    
    // Contadores
    setTimeout(animateCounters, 1000);
});

console.log('✅ Sistema JavaScript cargado');

// Initialize EmailJS
(function() {
  emailjs.init("YOUR_PUBLIC_KEY"); // Reemplaza con tu clave pública de EmailJS
})();

// Form submission with real email functionality
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector(".btn-submit");
    const btnText = submitBtn.querySelector(".btn-text");
    const btnLoading = submitBtn.querySelector(".btn-loading");

    // Show loading state
    submitBtn.classList.add("loading");
    submitBtn.disabled = true;

    // Get form data
    const formData = new FormData(contactForm);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    // Simple validation
    if (!data.name || !data.email || !data.subject || !data.message) {
      showNotification("Por favor, completa todos los campos.", "error");
      submitBtn.classList.remove("loading");
      submitBtn.disabled = false;
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      showNotification("Por favor, ingresa un email válido.", "error");
      submitBtn.classList.remove("loading");
      submitBtn.disabled = false;
      return;
    }

    // Send email using EmailJS
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: "osmanbarahona2020@gmail.com"
      };

      await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams);
      
      showNotification("¡Mensaje enviado correctamente! Te contactaré pronto.", "success");
      contactForm.reset();

      // Add success animation
      contactForm.style.transform = "scale(0.98)";
      setTimeout(() => {
        contactForm.style.transform = "scale(1)";
      }, 200);
    } catch (error) {
      console.error("Error sending email:", error);
      showNotification("Hubo un error al enviar el mensaje. Inténtalo de nuevo.", "error");
    } finally {
      submitBtn.classList.remove("loading");
      submitBtn.disabled = false;
    }
  });
}

// Enhanced notification system
function showNotification(message, type = "info", duration = 5000) {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;

  // Create notification content
  const content = document.createElement("div");
  content.className = "notification-content";

  const icon = document.createElement("i");
  const text = document.createElement("span");
  text.textContent = message;

  switch (type) {
    case "success":
      icon.className = "fas fa-check-circle";
      notification.style.background = "linear-gradient(135deg, #10b981, #059669)";
      break;
    case "error":
      icon.className = "fas fa-exclamation-circle";
      notification.style.background = "linear-gradient(135deg, #ef4444, #dc2626)";
      break;
    case "warning":
      icon.className = "fas fa-exclamation-triangle";
      notification.style.background = "linear-gradient(135deg, #f59e0b, #d97706)";
      break;
    default:
      icon.className = "fas fa-info-circle";
      notification.style.background = "linear-gradient(135deg, #3b82f6, #2563eb)";
  }

  content.appendChild(icon);
  content.appendChild(text);
  notification.appendChild(content);

  // Add close button
  const closeBtn = document.createElement("button");
  closeBtn.innerHTML = '<i class="fas fa-times"></i>';
  closeBtn.className = "notification-close";
  closeBtn.onclick = () => removeNotification(notification);
  notification.appendChild(closeBtn);

  // Add styles
  notification.style.cssText += `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(400px);
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        max-width: 400px;
        min-width: 300px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    `;

  content.style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.75rem;
    `;

  closeBtn.style.cssText = `
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        opacity: 0.7;
        transition: opacity 0.2s ease;
        font-size: 0.875rem;
    `;

  icon.style.fontSize = "1.25rem";

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Auto remove
  setTimeout(() => {
    removeNotification(notification);
  }, duration);
}

function removeNotification(notification) {
  notification.style.transform = "translateX(400px)";
  notification.style.opacity = "0";
  setTimeout(() => {
    if (notification.parentNode) {
      document.body.removeChild(notification);
    }
  }, 300);
}

// Add ripple effect to buttons
const buttons = document.querySelectorAll(".btn, .category-btn, .filter-btn");
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;

    this.style.position = "relative";
    this.style.overflow = "hidden";
    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Active navigation based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const scrollPos = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Enhanced project card interactions
const projectCardsEnhanced = document.querySelectorAll(".project-card");
projectCardsEnhanced.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.02)";
    card.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.2)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
    card.style.boxShadow = "";
  });
});

// Lazy loading for images (when you add real images)
const images = document.querySelectorAll("img[data-src]");
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove("lazy");
      imageObserver.unobserve(img);
    }
  });
});

images.forEach((img) => imageObserver.observe(img));

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
  // Your scroll handling code here
}, 16); // ~60fps

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize skill bars animation for default category
  setTimeout(() => {
    const defaultSkills = document.querySelectorAll('.skill-card[data-category="languages"]');
    defaultSkills.forEach((card, index) => {
      const progressBar = card.querySelector(".skill-progress");
      if (progressBar) {
        const level = progressBar.dataset.level;
        // Stagger the animation
        setTimeout(() => {
        progressBar.style.width = level + "%";
        }, index * 200);
      }
    });
  }, 1500);

  // Animate counters when stats section becomes visible
  function animateCounters() {
    const statsGrid = document.querySelector('.stats-grid');
    if (statsGrid) {
      const counters = statsGrid.querySelectorAll(".stat-number");
      counters.forEach((counter, index) => {
        const target = Number.parseInt(counter.getAttribute("data-target"));
        // Stagger the counter animations
        setTimeout(() => {
        animateCounter(counter, target);
        }, index * 300);
      });
    }
  }

  // Animate skill bars when skills section becomes visible
  function animateSkillBars() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (skillsGrid) {
      const activeCategory = document.querySelector(".category-btn.active")?.dataset.category || "languages";
      const visibleCards = document.querySelectorAll(`.skill-card[data-category="${activeCategory}"]`);
      visibleCards.forEach((card, index) => {
        const progressBar = card.querySelector(".skill-progress");
        if (progressBar) {
          const level = progressBar.dataset.level;
          setTimeout(() => {
            progressBar.style.width = level + "%";
          }, index * 150);
        }
      });
    }
  }

  // Check for counter and skill bar animations
  function checkSpecialAnimations() {
    animateCounters();
    animateSkillBars();
  }

  // Listen for scroll to trigger special animations
  window.addEventListener('scroll', checkSpecialAnimations);
  setTimeout(checkSpecialAnimations, 2000);

  // Add hover effects to interactive elements
  const interactiveElements = document.querySelectorAll('.btn, .social-link, .project-link, .nav-link, .category-btn, .filter-btn');
  interactiveElements.forEach(el => {
    el.classList.add('hover-scale');
  });

  // Add hover lift effects to cards
  const cardElements = document.querySelectorAll('.project-card, .skill-card, .certification-card, .stat-card, .about-card');
  cardElements.forEach(el => {
    el.classList.add('hover-lift');
  });

  console.log("🚀 Modern Portfolio loaded successfully!");
  console.log("✨ Features: Dark/Light theme, Custom cursor, Glassmorphism, Simple Animations");
  console.log("🎯 Performance optimized and fully responsive");
  console.log("🎨 Animations: Fade-in, Slide-in, Scale, Bounce with scroll detection");
});

// Service Worker registration for PWA features
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('✅ Service Worker registered successfully:', registration.scope);
        })
        .catch(error => {
          console.log('❌ Service Worker registration failed:', error);
        });
  });
}

// Simple hover effects initialization
function initHoverEffects() {
  // Add hover classes to elements
  document.querySelectorAll('.about-card, .skill-card, .project-card').forEach(card => {
    card.classList.add('hover-lift');
  });
  
  document.querySelectorAll('.social-link').forEach(link => {
    link.classList.add('hover-scale');
  });
}

// Backup animation initialization
function ensureAnimationsWork() {
  console.log('🔄 Ensuring animations work...');
  
  // Force trigger animations for visible elements
  const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-slide-left, .animate-slide-right, .animate-scale, .animate-bounce');
  
  animatedElements.forEach((el, index) => {
    // Force reflow to ensure animations trigger
    el.style.animationPlayState = 'paused';
    setTimeout(() => {
      el.style.animationPlayState = 'running';
    }, index * 50);
  });
  
  console.log(`✅ Ensured ${animatedElements.length} animations are working`);
}

// Run backup after a delay
setTimeout(ensureAnimationsWork, 3000);