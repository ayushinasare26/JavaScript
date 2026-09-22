// Get form elements
const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const ageInput = document.getElementById('age');
const countrySelect = document.getElementById('country');
const messageTextarea = document.getElementById('message');
const termsCheckbox = document.getElementById('terms');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const clearLogBtn = document.getElementById('clearLog');
const logContainer = document.getElementById('logContainer');
const charCount = document.getElementById('charCount');
const submittedDataDiv = document.getElementById('submittedData');
const dataDisplay = document.getElementById('dataDisplay');

// Event Log Function
function logEvent(eventType, elementName, details = '') {
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = document.createElement('div');
    logEntry.className = 'log-entry';
    logEntry.innerHTML = `
        <span class="event-type">[${eventType}]</span> 
        <strong>${elementName}</strong> 
        ${details}
        <span class="timestamp"> - ${timestamp}</span>
    `;
    logContainer.insertBefore(logEntry, logContainer.firstChild);
}

// Validation Functions
function validateName(name) {
    return name.trim().length >= 3;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    return phoneRegex.test(phone);
}

function validateAge(age) {
    return age >= 18 && age <= 100;
}

function showError(inputElement, errorElement, message) {
    errorElement.textContent = message;
    inputElement.classList.add('invalid');
    inputElement.classList.remove('valid');
}

function showSuccess(inputElement, successElement, message = '✓ Valid') {
    if (successElement) {
        successElement.textContent = message;
    }
    inputElement.classList.add('valid');
    inputElement.classList.remove('invalid');
}

function clearValidation(inputElement, errorElement, successElement) {
    if (errorElement) errorElement.textContent = '';
    if (successElement) successElement.textContent = '';
    inputElement.classList.remove('valid', 'invalid');
}

// === EVENT LISTENERS - FOCUS EVENT ===
nameInput.addEventListener('focus', function(e) {
    logEvent('FOCUS', 'Name Input', 'User focused on name field');
    this.style.backgroundColor = '#f8fcff';
});

emailInput.addEventListener('focus', function(e) {
    logEvent('FOCUS', 'Email Input', 'User focused on email field');
    this.style.backgroundColor = '#f8fcff';
});

phoneInput.addEventListener('focus', function(e) {
    logEvent('FOCUS', 'Phone Input', 'User focused on phone field');
    this.style.backgroundColor = '#f8fcff';
});

ageInput.addEventListener('focus', function(e) {
    logEvent('FOCUS', 'Age Input', 'User focused on age field');
    this.style.backgroundColor = '#f8fcff';
});

countrySelect.addEventListener('focus', function(e) {
    logEvent('FOCUS', 'Country Select', 'User focused on country dropdown');
    this.style.backgroundColor = '#f8fcff';
});

messageTextarea.addEventListener('focus', function(e) {
    logEvent('FOCUS', 'Message Textarea', 'User focused on message field');
    this.style.backgroundColor = '#f8fcff';
});

// === EVENT LISTENERS - BLUR EVENT ===
nameInput.addEventListener('blur', function(e) {
    logEvent('BLUR', 'Name Input', 'User left name field');
    this.style.backgroundColor = '';
    
    const nameError = document.getElementById('nameError');
    const nameSuccess = document.getElementById('nameSuccess');
    
    if (this.value.trim() === '') {
        clearValidation(this, nameError, nameSuccess);
    } else if (!validateName(this.value)) {
        showError(this, nameError, 'Name must be at least 3 characters long');
    } else {
        nameError.textContent = '';
        showSuccess(this, nameSuccess);
    }
});

emailInput.addEventListener('blur', function(e) {
    logEvent('BLUR', 'Email Input', 'User left email field');
    this.style.backgroundColor = '';
    
    const emailError = document.getElementById('emailError');
    const emailSuccess = document.getElementById('emailSuccess');
    
    if (this.value.trim() === '') {
        clearValidation(this, emailError, emailSuccess);
    } else if (!validateEmail(this.value)) {
        showError(this, emailError, 'Please enter a valid email address');
    } else {
        emailError.textContent = '';
        showSuccess(this, emailSuccess);
    }
});

phoneInput.addEventListener('blur', function(e) {
    logEvent('BLUR', 'Phone Input', 'User left phone field');
    this.style.backgroundColor = '';
    
    const phoneError = document.getElementById('phoneError');
    const phoneSuccess = document.getElementById('phoneSuccess');
    
    if (this.value.trim() === '') {
        clearValidation(this, phoneError, phoneSuccess);
    } else if (!validatePhone(this.value)) {
        showError(this, phoneError, 'Phone must be in format: 123-456-7890');
    } else {
        phoneError.textContent = '';
        showSuccess(this, phoneSuccess);
    }
});

