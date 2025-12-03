// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const targetPosition = target.offsetTop - 20;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation Link
const sections = document.querySelectorAll('.content-section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Image Modal Functions
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    if (!modal || !modalImg) {
        console.error('Modal elements not found');
        return;
    }
    
    modal.style.display = 'block';
    modalImg.src = imageSrc;
    modalImg.onerror = function() {
        console.error('Image failed to load:', imageSrc);
        alert('Görsel yüklenemedi. Lütfen görsel dosyasının images klasöründe olduğundan emin olun.');
    };
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Prevent modal from closing when clicking on the image
document.addEventListener('DOMContentLoaded', function() {
    const modalImage = document.getElementById('modalImage');
    if (modalImage) {
        modalImage.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // Add click handlers to project images
    const projectImageContainers = document.querySelectorAll('.project-image');
    projectImageContainers.forEach(container => {
        container.addEventListener('click', function(e) {
            const imageSrc = this.getAttribute('data-image');
            if (imageSrc) {
                openModal(imageSrc);
            }
        });
    });
    
    // Add error handling for images
    const projectImages = document.querySelectorAll('.project-image img');
    projectImages.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            const parent = this.parentElement;
            if (parent) {
                parent.style.display = 'none';
            }
        });
    });
});

