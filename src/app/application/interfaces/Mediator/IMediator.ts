export interface IMediator<TCreate, TUpdate, TDelete, TList> {
  create(instance: TCreate, component: any): void;
  update(instance: TUpdate, component: any): void;
  delete(instance: TDelete, component: any): void;
}
