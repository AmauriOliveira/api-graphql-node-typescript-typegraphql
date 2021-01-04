import { Field, InputType } from 'type-graphql';

@InputType()
class CategoryInput {
  @Field()
  description: string;

  @Field()
  name: string;
}

export default CategoryInput;
