// DOM Elements
const listElement = document.querySelector('#todo-list');
const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const countElement = document.querySelector('#todo-count');
const filterButtons = document.querySelectorAll('.filter');

// State
let todos = JSON.parse(localStorage.getItem('daymark-todos') || '[]');
let currentFilter = 'all';

// Display current date
document.querySelector('#today').textContent = new Intl.DateTimeFormat('en', { 
    weekday: 'long', 
    month: 'short', 
    day: 'numeric' 
}).format(new Date());

// Save todos to localStorage
function saveTodos() {
    localStorage.setItem('daymark-todos', JSON.stringify(todos));
}

// Render todos list
function renderTodos() {
    listElement.replaceChildren();
    
    // Filter todos based on current filter
    const visibleTodos = todos.filter(todo => {
        if (currentFilter === 'all') return true;
        if (currentFilter === 'done') return todo.done;
        if (currentFilter === 'active') return !todo.done;
        return true;
    });
    
    // Update task count
    const activeTasks = todos.filter(todo => !todo.done).length;
    countElement.textContent = `${activeTasks} ${activeTasks === 1 ? 'task' : 'tasks'} left`;

    // Show empty state if no visible todos
    if (!visibleTodos.length) {
        const empty = document.createElement('li');
        empty.className = 'empty';
        empty.textContent = currentFilter === 'all' 
            ? 'Your list is clear. Add something small.' 
            : 'Nothing here yet.';
        listElement.append(empty);
        return;
    }

    // Render each todo
    visibleTodos.forEach(todo => {
        const item = document.createElement('li');
        item.className = `todo${todo.done ? ' done' : ''}`;
        item.dataset.id = todo.id;

        // Checkbox button
        const check = document.createElement('button');
        check.className = 'check';
        check.type = 'button';
        check.ariaLabel = todo.done ? `Mark ${todo.text} as open` : `Complete ${todo.text}`;
        check.addEventListener('click', () => {
            todo.done = !todo.done;
            saveTodos();
            renderTodos();
        });

        // Todo text
        const text = document.createElement('span');
        text.className = 'todo-text';
        text.textContent = todo.text;

        // Action buttons (Edit and Delete)
        const actions = document.createElement('div');
        actions.className = 'actions';
        
        const edit = document.createElement('button');
        edit.className = 'action';
        edit.type = 'button';
        edit.textContent = 'Edit';
        edit.addEventListener('click', () => editTodo(todo, item, text, actions));
        
        const remove = document.createElement('button');
        remove.className = 'action';
        remove.type = 'button';
        remove.textContent = 'Delete';
        remove.addEventListener('click', () => {
            todos = todos.filter(entry => entry.id !== todo.id);
            saveTodos();
            renderTodos();
        });
        
        actions.append(edit, remove);
        item.append(check, text, actions);
        listElement.append(item);
    });
}

// Edit todo function
function editTodo(todo, item, textElement, actions) {
    const editInput = document.createElement('input');
    editInput.className = 'edit-input';
    editInput.value = todo.text;
    editInput.maxLength = 120;
    
    const saveEdit = () => {
        const newText = editInput.value.trim();
        if (newText) {
            todo.text = newText;
            saveTodos();
            renderTodos();
        } else {
            renderTodos();
        }
    };
    
    editInput.addEventListener('blur', saveEdit);
    editInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            saveEdit();
        } else if (e.key === 'Escape') {
            renderTodos();
        }
    });
    
    item.replaceChild(editInput, textElement);
    item.removeChild(actions);
    editInput.focus();
    editInput.select();
}

// Add new todo
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    
    if (text) {
        const newTodo = {
            id: Date.now().toString(),
            text: text,
            done: false
        };
        
        todos.push(newTodo);
        saveTodos();
        renderTodos();
        input.value = '';
    }
});

// Filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active filter button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Update current filter and re-render
        currentFilter = button.dataset.filter;
        renderTodos();
    });
});

// Initial render
renderTodos();
