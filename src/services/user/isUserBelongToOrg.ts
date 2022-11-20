import User from '../../models/User';
/**
 * Function which checks if user belongs to organization
 */
const isUserBelongToOrg = async (
  usedId: string,
  orgId: string
): Promise<boolean> => {
  try {
    const user = await User.findById(usedId);
    return user.organization.toString() === orgId;
  } catch (error) {
    throw error;
  }
};
export default isUserBelongToOrg;
