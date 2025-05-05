const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Obtener todas las tareas
router.get('/', taskController.getAllTasks);

// Crear una nueva tarea
router.post('/', taskController.createTask);

// Actualizar una tarea
router.put('/:id', taskController.updateTask);

// Eliminar una tarea
router.delete('/:id', taskController.deleteTask);

module.exports = router;
