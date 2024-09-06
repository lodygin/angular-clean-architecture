import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { UserRepository } from '../../application/repositories/user.repository';
import { User } from '../../domain/user';
import { GetUserDto } from '../dtos/get-user.dto';

@Injectable()
export class UserRestService implements UserRepository {
  private http = inject(HttpClient);

  public getById(id: string): Observable<User> {
    return this.http
      .get<GetUserDto>(`users/${id}`)
      .pipe(map((dto) => plainToInstance(User, dto)));
  }
}
