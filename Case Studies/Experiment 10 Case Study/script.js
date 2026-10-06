// System Registry Memory Stack Array
let registrationRegistry = [];
// Core Content Rendering Engine
function renderRegistryTable() {
const tbody = document.getElementById('registryTableBody');
const table = document.getElementById('registryTable');
const emptyState = document.getElementById('tableEmptyState');
const searchQuery = document.getElementById('searchBox').value.toLowerCase().trim();
// Filter dataset items matching current search parameters
const filteredRecords = registrationRegistry.filter(record => {
return record.name.toLowerCase().includes(searchQuery) ||
record.prn.toLowerCase().includes(searchQuery) ||
record.dept.toLowerCase().includes(searchQuery) ||
record.event.toLowerCase().includes(searchQuery);
});
// Clear layout rows
tbody.innerHTML = '';
if (filteredRecords.length === 0) {
table.style.display = 'table'; // Keep headers visible
emptyState.style.display = 'block';
return;
}
emptyState.style.display = 'none';
table.style.display = 'table';
filteredRecords.forEach(record => {
const tr = document.createElement('tr');
tr.innerHTML = `
${escapeHtml(record.name)}
${escapeHtml(record.prn)}
\({escapeHtml(record.dept)}<br><small style="color: var(--text-muted); font-weight:500;">\){record.year}
${escapeHtml(record.event)}
`;
tbody.appendChild(tr);
});
}
// Append Entry Logic Module
function addRegistration() {
const name = document.getElementById('reg-name').value.trim();
const prn = document.getElementById('reg-prn').value.trim();
const dept = document.getElementById('reg-dept').value;
const year = document.getElementById('reg-year').value;
const event = document.getElementById('reg-event').value;
const status = document.getElementById('reg-status').value;
if (!name || !prn) {
alert("Action Aborted: Please fill in both the Student Name and PRN identifiers.");
return;
}
const newRecord = {
id: 'rec_' + Date.now() + Math.random().toString(36).substr(2, 4),
name: name,
prn: prn,
dept: dept,
year: year,
event: event,
status: status
};
registrationRegistry.unshift(newRecord);
// Clean Input fields
document.getElementById('reg-name').value = '';
document.getElementById('reg-prn').value = '';
renderRegistryTable();
}
// Update Registration Status via Dropdown Select Node
function updateRecordStatus(id, newStatus) {
const targetRecord = registrationRegistry.find(r => r.id === id);
if (targetRecord) {
targetRecord.status = newStatus;
renderRegistryTable();
}
}
// Remove Profile Item Module
function deleteRecord(id) {
registrationRegistry = registrationRegistry.filter(r => r.id !== id);
renderRegistryTable();
}
// "Load Student Data" Module
function loadMockData() {
const mockDataset = [
{ id: 'm-1', name: 'Rahul Sharma', prn: '2026PRN9921', dept: 'Computer Science', year: '3rd Year', event: 'National Hackathon 2026', status: 'registered' },
{ id: 'm-2', name: 'Priya Patel', prn: '2026PRN4412', dept: 'Information Technology', year: '2nd Year', event: 'UI/UX Design Masterclass', status: 'yet' },
{ id: 'm-3', name: 'Amit Verma', prn: '2026PRN1290', dept: 'Electronics', year: '4th Year', event: 'AI Symposium 2026', status: 'not' },
{ id: 'm-4', name: 'Sneha Kulkarni', prn: '2026PRN7761', dept: 'Computer Science', year: '3rd Year', event: 'Cybersecurity Boot Camp', status: 'registered' },
{ id: 'm-5', name: 'Vikram Singh', prn: '2026PRN3350', dept: 'Mechanical', year: '1st Year', event: 'National Hackathon 2026', status: 'yet' }
];
// Add to array only if not already loaded to prevent endless duplication
if(registrationRegistry.length === 0) {
registrationRegistry = [...mockDataset];
} else {
registrationRegistry = [...mockDataset, ...registrationRegistry];
}
renderRegistryTable();
}
// Safety Utility String Sanitization Module
function escapeHtml(string) {
return String(string)
.replace(/&/g, '&')
.replace(/</g, '<')
.replace(/>/g, '>')
.replace(/"/g, '"');
}
// --- High Compatibility Toggle Theme Engine ---
const themeToggleBtn = document.getElementById('themeToggleBtn');
themeToggleBtn.onclick = function() {
var bodyElement = document.body;
if (bodyElement.classList.contains('dark-mode')) {
bodyElement.classList.remove('dark-mode');
themeToggleBtn.textContent = '🌙 Dark Mode';
} else {
bodyElement.classList.add('dark-mode');
themeToggleBtn.textContent = '☀️ Light Mode';
}
};
// AUTOMATIC LOAD: Run mock data immediately so the page is populated on open
loadMockData();