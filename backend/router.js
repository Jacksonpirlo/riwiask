// routes/products.js
import { Router } from 'express';
import db from './config/db.js'
const router = Router();

import Product from '../models/Product.js';

// GET /api/products con paginación
router.get('/', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT COUNT(*) AS numUsers FROM usuarios');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
});

// Agregar usuario
app.post('/users', async (req, res) => {
  const { nombre, email } = req.body;
  try {
    await db.query('INSERT INTO usuarios (nombre, email) VALUES ($1, $2)', [nombre, email]);
    res.json({ message: 'Usuario agregado' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Actualizar usuario
app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, email } = req.body;
  try {
    const result = await db.query(
      'UPDATE usuarios SET nombre = $1, email = $2 WHERE id = $3',
      [nombre, email, id]
    );
    if (result.rowCount === 0) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json({ message: 'Usuario actualizado' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Eliminar usuario
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('DELETE FROM usuarios WHERE id = $1', [id]);
    if (result.rowCount === 0) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json({ message: 'Usuario eliminado' });
  } catch (err) {
    res.status(500).json(err);
  }
});
