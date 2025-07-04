const express = require('express');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Base de datos simulada
let datos = {
  id: 1,
  nombre: 'Juan Perez',
  profesion: 'Desarrollador',
  universidad:'UTN'

};

// GET - Obtener los datos
app.get('/api/datos', (req, res) => {
  res.json(datos);
});

// PUT - Actualizar los datos
app.put('/api/datos', (req, res) => {
  const { nombre, profesion } = req.body;

  if (nombre) datos.nombre = nombre;
  if (profesion) datos.profesion = profesion;

  res.json({
    mensaje: 'Datos actualizados correctamente',
    datos
  });
});

// DELETE - Eliminar los datos
app.delete('/api/datos', (req, res) => {
  datos = {};
  res.json({ mensaje: 'Datos eliminados correctamente' });
});

app.get('/', (req, res) => {
  res.send('Bienvenido a la API. Visita /api/datos');
});


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});