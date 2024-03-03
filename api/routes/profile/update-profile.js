import { Router } from 'express';
import { body, check, validationResult } from 'express-validator';
import { UserModel } from '../../models/User.js';
import jwt from 'jsonwebtoken';

export const updateUser = Router();

updateUser.put('/',
  // @todo: Validación y sanitización de los datos de entrada
  body('username').not().isEmpty().trim(),
  body('password').isLength({ min: 6 }),
  body('newPassword').isLength({ min: 6 }),


  // @todo: Actualizar información usuario según la sesión del token JWT
  async (request, response) => {
    try {
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
      }

      const token = request.headers.authorization.split(' ')[1];
      // verify if token is valid
      const payload = jwt.verify(token, "12345SECRET:");
      if(!payload) {
        return response.status(401).json({
          error: 'You are not authorized to update this profile',
        });
      }

      const { username} = request.body;

      // encrypt new password
      const newPassword = await UserModel.hashPassword(request.body.newPassword);

      const updatedUser = await UserModel.findOneAndUpdate(
        { username: payload.username },
        { username, password: newPassword },
        { new: true }
      );

      if (!updatedUser) {
        return response.status(400).json({
          error: 'username or password is incorrect',
        });
      }

      return response.status(200).json({
        username: updatedUser.username,
        password: updatedUser.password,
      });
    } catch (error) {
      console.error(`[updateUser]: ${error}`);

      return response.status(500).json({
        error: 'An unexpected error happened. Please try again later',
      });
    }
  }
);
