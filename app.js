const express = require('express');
const exphbs = require('express-handlebars');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de CORS
app.use(cors());

// Configuración de Handlebars
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Portafolio Web',
    about: {
      name: 'Nelson Ramírez',
      description: 'Desarrollador web apasionado por la tecnología y la innovación. Experiencia en desarrollo fullstack y soluciones modernas.'
    },
    skills: [
      'JavaScript',
      'Node.js',
      'Express.js',
      'HTML',
      'CSS',
      'Handlebars',
      'Git',
      'APIs REST'
    ],
    projects: [
      {
        name: 'Proyecto 1',
        description: 'Aplicación de gestión de tareas con autenticación y panel de usuario.',
        url: '#'
      },
      {
        name: 'Proyecto 2',
        description: 'Sitio web de portafolio personal con diseño responsivo.',
        url: '#'
      },
      {
        name: 'Proyecto 3',
        description: 'API REST para inventario de productos con Node.js y MongoDB.',
        url: '#'
      }
    ],
    contact: {
      email: 'nelson@email.com',
      phone: '+58 123-456-7890',
      location: 'Venezuela'
    },
    social: [
      { name: 'GitHub', icon: 'fa-github', url: 'https://github.com/nelson' },
      { name: 'LinkedIn', icon: 'fa-linkedin', url: 'https://linkedin.com/in/nelson' },
      { name: 'Twitter', icon: 'fa-twitter', url: 'https://twitter.com/nelson' }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
