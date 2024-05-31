var cta = document.querySelector(".cta");
var check = 0;

cta.addEventListener('click', function(e){
    var text = e.target.nextElementSibling;
    var loginText = e.target.parentElement;
    text.classList.toggle('show-hide');
    loginText.classList.toggle('expand');
    if(check == 0) {
        cta.innerHTML = "<i class=\"fas fa-chevron-up\"></i>";
        check++;
    } else {
        cta.innerHTML = "<i class=\"fas fa-chevron-down\"></i>";
        check = 0;
    }
});

document.querySelector('.join-btn').addEventListener('click', function() {
    document.querySelector('.signup-form').style.display = 'block';
});

document.querySelector('.signup-btn').addEventListener('click', function() {
    document.querySelector('.signup-form').style.display = 'block';
});

document.querySelector('.back-btn').addEventListener('click', function() {
    document.querySelector('.signup-form').style.display = 'none';
});

document.querySelector('.submit-btn').addEventListener('click', function(e) {
    e.preventDefault();
    var fullName = document.querySelector('.signup-form input[type=text]');
    var email = document.querySelector('.signup-form input[type=email]');
    var password = document.querySelector('.signup-form input[type=password]');
    var confirmPassword = document.querySelector('.signup-form input[type=password]:nth-child(4)');
    var errorMessage = '';

    if (fullName.value.trim() === '') {
        errorMessage += 'Full Name is required. ';
    }

    if (email.value.trim() === '') {
        errorMessage += 'Email is required. ';
    } else if (!validateEmail(email.value.trim())) {
        errorMessage += 'Invalid email format. ';
    }

    if (password.value.trim() === '') {
        errorMessage += 'Password is required. ';
    }

    if (confirmPassword.value.trim() === '') {
        errorMessage += 'Confirm Password is required. ';
    } else if (password.value.trim() !== confirmPassword.value.trim()) {
        errorMessage += 'Passwords do not match. ';
    }

    var errorContainer = document.querySelector('.error-message');
    if (!errorContainer) {
        errorContainer = document.createElement('div');
        errorContainer.className = 'error-message';
        document.querySelector('.signup-form').appendChild(errorContainer);
    }

    if (errorMessage !== '') {
        errorContainer.innerHTML = errorMessage;
    } else {
        errorContainer.innerHTML = '';
        alert('Form submitted successfully!');
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}