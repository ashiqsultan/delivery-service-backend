import User, { IUser } from '../../models/User';
import Auth from '../../models/Auth';
import Organization from '../../models/Organization';

/**
 * Creates a new local user. Local user is a non SSO user.
 * Uses the mongodb session to create a new user and store password hash in auth table.
 */
const createLocalUser = async (
  user: IUser,
  password: string
): Promise<IUser> => {
  const session = await User.db.startSession();
  try {
    session.startTransaction();
    if (!user.organization) {
      const customerOrg = await Organization.findOne({ name: 'customer' });
      user.organization = customerOrg.id;
    }
    const newUser = new User(user);
    await newUser.save({ session });
    const newAuth = new Auth({
      user: newUser._id,
      password: password,
    });
    await newAuth.save({ session });
    await session.commitTransaction();
    session.endSession();
    return newUser;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};
export { createLocalUser };
