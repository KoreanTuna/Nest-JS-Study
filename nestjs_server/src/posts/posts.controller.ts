import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

/**
 * author : string;
 * title : string;
 * content : string;
 * likeCount : number;
 * commentCount : number;
 */

interface PostModel {
  id: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

let posts: PostModel[] = [
  {
    id: 1,
    author: 'Minwoo',
    title: 'Happy to learn NestJS',
    content: 'NestJS 맛보기',
    likeCount: 10000,
    commentCount: 10,
  },
  {
    id: 2,
    author: 'Chan',
    title: 'Exploring NestJS',
    content: 'NestJS 심화',
    likeCount: 5000,
    commentCount: 5,
  },
  {
    id: 3,
    author: 'Min',
    title: 'Mastering NestJS',
    content: 'NestJS 심화 과정',
    likeCount: 3000,
    commentCount: 2,
  },
];

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  // 1) GET /posts
  // 모든 게시글 조회
  @Get()
  getPosts(): PostModel[] {
    return posts;
  }

  // 2) GET /posts/:id
  // 특정 게시글 조회
  @Get(':id')
  getPost(@Param('id') id: string) {
    const post = posts.find((post) => post.id === +id);
    /// id의 포스트가 존재하지 않을 경우
    if (!post) {
      throw new NotFoundException();
    }
    return post;
  }

  // 3) POST /posts
  // 게시글 생성

  // 4) PUT /posts/:id
  // 게시글 수정

  // 5) DELETE /posts/:id
  // 게시글 삭제
}
