import User from "../../models/User";

const deleteOne = async (userId: string): Promise<string> => {
  try {
    const deleteUser = await User.findByIdAndDelete(userId);
    const msg = `User ${userId} deleted`;
    return msg;
  } catch (error) {
    throw error;
  }
};
export default deleteOne;
