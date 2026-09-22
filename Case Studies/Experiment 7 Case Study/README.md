# Event Handling in JavaScript - Case Study

## Project Overview
This case study demonstrates comprehensive event handling in JavaScript with form elements, validation, and various form events.

## Features Implemented

### 1. Access and Manipulate Form Elements
- **Text Inputs**: Name, Email, Phone, Age
- **Dropdown**: Country selection
- **Radio Buttons**: Gender selection
- **Checkboxes**: Interests and Terms acceptance
- **Textarea**: Message field with character counter

### 2. User Input Validation
All validations are performed using JavaScript:

- **Name Validation**: Must be at least 3 characters long
- **Email Validation**: Must follow proper email format (regex pattern)
- **Phone Validation**: Must follow format XXX-XXX-XXXX
- **Age Validation**: Must be between 18 and 100
- **Required Fields**: All required fields marked with *
- **Real-time Feedback**: Visual indicators (green for valid, red for invalid)

### 3. Form Events Used

#### **Focus Event**
- Triggers when user clicks into an input field
- Changes background color to light blue
- Logs the focus event in the Event Log

#### **Blur Event**
- Triggers when user leaves an input field
- Resets background color
- Performs validation on the field
- Shows error or success messages

#### **Input Event**
- Triggers on every keystroke in text fields
- Updates character count for message textarea
- Logs current value in Event Log

#### **Change Event**
- Triggers for dropdowns, radio buttons, and checkboxes
- Logs selection changes
- Updates validation state

#### **Submit Event**
- Prevents default form submission
- Validates all fields
- Shows error messages for invalid fields
- Displays submitted data if all validations pass
- Logs success or failure

#### **Reset Event**
- Clears all form fields
- Removes validation messages
- Resets visual indicators
- Logs reset action

## Project Structure
```
├── index.html      # HTML structure with form elements
├── styles.css      # Styling with modern gradient design
├── script.js       # JavaScript for event handling and validation
└── README.md       # Project documentation
```

## How to Use

1. **Open the Application**
   - Open `index.html` in a web browser

2. **Interact with Form Fields**
   - Click on any input field (triggers **focus** event)
   - Type in the field (triggers **input** event)
   - Leave the field (triggers **blur** event with validation)
   - Select options (triggers **change** event)

3. **Watch the Event Log**
   - Bottom section shows all events in real-time
   - Timestamps included for each event
   - Clear log button to reset the log

4. **Submit the Form**
   - Fill in all required fields (marked with *)
   - Click "Submit Form" button
   - Watch validation messages appear
   - Successfully submitted data displays below the log

5. **Reset the Form**
   - Click "Reset Form" button to clear all fields

## Validation Rules

| Field    | Rule                                      |
|----------|-------------------------------------------|
| Name     | Minimum 3 characters, required            |
| Email    | Valid email format, required              |
| Phone    | Format: XXX-XXX-XXXX, required           |
| Age      | Between 18-100, required                  |
| Gender   | One option must be selected, required     |
| Country  | Must select a country, required           |
| Terms    | Must be checked, required                 |
| Interests| Optional                                  |
| Message  | Optional, with character counter          |

## Technologies Used
- HTML5
- CSS3 (with flexbox and gradients)
- Vanilla JavaScript (ES6+)
- DOM Manipulation
- Event Listeners
- Regular Expressions for validation

## Key JavaScript Concepts Demonstrated

1. **Event Listeners**: `addEventListener()` for various events
2. **Event Object**: Using `e` parameter to access event details
3. **Form Manipulation**: Accessing form values via DOM
4. **Validation Functions**: Custom validation logic
5. **Dynamic DOM Updates**: Creating and inserting log entries
6. **Array Methods**: `forEach()`, `map()`, `Array.from()`
7. **Query Selectors**: `getElementById()`, `querySelector()`, `querySelectorAll()`
8. **Conditional Logic**: Input validation and error handling
9. **Template Literals**: For dynamic HTML generation
10. **Preventing Default Behavior**: `e.preventDefault()` on form submit

## Learning Outcomes

By completing this case study, you will understand:
- How to attach and handle different types of events
- Form validation techniques using JavaScript
- Real-time user feedback implementation
- DOM manipulation and element access
- Event propagation and handling
- Best practices for form handling

## Browser Compatibility
Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Author
Created as a case study to demonstrate Event Handling in JavaScript

## License
Free to use for educational purposes
