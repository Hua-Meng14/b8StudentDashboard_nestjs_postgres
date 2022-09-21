// User.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsDateString, IsNumber } from 'class-validator';

export class UserDTO implements Readonly<UserDTO> {
  @ApiProperty({ required: true })
  @IsUUID()
  id: string;


  @ApiProperty({ required: true })
  @IsString()
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  email: string;

  @ApiProperty({ required: true })
  @IsDateString()
  dob: Date;

  @ApiProperty({ required: true })
  @IsNumber()
  kitPoint: number;

//   public static from(dto: Partial<UserDTO>) {
//     const it = new UserDTO();
//     it.id = dto.id;
//     it.name = dto.name;
//     it.description = dto.description;
//     return it;
//   }

//   public static fromEntity(entity: User) {
//     return this.from({
//       id: entity.id,
//       name: entity.name,
//       description: entity.description
//     });
//   }

//   public toEntity(user: User = null) {
//     const it = new User();
//     it.id = this.id;
//     it.name = this.name;
//     it.description = this.description;
//     it.createDateTime = new Date();
//     it.createdBy = user ? user.id : null;
//     it.lastChangedBy = user ? user.id : null;
//     return it;
//   }
}