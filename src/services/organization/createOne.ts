import Organization, { IOrganization } from '../../models/Organization';

const createOne = async (orgData: IOrganization): Promise<IOrganization> => {
	try {
		const newOrgData = await Organization.create(orgData);
		return newOrgData;
	} catch (error) {
		throw error;
	}
};
export default createOne;
