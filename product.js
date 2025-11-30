function toggleDetails(detailsId) {
    // ... (Your toggleDetails function code remains unchanged)
    const activeDetails = document.querySelector('.product-details.active');

    if (activeDetails) {
        activeDetails.classList.remove('active');
    }
    const detailsToShow = document.getElementById(detailsId);
    
    if (activeDetails !== detailsToShow) {
        detailsToShow.classList.add('active');
        detailsToShow.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}


document.addEventListener('DOMContentLoaded', function() {
    // Check for the form element (it will be null on non-contact pages)
    const form = document.getElementById('contact-submission-form');
     
    // --- CRUCIAL FIX: Only run the submission logic if the form exists ---
    if (form) { 
        form.addEventListener('submit', function(e) {
            
            // Validation check (uses HTML5 'required' attributes)
            if (!form.checkValidity()) {
                e.target.reportValidity(); 
                return; 
            }
            
            // If valid, prevent reload and show success
            e.preventDefault(); 
            alert('Thank you for your inquiry! Your request has been successfully submitted. We will contact you soon.');
            form.reset(); 
        });
    }
    // --- End of Fix ---
});