ageInput.addEventListener('blur', function(e) {
    logEvent('BLUR', 'Age Input', 'User left age field');
    this.style.backgroundColor = '';
    
    const ageError = document.getElementById('ageError');
    const ageSuccess = document.getElementById('ageSuccess');
    
    if (this.value === '') {
        clearValidation(this, ageError, ageSuccess);
    } else if (!validateAge(this.value)) {
        showError(this, ageError, 'Age must be between 18 and 100');
    } else {
        ageError.textContent = '';
        showSuccess(this, ageSuccess);
    }
});

countrySelect.addEventListener('blur', function(e) {
    logEvent('BLUR', 'Country Select', 'User left country dropdown');
    this.style.backgroundColor = '';
    
    const countryError = document.getElementById('countryError');
    const countrySuccess = document.getElementById('countrySuccess');
    
    if (this.value === '') {
        clearValidation(this, countryError, countrySuccess);
    } else {
        countryError.textContent = '';
        showSuccess(this, countrySuccess);
    }
});

messageTextarea.addEventListener('blur', function(e) {
    logEvent('BLUR', 'Message Textarea', 'User left message field');
    this.style.backgroundColor = '';
});

// === EVENT LISTENERS - INPUT/CHANGE EVENT ===
nameInput.addEventListener('input', function(e) {
    logEvent('INPUT', 'Name Input', `Current value: "${this.value}"`);
});

emailInput.addEventListener('input', function(e) {
    logEvent('INPUT', 'Email Input', `Current value: "${this.value}"`);
});

phoneInput.addEventListener('input', function(e) {
    logEvent('INPUT', 'Phone Input', `Current value: "${this.value}"`);
});

ageInput.addEventListener('input', function(e) {
    logEvent('INPUT', 'Age Input', `Current value: ${this.value}`);
});

// Character counter for message textarea
messageTextarea.addEventListener('input', function(e) {
    const length = this.value.length;
    charCount.textContent = `${length} character${length !== 1 ? 's' : ''}`;
    logEvent('INPUT', 'Message Textarea', `Character count: ${length}`);
});

// Country dropdown change event
countrySelect.addEventListener('change', function(e) {
    const selectedText = this.options[this.selectedIndex].text;
    logEvent('CHANGE', 'Country Select', `Selected: ${selectedText}`);
});

// Gender radio buttons change event
const genderRadios = document.querySelectorAll('input[name="gender"]');
genderRadios.forEach(radio => {
    radio.addEventListener('change', function(e) {
        if (this.checked) {
            logEvent('CHANGE', 'Gender Radio', `Selected: ${this.value}`);
            document.getElementById('genderError').textContent = '';
        }
    });
});

// Interests checkboxes change event
const interestCheckboxes = document.querySelectorAll('input[name="interests"]');
interestCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function(e) {
        const status = this.checked ? 'Checked' : 'Unchecked';
        logEvent('CHANGE', 'Interests Checkbox', `${this.value} - ${status}`);
    });
});

// Terms checkbox change event
termsCheckbox.addEventListener('change', function(e) {
    const status = this.checked ? 'Accepted' : 'Declined';
    logEvent('CHANGE', 'Terms Checkbox', status);
    document.getElementById('termsError').textContent = '';
});

