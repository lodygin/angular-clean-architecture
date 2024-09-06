import { Observable } from 'rxjs';

import { User } from '../../domain/user';

export abstract class UserRepository {
  public abstract getById(id: string): Observable<User>;
}
