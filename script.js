// Placeholder for JavaScript functionality 

document.addEventListener('DOMContentLoaded', () => {
    const paymentContainer = document.querySelector('.payment-container'); // Uses class selector
    const googlePayButton = document.getElementById('google-pay-button');
    const phonePeButton = document.getElementById('phonepe-button');
    const googlePayFakePage = document.getElementById('google-pay-fake-page'); // These IDs were added
    const phonePeFakePage = document.getElementById('phonepe-fake-page');
    const backButtons = document.querySelectorAll('.back-button'); // Class selector for back buttons

    // Function to show a specific page and hide others using display style
    const showPage = (pageToShow) => {
        // Hide all potentially visible containers
        if (paymentContainer) paymentContainer.style.display = 'none';
        if (googlePayFakePage) googlePayFakePage.style.display = 'none';
        if (phonePeFakePage) phonePeFakePage.style.display = 'none';

        // Show the target page
        if (pageToShow) {
            pageToShow.style.display = 'block'; // Use block display
        }
    };

    // Event listener for Google Pay button
    if (googlePayButton) {
        googlePayButton.addEventListener('click', (e) => {
            e.preventDefault();
            showPage(googlePayFakePage);
        });
    }

    // Event listener for PhonePe button
    if (phonePeButton) {
        phonePeButton.addEventListener('click', (e) => {
            e.preventDefault();
            showPage(phonePeFakePage);
        });
    }

    // Event listeners for all 'Back' buttons
    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            showPage(paymentContainer); // Show the main payment options
        });
    });

    // Initially ensure only the main container is visible
    if (paymentContainer) paymentContainer.style.display = 'block'; // Ensure initial display
    if (googlePayFakePage) googlePayFakePage.style.display = 'none';
    if (phonePeFakePage) phonePeFakePage.style.display = 'none';
}); 