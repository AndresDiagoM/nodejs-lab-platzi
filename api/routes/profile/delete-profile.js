import { Router } from 'express';
import { body, check, validationResult } from 'express-validator';
import { UserModel } from '../../models/User.js';

export const deleteUser = Router();

deleteUser.delete('/',
  // @todo: Validación y sanitización de los datos de entrada

  // @todo: Eliminar el usuario actual según la sesión del token JWT
  async (request, response) => {
    const payload = request.payload;

    console.log(payload);
    const username = payload.username;
    // delete user
    const user = await UserModel.findOneAndDelete({ username });

    return response.status(200).json({
      username: user.username,
      password: user.password,
    });
  }
);
