import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostsModel } from './entities/posts.entity';
export { PostModel };
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

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostsModel)
    private readonly postsRepository: Repository<PostModel>,
  ) {
    // TypeORM Repository를 주입받아 사용할 수 있습니다.
    this.postsRepository = postsRepository;
  }
  async getAllPosts(): Promise<PostModel[]> {
    /// TypeORM Repository를 사용하여 모든 게시글을 조회.
    return this.postsRepository.find();
  }

  async getPostById(id: number) {
    const post: PostModel | null = await this.postsRepository.findOne({
      where: { id },
    });
    if (!post) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }
    return post;
  }

  async createPost(author: string, title: string, content: string) {
    // 1) create -> 저장할 객체를 생성
    // 2) save -> 객체를 저장(create 메서드에서 생성한 객체로)
    const post = this.postsRepository.create({
      author,
      title,
      content,
      likeCount: 0, // 초기값 설정
      commentCount: 0, // 초기값 설정
    });

    const newPost = await this.postsRepository.save(post);
    return newPost;
  }

  async updatePost(
    postId: number,
    author?: string,
    title?: string,
    content?: string,
  ) {
    /// save의 기능
    // 1) 만약에 id기준으로 데이터가 존재하지 않는다면 새로 생성
    // 2) 만약에 id기준으로 데이터가 존재한다면 해당 데이터를 수정
    const post = await this.postsRepository.findOne({ where: { id: postId } });

    if (!post) {
      throw new NotFoundException();
    }

    if (author) {
      post.author = author;
    }

    if (title) {
      post.title = title;
    }

    if (content) {
      post.content = content;
    }

    // save 메서드를 사용하여 수정된 post 객체를 저장
    return this.postsRepository.save(post);
  }

  deletePost(id: number) {
    const post = posts.find((post) => post.id === id);
    /// id의 포스트가 존재하지 않을 경우
    if (!post) {
      throw new NotFoundException();
    }

    posts = posts.filter((post) => post.id !== id);

    return id;
  }
}
