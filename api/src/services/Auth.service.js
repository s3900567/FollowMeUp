import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import axios from 'axios';

dotenv.config();

const accessTokenLife = process.env.ACCESS_TOKEN_LIFE;
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const User = require('./Auth.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

export const updateUser = async (userData) => {
  try {
      const response = await axios.put('http://localhost:5000/api/users/update', userData);
      if (response.data.success) {
          return {
              success: true,
              data: response.data.data
          };
      } else {
          return {
              success: false,
              error: response.data.error
          };
      }
  } catch (error) {
      return {
          success: false,
          error: 'Network error. Please try again.'
      };
  }
};

export const deleteUser = async (userId) => {
  try {
      const response = await axios.delete(`http://localhost:5000/api/users/delete/${userId}`);
      if (response.data.success) {
          return {
              success: true,
              message: "User deleted successfully"
          };
      } else {
          return {
              success: false,
              error: response.data.error
          };
      }
  } catch (error) {
      return {
          success: false,
          error: 'Network error. Please try again.'
      };
  }
};
exports.register = async ({ email, password }) => {
    let user = await User.findOne({ email });

    if (user) {
        throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({
        email,
        password: hashedPassword
    });

    return { email: user.email, id: user._id };
};

exports.login = async ({ email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: user._id }, 'YOUR_SECRET_KEY', { expiresIn: '1h' });

    return { token, email: user.email, id: user._id };
};

const AuthServices = {
  generateToken: async (parser) => {
    const accessToken = jwt.sign(parser, accessTokenSecret, {
      expiresIn: accessTokenLife,
      algorithm: 'HS256',
    });
    return accessToken;
  },
  verifyToken: async (token) => {
    try {
      token = token.replace('Bearer ', '');
      const decoded = jwt.verify(token, accessTokenSecret, {
        expiresIn: accessTokenLife,
        algorithm: 'HS256',
        ignoreExpiration: true,
      });
      return decoded;
    } catch (err) {
      console.log(`Error in decode access token: ${err}`);
      return null;
    }
  },
};

export default AuthServices;
