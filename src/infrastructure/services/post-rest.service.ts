import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { PostRepository } from '../../application/repositories/post.repository';
import { Post } from '../../domain/post';
import { GetPostDto } from '../dtos/get-post.dto';
import { ClassTransformerUtil } from '../../shared/utils/class-transformer.util';

@Injectable()
export class PostRestService implements PostRepository {
  private http = inject(HttpClient);

  public getById(id: string): Observable<Post> {
    return this.http
      .get<GetPostDto>(`posts/${id}`)
      .pipe(map(dto => ClassTransformerUtil.plainToInstance(Post, dto)));
  }

  public delete(id: string): Observable<void> {
    return this.http.get<void>(`posts/${id}`);
  }

  public getAll(): Observable<Post[]> {
    return this.http
      .get<GetPostDto[]>('posts')
      .pipe(map(dto => ClassTransformerUtil.plainToInstance(Post, dto)));
  }
}
