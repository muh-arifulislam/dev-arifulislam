import config from '../config';
import { USER_ROLE } from '../modules/user/user.constant';
import { IUser } from '../modules/user/user.interface';
import { User } from '../modules/user/user.model';
import { UserServices } from '../modules/user/user.service';

const defaulAdmin: IUser = {
  email: config.admin_email as string,
  role: USER_ROLE.admin,
  password: config.admin_pass as string,
  firstName: 'Md. Ariful',
  lastName: 'Islam',
  address: {
    street: 'Paduar Bazar Bishwaroad, Sadar South',
    city: 'Cumilla',
    country: 'Bangladesh',
  },
  gender: 'male',
};

export const seedSuperAdmin = async () => {
  const isSuperAdminExists = await User.findOne({ role: USER_ROLE.admin });
  if (!isSuperAdminExists) {
    await UserServices.addUserIntoDB(defaulAdmin);
  }
};
