import { Repository } from 'typeorm';
export { PostModel };
interface PostModel {
    id: number;
    author: string;
    title: string;
    content: string;
    likeCount: number;
    commentCount: number;
}
export declare class PostsService {
    private readonly postsRepository;
    constructor(postsRepository: Repository<PostModel>);
    getAllPosts(): Promise<PostModel[]>;
    getPostById(id: number): Promise<PostModel>;
    createPost(author: string, title: string, content: string): Promise<PostModel>;
    updatePost(postId: number, author?: string, title?: string, content?: string): Promise<PostModel>;
    deletePost(postId: number): Promise<number>;
}
