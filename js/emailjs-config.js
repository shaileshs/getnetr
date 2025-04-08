// EmailJS Configuration
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'fm2bILxeGIl3Z31tl',
    SERVICE_ID: 'gmail-ss',
    TEMPLATE_ID: 'netr_demo',
};

// Initialize EmailJS
(function() {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
})(); 