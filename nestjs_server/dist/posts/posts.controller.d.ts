import { PostModel, PostsService } from './posts.service';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getPosts(): Promise<PostModel[]>;
    getPost(id: string): Promise<PostModel>;
    postPosts(author: string, title: string, content: string): Promise<PostModel>;
    putPost(postId: string, author?: string, title?: string, content?: string): Promise<PostModel>;
    deletePost(id: string): void;
}
