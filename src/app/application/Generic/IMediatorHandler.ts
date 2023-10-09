import { IMediatorHandler } from "../interfaces/Mediator/IComponentHandler";

export abstract class BaseMediator implements IMediatorHandler {
    abstract handleSuccess(response: any): void;
    abstract handleError(error: any): void;
}
