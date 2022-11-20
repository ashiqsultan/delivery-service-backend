import bcrypt from "bcryptjs";
/**
 * Hash a password using bcrypt.
 */
const hashPassword = async (password: string): Promise<string> => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
};
export default hashPassword;
