import { Injectable, NotFoundException } from '@nestjs/common';
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
  getAllPosts(): PostModel[] {
    return posts;
  }

  getPostById(id: number): PostModel {
    const post = posts.find((post) => post.id === id);
    /// id의 포스트가 존재하지 않을 경우
    if (!post) {
      throw new NotFoundException();
    }
    return post;
  }

  createPost(author: string, title: string, content: string): PostModel {
    const newPost: PostModel = {
      id: posts[posts.length - 1].id + 1,
      author,
      title,
      content,
      likeCount: 0,
      commentCount: 0,
    };

    posts = [...posts, newPost];
    return newPost;
  }

  updatePost(id: number, author?: string, title?: string, content?: string) {
    const post = posts.find((post) => post.id === id);
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

    posts = posts.map((prevPost) => (prevPost.id === id ? post : prevPost));

    // 수정된 게시글 반환
    return post;
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
