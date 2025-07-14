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

  async deletePost(postId: number) {
    const post = await this.postsRepository.findOne({ where: { id: postId } });
    /// id의 포스트가 존재하지 않을 경우
    if (!post) {
      throw new NotFoundException();
    }

    await this.postsRepository.remove(post);

    return postId;
  }
}