// === EVENT LISTENERS - SUBMIT EVENT ===
form.addEventListener('submit', function(e) {
    e.preventDefault();
    logEvent('SUBMIT', 'Form', 'Form submission triggered');
    
    let isValid = true;
    
    // Validate Name
    const nameError = document.getElementById('nameError');
    const nameSuccess = document.getElementById('nameSuccess');
    if (nameInput.value.trim() === '') {
        showError(nameInput, nameError, 'Name is required');
        isValid = false;
    } else if (!validateName(nameInput.value)) {
        showError(nameInput, nameError, 'Name must be at least 3 characters long');
        isValid = false;
    } else {
        nameError.textContent = '';
        showSuccess(nameInput, nameSuccess);
    }
    
    // Validate Email
    const emailError = document.getElementById('emailError');
    const emailSuccess = document.getElementById('emailSuccess');
    if (emailInput.value.trim() === '') {
        showError(emailInput, emailError, 'Email is required');
        isValid = false;
    } else if (!validateEmail(emailInput.value)) {
        showError(emailInput, emailError, 'Please enter a valid email address');
        isValid = false;
    } else {
        emailError.textContent = '';
        showSuccess(emailInput, emailSuccess);
    }
    
    // Validate Phone
    const phoneError = document.getElementById('phoneError');
    const phoneSuccess = document.getElementById('phoneSuccess');
    if (phoneInput.value.trim() === '') {
        showError(phoneInput, phoneError, 'Phone number is required');
        isValid = false;
    } else if (!validatePhone(phoneInput.value)) {
        showError(phoneInput, phoneError, 'Phone must be in format: 123-456-7890');
        isValid = false;
    } else {
        phoneError.textContent = '';
        showSuccess(phoneInput, phoneSuccess);
    }
    
    // Validate Age
    const ageError = document.getElementById('ageError');
    const ageSuccess = document.getElementById('ageSuccess');
    if (ageInput.value === '') {
        showError(ageInput, ageError, 'Age is required');
        isValid = false;
    } else if (!validateAge(ageInput.value)) {
        showError(ageInput, ageError, 'Age must be between 18 and 100');
        isValid = false;
    } else {
        ageError.textContent = '';
        showSuccess(ageInput, ageSuccess);
    }
    
    // Validate Gender
    const genderError = document.getElementById('genderError');
    const selectedGender = document.querySelector('input[name="gender"]:checked');
    if (!selectedGender) {
        genderError.textContent = 'Please select a gender';
        isValid = false;
    } else {
        genderError.textContent = '';
    }
    
    // Validate Country
    const countryError = document.getElementById('countryError');
    const countrySuccess = document.getElementById('countrySuccess');
    if (countrySelect.value === '') {
        showError(countrySelect, countryError, 'Please select a country');
        isValid = false;
    } else {
        countryError.textContent = '';
        showSuccess(countrySelect, countrySuccess);
    }
    
    // Validate Terms
    const termsError = document.getElementById('termsError');
    if (!termsCheckbox.checked) {
        termsError.textContent = 'You must accept the terms and conditions';
        isValid = false;
    } else {
        termsError.textContent = '';
    }
    
    // If all validations pass
    if (isValid) {
        logEvent('VALIDATION', 'Form', '✓ All fields validated successfully!');
        
        // Collect form data
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            age: ageInput.value,
            gender: selectedGender.value,
            country: countrySelect.options[countrySelect.selectedIndex].text,
            interests: Array.from(document.querySelectorAll('input[name="interests"]:checked'))
                .map(cb => cb.value),
            message: messageTextarea.value,
            termsAccepted: termsCheckbox.checked
        };
        
        // Display submitted data
        displaySubmittedData(formData);
        
        logEvent('SUCCESS', 'Form', 'Form submitted successfully! 🎉');
        
        // Show success message
        alert('Form submitted successfully! Check the submitted data below.');
    } else {
        logEvent('VALIDATION', 'Form', '✗ Form validation failed');
    }
});

// === EVENT LISTENERS - RESET EVENT ===
resetBtn.addEventListener('click', function(e) {
    logEvent('RESET', 'Form', 'Form reset button clicked');
    
    // Clear all error and success messages
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.querySelectorAll('.success-message').forEach(el => el.textContent = '');
    
    // Remove validation classes
    document.querySelectorAll('input, select, textarea').forEach(el => {
        el.classList.remove('valid', 'invalid');
    });
    
    // Reset character count
    charCount.textContent = '0 characters';
    
    // Hide submitted data
    submittedDataDiv.style.display = 'none';
    
    setTimeout(() => {
        logEvent('RESET', 'Form', 'Form has been reset to initial state');
    }, 100);
});

// Clear Log Button
clearLogBtn.addEventListener('click', function(e) {
    logContainer.innerHTML = '<p style="color: #95a5a6; font-style: italic;">Event log cleared. Start interacting with the form to see events.</p>';
    logEvent('CLEAR', 'Event Log', 'Log cleared by user');
});

// Display Submitted Data Function
function displaySubmittedData(data) {
    dataDisplay.innerHTML = `
        <div class="data-item"><strong>Name:</strong> ${data.name}</div>
        <div class="data-item"><strong>Email:</strong> ${data.email}</div>
        <div class="data-item"><strong>Phone:</strong> ${data.phone}</div>
        <div class="data-item"><strong>Age:</strong> ${data.age}</div>
        <div class="data-item"><strong>Gender:</strong> ${data.gender}</div>
        <div class="data-item"><strong>Country:</strong> ${data.country}</div>
        <div class="data-item"><strong>Interests:</strong> ${data.interests.length > 0 ? data.interests.join(', ') : 'None selected'}</div>
        <div class="data-item"><strong>Message:</strong> ${data.message || 'No message provided'}</div>
        <div class="data-item"><strong>Terms Accepted:</strong> ${data.termsAccepted ? 'Yes' : 'No'}</div>
    `;
    submittedDataDiv.style.display = 'block';
    submittedDataDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Initial log message
logEvent('INIT', 'Page', 'Form loaded and ready for interaction');

// Prevent default form submission on Enter key in text inputs
document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="number"]').forEach(input => {
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            logEvent('KEYPRESS', this.name || this.id, 'Enter key pressed (prevented default)');
        }
    });
});
