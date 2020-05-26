import { registerEnumType } from 'type-graphql';

export enum ProductType {
  GROCERY = 'grocery'
}

registerEnumType(ProductType, {
  name: 'ProductType',
  description: 'The basic product types',
});
