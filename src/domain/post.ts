import { Expose } from 'class-transformer';

export class Post {
  @Expose()
  public id: string;

  @Expose()
  public userId: string;

  @Expose()
  public title: string;

  @Expose()
  public body: string;

  constructor(id: string, userId: string, title: string, body: string) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
  }
}
