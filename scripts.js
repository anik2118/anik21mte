document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = contactForm.elements['name'].value;
        const email = contactForm.elements['email'].value;
        const message = contactForm.elements['message'].value;
        
        // Here you would typically send this data to a server
        // For now, we'll just log it to the console
        console.log('Form submitted:', { name, email, message });
        
        // Clear the form
        contactForm.reset();
        
        alert('Thank you for your message! We\'ll get back to you soon.');
    });
});