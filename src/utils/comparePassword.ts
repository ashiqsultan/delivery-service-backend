import bcrypt from "bcryptjs";

/**
 * Compare a password to a hash.
 */
const comparePassword = async (password = "", hash = ""): Promise<boolean> => {
  try {
    const isValid = await bcrypt.compare(password, hash);
    return isValid;
  } catch (error) {
    throw error;
  }
};
export default comparePassword;
