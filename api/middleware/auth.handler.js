// middleware for jwt token authentication
import jwt from 'jsonwebtoken';

const auth = async (request, response, next) => {
  try {
    const token = request.headers.authorization.split(' ')[1];
    const payload = jwt.verify(token, "12345SECRET:");
    if (!payload) {
      return response.status(401).json({
        error: 'You are not authorized to perform this action',
      });
    }
    console.log('auth middleware')

    // add the payload to the request object
    request.payload = payload;

    next();
  }
  catch (error) {
    console.error(`[auth]: ${error}`);
    return response.status(500).json({
      error: 'An unexpected error happened. Please try again later',
    });
  }
}

export default auth;
