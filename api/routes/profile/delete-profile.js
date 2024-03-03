import { Router } from 'express';
import { body, check, validationResult } from 'express-validator';
import { UserModel } from '../../models/User.js';
import jwt from 'jsonwebtoken';

export const deleteUser = Router();

deleteUser.delete('/',
  // @todo: Validación y sanitización de los datos de entrada

  // @todo: Eliminar el usuario actual según la sesión del token JWT
  async (request, response) => {
    const token = request.headers.authorization.split(' ')[1];
    const payload = jwt.verify(token, "12345SECRET:");

    // if the token is not valid, return 401
    if (!payload) {
      return response.status(401).json({
        error: 'You are not authorized to delete this profile',
      });
    }

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
