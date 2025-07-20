import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { ProfileModel } from './profile_entity';

export enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

@Entity()
export class UserModel {
  /// ID
  ///  @PrimaryGeneratedColumn()
  /// 자동으로 생성되는 ID

  /// @PrimaryColumn()
  /// 수동으로 설정하는 Primary Key

  /// @PrimaryGeneratedColumn('uuid')
  /// UUID 형식의 자동 생성 ID
  /// PrimaryGeneratedColumn -> 1,2,3, ... 순차적으로 생성
  /// uuid를 파라미터로 주면 UUID 형식으로 생성
  /// ex) 123e4567-e89b-12d3-a456-426614174000 : string
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  // /// 제목
  // @Column({
  //   /// 데이터 베이스 인지하는 카럼 타입
  //   /// 자동으로 유추됨
  //   type: 'varchar',
  //   ///  데이터베이스 칼럼 이름
  //   /// 프로퍼티 이름으로 자동 유추됨
  //   name: 'title',

  //   /// 입력할 수 있는 글자 길이
  //   length: 300,

  //   /// null 가능 여부
  //   nullable: true,

  //   // 업데이트 가능 여부
  //   /// false인 경우 이후에는 수정할 수 없음
  //   /// typeorm 0.3.20에서 에러 발생중
  //   update: false,

  //   /// find()를 살행할때, 기본으로 값을 불러올지
  //   /// 기본값이 true
  //   /// false인 경우, find()를 실행할 때 title 값이 불러오지 않음
  //   /// 가져오고 싶은 경우 find({select : {title : true}})
  //   select: true,

  //   ///기본값
  //   /// 아무것도 입력안했을때 생성되는 값
  //   default: 'default title',

  //   /// 칼럼중에서 유일무이한 값이어야 하는지
  //   unique: false,
  // })
  // title: string;

  /// 역할
  @Column({
    type: 'enum',
    enum: Role,
    default: Role.USER,
  })
  role: Role;

  /// 생성일자
  /// 자동으로 Row가 생성되는 시점에 데이터 입력
  @CreateDateColumn()
  createdAt: Date;

  /// 수정일자
  /// 데이터가 수정되는 시점에 자동으로 업데이트
  @UpdateDateColumn()
  updatedAt: Date;

  /// 데이터가 업데이트 될 때마다 1씩 올라간다.
  /// 처음 생성되면 1로 시작
  /// 내부적으로는 save() 메서드가 호출될 때마다 자동으로 증가
  @VersionColumn()
  version: number;

  /// @Generated('increment') -> 생성할때마다 1씩 증가하는 값
  /// @Generated('uuid') -> UUID 형식으로 생성
  @Column()
  @Generated('increment')
  additionalId: number;

  @OneToOne(() => ProfileModel, (profile) => profile.user)
  profile: ProfileModel;
}
