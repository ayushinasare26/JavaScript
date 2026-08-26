const emailInput = document.getElementById('emailInput');
const emailBadge = document.getElementById('emailBadge');
const textInput = document.getElementById('textInput');
const clearBtn = document.getElementById('clearBtn');
const wordCountDisplay = document.getElementById('wordCount');
const charCountDisplay = document.getElementById('charCount');
const keywordCheckDisplay = document.getElementById('keywordCheck');
const emailsListDisplay = document.getElementById('extractedEmailsList');
const phonesListDisplay = document.getElementById('extractedPhonesList');
const maskedOutputDisplay = document.getElementById('maskedOutput');

// Modular Formula Declarations 
const emailValidationRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const emailExtractionRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
const phoneExtractionRegex = /\+1-\d{3}-\d{4}/g;

// Real-Time Destination Target Checking Engine
emailInput.addEventListener('input', () => {
  const value = emailInput.value.trim();
  
  if (value === "") {
    emailBadge.textContent = "Waiting...";
    emailBadge.className = "validation-badge";
    return;
  }
  
  if (emailValidationRegex.test(value)) {
    emailBadge.textContent = "Valid Structure";
    emailBadge.className = "validation-badge state-valid";
  } else {
    emailBadge.textContent = "Malformed Entry";
    emailBadge.className = "validation-badge state-invalid";
  }
});

// Central Multi-threaded Text Processing Blueprint
function processTextData() {
  const rawText = textInput.value;
  const cleanText = rawText.trim();

  // Computational Calculations Section
  const totalChars = cleanText.length;
  const totalWords = cleanText === "" ? 0 : cleanText.split(/\s+/).length;
  const hasKeyword = cleanText.toLowerCase().includes("success") ? "Detected ✅" : "Absent ❌";

  // Dispatch metrics data variables back onto view canvas
  wordCountDisplay.textContent = totalWords;
  charCountDisplay.textContent = totalChars;
  keywordCheckDisplay.textContent = hasKeyword;

  // Apply Global Array Pattern Match Execution Cycles
  const foundEmails = rawText.match(emailExtractionRegex) || [];
  const foundPhones = rawText.match(phoneExtractionRegex) || [];

  // Parse list nodes into template nodes for emails
  emailsListDisplay.innerHTML = foundEmails.length > 0 
    ? foundEmails.map(email => `<span class="pill-item">${email}</span>`).join('')
    : `<span class="shelf-empty">No address matches located</span>`;

  // Parse list nodes into template nodes for phone values
  phonesListDisplay.innerHTML = foundPhones.length > 0 
    ? foundPhones.map(phone => `<span class="pill-item">${phone}</span>`).join('')
    : `<span class="shelf-empty">No structural phone matches located</span>`;

  // Process data manipulation replacement mask rules
  const secureText = rawText.replace(emailExtractionRegex, " [REDACTED_EMAIL_HASH] ");
  maskedOutputDisplay.textContent = secureText || "(System pipeline empty: Provide data entry nodes...)";
}

// Clear Button Event Listener
clearBtn.addEventListener('click', () => {
  textInput.value = "";
  processTextData(); // Re-trigger live dashboard update loop
  textInput.focus();
});

// Event Binding Declarations
textInput.addEventListener('input', processTextData);

// Execute computational pass once at runtime initialization step
processTextData();