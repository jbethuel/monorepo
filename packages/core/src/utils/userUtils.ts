import { User } from '../models/User';

const formatName = (arg: User): string => {
  return `${arg.lastName}, ${arg.firstName}`;
};

export const userUtils = {
  formatName,
};
