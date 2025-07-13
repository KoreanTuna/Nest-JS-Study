# Nest-JS-Study

NestJS 공부!

## NestJS Built-in-Exception

```js
BadRequestException;
UnauthorizedException;
NotFoundException;
ForbiddenException;
NotAcceptableException;
RequestTimeoutException;
ConflictException;
GoneException;
HttpVersionNotSupportedException;
PayloadTooLargeException;
UnsupportedMediaTypeException;
UnprocessableEntityException;
InternalServerErrorException;
NotImplementedException;
ImATeapotException;
MethodNotAllowedException;
BadGatewayException;
ServiceUnavailableException;
GatewayTimeoutException;
PreconditionFailedException;
```

## Controller & Service

**controller** : 가장 맨 앞에서 요청을 받는 역할. 대응하는 함수(Service)로 라우팅 시켜준다<br>
**service** : 로직 처리.

```js
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
```

Controller는 생성자에서 Service를 의존성 주입받는다!

```js
@Injectable()
export class PostsService {}
```

IOC콘테이너에 Injectable로 Service를 등록하는거같은데,
Flutter의 getIt, Injectable도 유사한 패턴을 사용한것이라고 바로 캐치했음!

## Docker

```bash
docker compose up
```

docker-compose.yaml에 저장된 내용대로 연결진행

![alt text](postgrsql_connection.png)
![alt text](connection_ip.png)
![alt text](postgres_signin.png)
port : 5432 -> Standard connection > postgres > 연결이름:nestjs_local_database

## TypeORM 설치

### 패키지 설치

```bash
npm add @nestjs/typeorm typrorm pg --save
```

### 앱 모듈에 데이터 베이스 정보 입력

```js
@Module({
  imports: [
    PostsModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // 데이터베이스 타입,
      host: '127.0.0.1',
      port: 5432, // 데이터베이스 포트
      username: 'postgres', // 데이터베이스 사용자명
      password: 'postgres', // 데이터베이스 비밀번호
      database: 'postgres', // 데이터베이스 이름
      entities: [PostsModel], /// 사용하는 모델들이 추가될때마다 넣어주기
      synchronize: true, // 개발 환경에서만 사용, 프로덕션에서는 false로 설정
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
```

## Repository 의존성 주입

```js
@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostsModel)
    private readonly postsRepository: Repository<PostModel>,
  ) {
    this.postsRepository = postsRepository;
  }
  getAllPosts(): PostModel[] {
    return posts;
  }
  ...
  }
```

## 조회 / 생성 / 수정

**테이블 전체 조회**

```js
return this.postsRepository.find();
```

**단건 조회**

```js
const post: PostModel | null = await this.postsRepository.findOne({
  where: { id },
});
```

**생성**

```js
const post = this.postsRepository.create({
  author,
  title,
  content,
  likeCount: 0, // 초기값 설정
  commentCount: 0, // 초기값 설정
});
```

**저장**
save의 기능

1.  만약에 id기준으로 데이터가 존재하지 않는다면 새로 생성
2.  만약에 id기준으로 데이터가 존재한다면 해당 데이터를 수정

```js
const newPost = await this.postsRepository.save(post);
```
