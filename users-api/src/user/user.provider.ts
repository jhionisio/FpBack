/* eslint-disable prettier/prettier */

import { DataSource } from 'typeorm';
import { User } from './user.entity';

export const userProvider = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (connection: DataSource) =>
            connection.getRepository(User),
    },
];