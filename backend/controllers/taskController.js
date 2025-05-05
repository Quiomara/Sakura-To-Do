const db = require('../db/connection');

// Obtener todas las tareas
exports.getAllTasks = (req, res) => {
  const sql = 'SELECT * FROM tasks ORDER BY id DESC';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// Crear una nueva tarea
exports.createTask = (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'El título es requerido' });

  const sql = 'INSERT INTO tasks (title) VALUES (?)';
  db.query(sql, [title], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ id: result.insertId, title, completed: false });
  });
};

// Actualizar una tarea
exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const sql = 'UPDATE tasks SET title = ?, completed = ? WHERE id = ?';
  db.query(sql, [title, completed, id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id, title, completed });
  });
};

// Eliminar una tarea
exports.deleteTask = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM tasks WHERE id = ?';
  db.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Tarea eliminada' });
  });
};
