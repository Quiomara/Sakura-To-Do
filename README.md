# 🌸 Sakura To-Do List 

<div align="center">
  <img src="https://i.imgur.com/W3Bq4yk.png" alt="Interfaz Sakura" width="500">
  <p><em>Aplicación de tareas con diseño inspirado en flores de cerezo</em></p>
</div>

<div align="center">
  <img src="https://i.imgur.com/EutoNan.png" alt="UI Sakura" width="500">
</div>

## ✨ Características
- Checkboxes con flores ✿ animadas
- Paleta de colores Sakura (rosas pastel y verdes suaves)
- Diseño 100% responsive
- Modal de confirmación elegante
- Actualización en tiempo real con RxJS
- Backend con Node.js + Express + MySQL

## 🛠 Tecnologías

### Frontend
<p align="left">
  <img src="https://img.shields.io/badge/Angular-19.2.0-DD0031?style=for-the-badge&logo=angular&logoColor=white">
  <img src="https://img.shields.io/badge/TypeScript-5.7.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/SCSS-1.71.0-CC6699?style=for-the-badge&logo=sass&logoColor=white">
</p>

### Backend
<p align="left">
  <img src="https://img.shields.io/badge/Node.js-20.10.0-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
  <img src="https://img.shields.io/badge/Express-5.1.0-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
</p>

## 🚀 Instalación

### Requisitos
- Node.js v20.10+
- MySQL 8.0+
- Angular CLI v19+

```bash
# Clonar repositorio
git clone https://github.com/Quiomara/Sakura-To-Do.git
cd Sakura-To-Do

# Instalar dependencias del backend
cd backend
npm install

# Instalar dependencias del frontend
cd ../frontend
npm install

# Configurar variables de entorno (crear archivo .env en backend/)
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=sakura_todo
```

## 📂 Estructura del Proyecto
```
sakura-todo-app/
├── backend/
│   ├── controllers/
│   │   └── taskController.js
│   ├── db/
│   │   └── connection.js
│   ├── routes/
│   │   └── task.js
│   ├── .env
│   └── index.js
├── frontend/
│   └── src/
│       └── app/
│           ├── components/
│           ├── home
│           └── services/
└── README.md
```

## 📄 Licencia
MIT © 2025 [Quiomara](https://github.com/Quiomara)  
