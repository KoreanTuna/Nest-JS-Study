"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const posts_entity_1 = require("./entities/posts.entity");
let posts = [
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
let PostsService = class PostsService {
    postsRepository;
    constructor(postsRepository) {
        this.postsRepository = postsRepository;
        this.postsRepository = postsRepository;
    }
    getAllPosts() {
        return posts;
    }
    getPostById(id) {
        const post = posts.find((post) => post.id === id);
        if (!post) {
            throw new common_1.NotFoundException();
        }
        return post;
    }
    createPost(author, title, content) {
        const newPost = {
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
    updatePost(id, author, title, content) {
        const post = posts.find((post) => post.id === id);
        if (!post) {
            throw new common_1.NotFoundException();
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
        return post;
    }
    deletePost(id) {
        const post = posts.find((post) => post.id === id);
        if (!post) {
            throw new common_1.NotFoundException();
        }
        posts = posts.filter((post) => post.id !== id);
        return id;
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(posts_entity_1.PostsModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostsService);
//# sourceMappingURL=posts.service.js.map