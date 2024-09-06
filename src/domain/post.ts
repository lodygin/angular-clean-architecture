import { Transform } from 'class-transformer';

export class Post {
  @Transform(({ value }) => value.toString(), { toClassOnly: true })
  public id!: string;

  @Transform(({ value }) => value.toString(), { toClassOnly: true })
  public userId!: string;

  public title!: string;
  public body!: string;
}
