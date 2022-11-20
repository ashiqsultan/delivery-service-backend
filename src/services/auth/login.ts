import User from '../../models/User';
import Auth from '../../models/Auth';
import comparePassword from '../../utils/comparePassword';
import generateToken from '../../utils/generateToken';
import AppResponse from '../../types/AppResponse';
import { userNotFound, incorrectPassword } from '../../commonRes';

/**
 * Returns a token for a user
 */
export default async (
  email: string,
  password: string
): Promise<AppResponse> => {
  const userData = await User.findOne({ email });
  if (!userData) {
    return userNotFound;
  } else {
    const authData = await Auth.findOne({ user: userData._id }, 'password');
    const hashedPassword = authData.password;
    const isValid = await comparePassword(password, hashedPassword);
    if (!isValid) {
      return incorrectPassword;
    } else {
      const token = await generateToken(
        userData._id,
        userData.email,
        userData.organization as string
      );
      return {
        data: { token },
        isError: false,
        errMsg: null,
        statusCode: 200,
      };
    }
  }
};
