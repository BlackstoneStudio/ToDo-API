import { ApiProperty } from '@nestjs/swagger';
import { Users, USER_ROLES } from '@prisma/client';

export class User implements Users {
  @ApiProperty()
  id: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  userName: string;

  @ApiProperty()
  email: string;

  password: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updateAt: Date;

  @ApiProperty()
  role: USER_ROLES;
}
