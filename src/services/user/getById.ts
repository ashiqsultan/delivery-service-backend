import User, { IUser } from '../../models/User';

const getById = async (userId: string): Promise<IUser> => {
  try {
    const user = await User.findById(userId).populate('organization', {
      _id: 1,
      name: 1,
    });
    return user;
  } catch (error) {
    throw error;
  }
};
export default getById;
