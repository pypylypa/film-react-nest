//TODO описать DTO для запросов к /films
import { IsArray, IsNumber, IsString } from 'class-validator';

export class ScheduleDto {
  @IsString()
  id: string;
  @IsString()
  daytime: string;
  @IsNumber()
  hall: number;
  @IsNumber()
  rows: number;
  @IsNumber()
  seats: number;
  @IsNumber()
  price: number;
  @IsArray()
  taken: string[];
}
