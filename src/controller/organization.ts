import { Request, Response, NextFunction } from 'express';
import createOne from '../services/organization/createOne';
import findOneById from '../services/organization/findOneById';
import { IOrganization } from '../models/Organization';
import AppResponse from '../types/AppResponse';

const findOrgById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orgId = req.params.id;
    const org = await findOneById(orgId);
    const response: AppResponse = { data: org, isError: false };
    res.send(response);
  } catch (error) {
    next(error);
  }
};

const createOrg = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orgData: IOrganization = {
      name: req.body.name,
      email: req.body.email,
    };
    const createOrg = await createOne(orgData);
    const response: AppResponse = { data: createOrg, isError: false };
    res.send(response);
  } catch (error) {
    next(error);
  }
};

export { findOrgById, createOrg };
