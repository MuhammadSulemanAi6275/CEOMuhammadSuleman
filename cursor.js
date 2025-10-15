// Simple cursor
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.getElementById('cursorDot');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mousedown', () => {
        cursor.classList.add('click');
    });
    
    document.addEventListener('mouseup', () => {
        cursor.classList.remove('click');
    });
    
    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, [onclick], .nav-link, .btn-primary, .btn-secondary, .social-links a, .timeline-image, .service-card, .stat-item');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
});