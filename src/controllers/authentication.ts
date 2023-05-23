import express from 'express'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { getUserByEmail, createUser, UserModel } from '../db/users';


export const login = async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;

  try {
    // Busca el usuario en la base de datos
    const usuario:any = await UserModel.findOne({ email });

    if (!usuario) {
      return res.status(401).json({ mensaje: 'Credenciales inválidas' });
    }

    // Verifica la contraseña
    const contrasenaValida = await bcrypt.compare(password, usuario.password);

    if (!contrasenaValida) {
      return res.status(401).json({ mensaje: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ id: usuario._id, email: usuario.email }, process.env.JWT_SECRET);

    res.json({ token });
  } catch (error) {
    console.error('Error en el inicio de sesión', error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
}


  export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.sendStatus(400);
    }

    const existingUser = await getUserByEmail(email);
  
    if (existingUser) {
      console.log("el usuario existe");
      return res.sendStatus(400);
    }

    const hashedPassword = await bcrypt.hash(password, 10);


    
    const user = await createUser({
      email,
      username,
     'password': hashedPassword
    });

  //  return res.status(200).json(user).end();
  res.status(200).json({
    status: 'success',
    message: 'user create successfully  '
  });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}



