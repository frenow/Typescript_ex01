export interface IBlock {
  add(): void;
  remove(): void;
}

export class Block<T> implements IBlock {
  add<T>() {}
  remove<T>() {}
}
