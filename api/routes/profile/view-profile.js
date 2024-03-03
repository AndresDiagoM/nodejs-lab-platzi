import { Router } from 'express';
import { body, check, validationResult } from 'express-validator';
import { UserModel } from '../../models/User.js';

export const viewUser = Router();

viewUser.get('/:username',
  // @todo: Validación y sanitización de los datos de entrada
  check('username').not().isEmpty().trim(),
  check('username').custom(async (username) => {
    const maybeUser = await UserModel.findOne({ username });
    if (!maybeUser) {
      throw new Error('username not found');
    }
  }),

  // @todo: Ver información del usuario actual según la sesión del token JWT
  async (request, response) => {
    const payload = request.payload;

    const username = payload.username;
    const user = await UserModel.findOne({ username });

    return response.status(200).json({
      username: user.username,
      createdAt: user.createdAt,
    });
  }
);
