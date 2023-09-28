import bcrypt from 'bcrypt';
import AuthModule from '../models/Auth.model';
import AuthServices from '../services/Auth.service';
import { error, success } from '../utils/Response';
const { register, login } = require('./Auth.service');

exports.registerUser = async (req, res, next) => {
  try {
      const user = await register(req.body);
      return res.status(201).json(user);
  } catch (error) {
      return res.status(500).json({ error: error.message });
  }
};

exports.loginUser = async (req, res, next) => {
  try {
      const user = await login(req.body);
      if (user && user.token) {
          return res.status(200).json(user);
      }
      return res.status(400).json({ error: "Invalid credentials" });
  } catch (error) {
      return res.status(500).json({ error: error.message });
  }
};

exports.updateUserDetails = async (req, res, next) => {
  try {
      const user = await User.findByIdAndUpdate(req.user.id, req.body, {
          new: true,
          runValidators: true
      });

      res.status(200).json({
          success: true,
          data: user
      });
  } catch (error) {
      res.status(500).json({
          success: false,
          error: 'Server Error'
      });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
      await User.findByIdAndDelete(req.user.id);

      res.status(200).json({
          success: true,
          data: {}
      });
  } catch (error) {
      res.status(500).json({
          success: false,
          error: 'Server Error'
      });
  }
};

const AuthController = {
  register: async (req, res) => {
    const { email, password, fullName, phoneNumber } = req.body;
    const reqUser = await AuthModule.findOne({ email });
    if (reqUser) {
      error(res, null, 'Email already exist');
    } else {
      const hashPassword = bcrypt.hashSync(password, 10);
      AuthModule.create({
        email,
        password: hashPassword,
        fullName,
        phoneNumber,
      })
        .then((data) => {
          success(res, data, 'User created successfully');
        })
        .catch((err) => {
          error(res, err, 'User creation failed');
        });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await AuthModule.findOne({ email });
    if (!user) {
      return error(res, null, 'Email or Password incorrect');
    }
    const reqPassword = await bcrypt.compare(password, user.password);
    if (!reqPassword) {
      return error(res, null, 'Email or Password incorrect');
    }
    const dataForAccessToken = {
      email,
    };
    const token = await AuthServices.generateToken(dataForAccessToken);
    if (!token) {
      return error(res, null, 'Token generation failed');
    }

    const data = {
      token,
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      createdAt: user.createdAt,
      role: user.role,
      updatedAt: user.updatedAt,
    };
    return success(res, data, 'Login successful');
  },

  loginWithJWT: async (req, res) => {
    const token = req.header('authorization');
    const { email } = await AuthServices.verifyToken(token);
    const user = await AuthModule.findOne({ email });
    if (!user) return error(res, null, 'User not found');
    return success(res, user, 'User found');
  },
  getAllUsers: async (req, res) => {
    const users = await AuthModule.find();
    if (!users) return error(res, null, 'No users found');
    return success(res, users, 'All users');
  },
};

export default AuthController;
