import { Observable } from 'rxjs';

import { Post } from '../../domain/post';

export abstract class PostRepository {
  public abstract getAll(): Observable<Post[]>;

  public abstract getById(id: string): Observable<Post>;

  public abstract delete(id: string): Observable<void>;
}
