import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { FeishuController } from './feishu/feishu.controller';
import { FeishuService } from './feishu/feishu.service';
import { DatabaseModule } from '@/common/database/database.module';
import { UserProviders } from './user.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [FeishuController, UserController],
  providers: [...UserProviders, UserService, FeishuService],
  exports: [UserService],
})
export class UserModule {}
