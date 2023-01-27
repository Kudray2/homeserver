import jwt from 'jsonwebtoken';
import { secretString } from '../secret.js';

class TokenClass {
  generateAccesstoken(username) {
    return jwt.sign(username, secretString, { expiresIn: '1800s' });
  }
}

const Token = new TokenClass();
export { Token };
