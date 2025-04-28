document.addEventListener('DOMContentLoaded', () => {
    // Basic JavaScript for active navigation link (remains the same)
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(otherLink => otherLink.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Handle form submission message
    const registrationForm = document.querySelector('form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Display the confirmation message
            alert('Thank you for your submission! We will get back to you within 24 hours.');

            // You might want to clear the form fields here as well:
            this.reset();
        });
    }

    const commentButton = document.querySelector('#comment-box button');
    const commentTextarea = document.querySelector('#myComment');
    if (commentButton && commentTextarea) {
        commentButton.addEventListener('click', () => {
            const comment = commentTextarea.value;
            if (comment.trim() !== '') {
                alert(`Your comment: "${comment}" will be sent to the server.`);
                commentTextarea.value = ''; // Clear the textarea after "submission"
            } else {
                alert('Please enter a comment before submitting.');
            }
        });
    }
});