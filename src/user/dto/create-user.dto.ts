import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class AddUserDto {
  @ApiProperty({ example: 123 })
  id?: string;

  @ApiProperty({ example: 'zk_001' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'zhangkang@8080.com' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'zk' })
  @IsNotEmpty()
  username: string;
}
