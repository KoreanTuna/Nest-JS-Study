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
