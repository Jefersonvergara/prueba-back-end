import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserModel, getUserByEmail, createUser } from '../models/users.model';

export const authenticateUser = async (email: string, password: string) => {
  try {
    const usuario: any = await UserModel.findOne({ email });

    if (!usuario) {
      return { error: 'Credenciales inválidas' };
    }

    const contrasenaValida = await bcrypt.compare(password, usuario.password);

    if (!contrasenaValida) {
      return { error: 'Credenciales inválidas' };
    }

    const token = jwt.sign(
      { id: usuario._id, email: usuario.email },
      process.env.JWT_SECRET
    );

    return { token };
  } catch (error) {
    console.error('Error en la autenticación del usuario', error);
    throw new Error('Error en el servidor');
  }
};
export const authenticateregisterUser = async (
  email: string,
  password: string,
  username: string
) => {
  try {
    if (!email || !password || !username) {
      return { error: 'datos invalidos' };
    }

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return { error: 'Usuario ya existe' };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await createUser({
      email,
      username,
      password: hashedPassword,
    });

    //  return res.status(200).json(user).end();
    return { status: 'success', message: 'user create successfully  ' };
  } catch (error) {
    console.log(error);
    return { error: 'bad request ' };
  }
};
