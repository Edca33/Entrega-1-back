
import express from 'express';
import passport from './config/passport.js';
import cookieParser from 'cookie-parser';
import sessionRoutes from './routes/sessions.js';
import userRoutes from './routes/users.js'; 
import mongoose from 'mongoose';

const app = express();
app.use(express.json());
app.use(cookieParser());


app.use(passport.initialize());

// Rutas
app.use('/api/sessions', sessionRoutes);
app.use('/api/users', userRoutes);



mongoose.connect('mongodb+srv://doom660324:Argos666999333.*@coderback.0bsn23o.mongodb.net/?retryWrites=true&w=majority&appName=coderback', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Conectado a MongoDB');
  }).catch((err) => {
    console.error('Error al conectar a MongoDB', err);
  });
  


app.listen(8080, () => {
  console.log('Servidor corriendo en el puerto 8080');
});
