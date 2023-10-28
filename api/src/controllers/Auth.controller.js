import bcrypt from 'bcrypt';
import AuthModule from '../models/Auth.model';
import AuthServices from '../services/Auth.service';
import { error, success } from '../utils/Response';

const AuthController = {
  register: async (req, res) => {
    const { email, password, fullName, phoneNumber } = req.body;
    const reqUser = await AuthModule.findOne({ email });
    if (reqUser) {
      error(res, null, 'Email already exist');
    } else {
      try {
        const hashPassword = bcrypt.hashSync(password, 10);
        const dataForAccessToken = {
          email,
        };
        const token = await AuthServices.generateToken(dataForAccessToken);
        if (!token) {
          return error(res, null, 'Token generation failed');
        }
        const newUser = await AuthModule.create({
          email,
          password: hashPassword,
          fullName,
          phoneNumber,
        });
        const data = {
          token,
          ...newUser._doc,
        };
        return success(res, data, 'User created successfully');
      } catch (err) {
        return error(res, null, 'User creation failed');
      }
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
    if (!email) {
      return error(res, null, 'Invalid token');
    }
    const user = await AuthModule.findOne({ email });
    if (!user) return error(res, null, 'User not found');
    return success(res, user, 'User found');
  },
  getAllUsers: async (req, res) => {
    const users = await AuthModule.find();
    if (!users) return error(res, null, 'No users found');
    return success(res, users, 'All users');
  },
  changeInfo: async (req, res) => {
    const { fullName, phoneNumber, avatar, _id } = req.body;
    const user = await AuthModule.findOne({ _id });
    if (!user) return error(res, null, 'User not found');
    user.avatar = avatar;
    user.fullName = fullName;
    user.phoneNumber = phoneNumber;
    await user.save();
    return success(res, user, 'User info updated');
  },
  changePassword: async (req, res) => {
    const { _id, oldPassword, newPassword } = req.body;
    const user = await AuthModule.findOne({ _id });
    if (!user) return error(res, null, 'User not found');
    const reqPassword = await bcrypt.compare(oldPassword, user.password);
    if (!reqPassword) return error(res, null, 'Old password incorrect');
    const hashPassword = bcrypt.hashSync(newPassword, 10);
    user.password = hashPassword;
    await user.save();
    return success(res, user, 'Password changed');
  },

  deleteUser: async (req, res) => {
    const { _id } = req.body;
    const user = await AuthModule.findOneAndDelete({ _id });
    if (!user) return error(res, null, 'User not found');
    return success(res, user, 'User deleted');
  },
};

export default AuthController;
