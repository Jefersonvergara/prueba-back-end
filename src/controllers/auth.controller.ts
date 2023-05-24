import express from 'express';
import {
  authenticateUser,
  authenticateregisterUser,
} from '../services/auth.services';

export const login = async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;

  try {
    const result = await authenticateUser(email, password);

    if (result.error) {
      return res.status(401).json({ mensaje: result.error });
    }

    res.json({ token: result.token });
  } catch (error) {
    console.error('Error en el inicio de sesión', error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
};

export const register = async (req: express.Request, res: express.Response) => {
  const { email, password, username } = req.body;

  try {
    const result = await authenticateregisterUser(email, password, username);

    if (result.error) {
      return res.status(401).json({ mensaje: result.error });
    }

    res.json({ mensaje: 'Usuario creado exitosamente' });
  } catch (error) {
    console.error('Error al crear el usuario', error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
};
