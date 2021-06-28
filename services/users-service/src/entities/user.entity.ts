import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('users')
export class User {
  @ObjectIdColumn() id: ObjectID;
  @Column() name: string;
  @Column() photoUrl: string;
  @Column() createdAt?: Date;
  @Column() updatedAt?: Date;

  constructor(user?: Partial<User>) {
    Object.assign(this, user);
  }
}
