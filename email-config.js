// EmailJS Configuration
(function() {
    // EmailJS initialize karna
    emailjs.init("YOUR_PUBLIC_KEY"); // Yahan aap ka EmailJS public key dalna hai
})();

// Email template configuration
const EMAIL_CONFIG = {
    serviceId: 'YOUR_SERVICE_ID',    // Gmail service ID
    templateId: 'YOUR_TEMPLATE_ID',  // Email template ID
    publicKey: 'YOUR_PUBLIC_KEY'     // Public key
};

// Contact form handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Form data collect karna
            const formData = new FormData(this);
            const templateParams = {
                from_name: formData.get('name'),
                from_email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message'),
                to_email: 'muneeb762500@gmail.com' // Aap ka Gmail address
            };
            
            // Submit button disable karna
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            try {
                // EmailJS se email send karna
                const response = await emailjs.send(
                    EMAIL_CONFIG.serviceId,
                    EMAIL_CONFIG.templateId,
                    templateParams,
                    EMAIL_CONFIG.publicKey
                );
                
                console.log('Email sent successfully:', response);
                
                // Success message
                showNotification('Message sent successfully! Main jaldi reply karunga.', 'success');
                this.reset();
                
            } catch (error) {
                console.error('Email send error:', error);
                showNotification('Sorry, message send nahi hua. Please try again.', 'error');
            } finally {
                // Button restore karna
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
});

// Notification function
function showNotification(message, type) {
    // Notification element create karna
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Styles add karna
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        max-width: 300px;
        ${type === 'success' ? 'background: #4CAF50;' : 'background: #f44336;'}
    `;
    
    // Animation CSS add karna
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // 5 seconds baad remove karna
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}