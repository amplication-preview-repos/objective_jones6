/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";
import { Type } from "class-transformer";
import { RetweetUpdateManyWithoutTweetsInput } from "./RetweetUpdateManyWithoutTweetsInput";

@InputType()
class TweetUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  author?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    type: () => LikeUpdateManyWithoutTweetsInput,
  })
  @ValidateNested()
  @Type(() => LikeUpdateManyWithoutTweetsInput)
  @IsOptional()
  @Field(() => LikeUpdateManyWithoutTweetsInput, {
    nullable: true,
  })
  likes?: LikeUpdateManyWithoutTweetsInput;

  @ApiProperty({
    required: false,
    type: () => RetweetUpdateManyWithoutTweetsInput,
  })
  @ValidateNested()
  @Type(() => RetweetUpdateManyWithoutTweetsInput)
  @IsOptional()
  @Field(() => RetweetUpdateManyWithoutTweetsInput, {
    nullable: true,
  })
  retweets?: RetweetUpdateManyWithoutTweetsInput;
}

export { TweetUpdateInput as TweetUpdateInput };
