import { Transform } from 'class-transformer';

export class User {
  @Transform(({ value }) => value.toString(), { toClassOnly: true })
  public id!: string;

  public name!: string;
  public email!: string;
  public phone!: string;
}
