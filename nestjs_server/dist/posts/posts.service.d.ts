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
    getAllPosts(): PostModel[];
    getPostById(id: number): PostModel;
    createPost(author: string, title: string, content: string): PostModel;
    updatePost(id: number, author?: string, title?: string, content?: string): PostModel;
    deletePost(id: number): number;
}
