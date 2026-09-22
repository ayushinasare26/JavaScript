// Get form element
const form = document.getElementById('jobApplicationForm');
const successMessage = document.getElementById('successMessage');

// Validation rules
const validationRules = {
    fullName: {
        required: true,
        minLength: 2,
        pattern: /^[a-zA-Z\s]+$/,
        message: 'Please enter a valid full name (letters and spaces only, minimum 2 characters)'
    },
    dob: {
        required: true,
        validate: (value) => {
            const birthDate = new Date(value);
            const today = new Date();
            const age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            
            return age >= 18 && age <= 100;
        },
        message: 'You must be at least 18 years old and the date must be valid'
    },
    gender: {
        required: true,
        message: 'Please select your gender'
    },
    email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Please enter a valid email address'
    },
    mobile: {
        required: true,
        pattern: /^[+]?[\d\s\-()]{10,15}$/,
        message: 'Please enter a valid mobile number (10-15 digits)'
    },
    address: {
        required: true,
        minLength: 10,
        message: 'Please enter a complete address (minimum 10 characters)'
    },
    city: {
        required: true,
        minLength: 2,
        pattern: /^[a-zA-Z\s]+$/,
        message: 'Please enter a valid city name'
    },
    state: {
        required: true,
        minLength: 2,
        pattern: /^[a-zA-Z\s]+$/,
        message: 'Please enter a valid state name'
    },
    pinCode: {
        required: true,
        pattern: /^\d{5,6}$/,
        message: 'Please enter a valid PIN code (5-6 digits)'
    },
    highestQualification: {
        required: true,
        message: 'Please select your highest qualification'
    },
    university: {
        required: true,
        minLength: 2,
        message: 'Please enter your university/institute name'
    },
    passingYear: {
        required: true,
        validate: (value) => {
            const year = parseInt(value);
            return year >= 1950 && year <= 2026;
        },
        message: 'Please enter a valid passing year (1950-2026)'
    },
    percentage: {
        required: true,
        pattern: /^(\d{1,2}(\.\d{1,2})?%?|10(\.0{1,2})?%?|[0-9](\.\d{1,2})?\s?(CGPA|cgpa)?)$/,
        message: 'Please enter valid percentage (0-100%) or CGPA (0-10)'
    },
    jobPosition: {
        required: true,
        minLength: 2,
        message: 'Please enter the job position you are applying for'
    },
    workExperience: {
        required: true,
        validate: (value) => {
            const exp = parseFloat(value);
            return exp >= 0 && exp <= 50;
        },
        message: 'Please enter valid work experience (0-50 years)'
    },
    expectedSalary: {
        required: true,
        minLength: 1,
        message: 'Please enter your expected salary'
    },
    programmingLanguages: {
        required: true,
        minLength: 2,
        message: 'Please enter at least one programming language'
    },
    technicalSkills: {
        required: true,
        minLength: 10,
        message: 'Please describe your technical skills (minimum 10 characters)'
    }
};

// Validate individual field
function validateField(fieldName, value) {
    const rules = validationRules[fieldName];
    
    if (!rules) return { valid: true };
    
    // Check if required
    if (rules.required && (!value || value.trim() === '')) {
        return { 
            valid: false, 
            message: rules.message || 'This field is required' 
        };
    }
    
    // Check minimum length
    if (rules.minLength && value.length < rules.minLength) {
        return { 
            valid: false, 
            message: rules.message 
        };
    }
    
    // Check pattern
    if (rules.pattern && !rules.pattern.test(value)) {
        return { 
            valid: false, 
            message: rules.message 
        };
    }
    
    // Custom validation function
    if (rules.validate && !rules.validate(value)) {
        return { 
            valid: false, 
            message: rules.message 
        };
    }
    
    return { valid: true };
}

// Display validation result
function displayValidation(input, validationResult) {
    const formGroup = input.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');
    
    // Remove previous classes
    input.classList.remove('error', 'success', 'shake');
    
    if (!validationResult.valid) {
        input.classList.add('error', 'shake');
        errorMessage.textContent = validationResult.message;
        
        // Remove shake animation after it completes
        setTimeout(() => {
            input.classList.remove('shake');
        }, 500);
    } else if (input.value.trim() !== '') {
        input.classList.add('success');
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = '';
    }
}

// Add real-time validation to all form inputs
function addRealtimeValidation() {
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        // Validate on blur (when user leaves the field)
        input.addEventListener('blur', () => {
            const validationResult = validateField(input.name, input.value);
            displayValidation(input, validationResult);
        });
        
        // Also validate on input for immediate feedback (with slight delay)
        let timeout;
        input.addEventListener('input', () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                // Only show validation if the field has been touched
                if (input.value.trim() !== '' || input.classList.contains('error')) {
                    const validationResult = validateField(input.name, input.value);
                    displayValidation(input, validationResult);
                }
            }, 500); // 500ms delay for better UX
        });
    });
}

// Validate entire form
function validateForm() {
    let isValid = true;
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        if (validationRules[input.name]) {
            const validationResult = validateField(input.name, input.value);
            displayValidation(input, validationResult);
            
            if (!validationResult.valid) {
                isValid = false;
                
                // Scroll to first error if this is the first invalid field
                if (isValid === false && !document.querySelector('.error.shake')) {
                    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        }
    });
    
    return isValid;
}

// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validate all fields
    if (validateForm()) {
        // Collect form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Log the data (in a real application, this would be sent to a server)
        console.log('Form submitted successfully!');
        console.log('Application Data:', data);
        
        // Show success message
        form.style.display = 'none';
        successMessage.classList.remove('hidden');
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Optional: Reset form after 5 seconds and show it again
        setTimeout(() => {
            form.reset();
            form.style.display = 'block';
            successMessage.classList.add('hidden');
            
            // Remove all validation classes
            const inputs = form.querySelectorAll('input, select, textarea');
            inputs.forEach(input => {
                input.classList.remove('error', 'success');
            });
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 5000);
    } else {
        console.log('Form validation failed. Please correct the errors.');
    }
});

// Handle form reset
form.addEventListener('reset', () => {
    // Clear all validation states
    setTimeout(() => {
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.classList.remove('error', 'success');
            const formGroup = input.closest('.form-group');
            const errorMessage = formGroup.querySelector('.error-message');
            errorMessage.textContent = '';
        });
    }, 0);
});

// Initialize real-time validation
addRealtimeValidation();

// Optional: Add Enter key handler for better UX
form.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        
        // Find next input field
        const inputs = Array.from(form.querySelectorAll('input, select, textarea'));
        const currentIndex = inputs.indexOf(e.target);
        const nextInput = inputs[currentIndex + 1];
        
        if (nextInput) {
            nextInput.focus();
        }
    }
});

console.log('Job Application Form initialized with real-time validation!');
