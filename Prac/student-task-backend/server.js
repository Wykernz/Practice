
const express = require('express');

const app = express();

app.use(express.json());

// Temporary task storage
let tasks = [
    {
        id: 1,
        task: 'Study JavaScript',
        completed: false
    },
    {
        id: 2,
        task: 'Learn Express.js',
        completed: false
    }
];

let nextId = 3;

// GET: Retrieve all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// POST: Add a new task
app.post('/tasks', (req, res) => {
    const taskName = req.body.task;

    if (!taskName || typeof taskName !== 'string' || !taskName.trim()) {
        return res.status(400).json({
            message: 'Please provide a valid task name.'
        });
    }

    const newTask = {
        id: nextId,
        task: taskName.trim(),
        completed: false
    };

    nextId++;

    tasks.push(newTask);

    res.status(201).json(newTask);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
