import Organization, { IOrganization } from '../../models/Organization';
const findOneById = async (id: string): Promise<IOrganization> => {
	try {
		const org = await Organization.findById(id);
		return org;
	} catch (error) {
		throw error;
	}
};
export default findOneById;
