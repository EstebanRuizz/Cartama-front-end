export interface IMediatorHandler {
    handleSuccess(response: any): void;
    handleError(error: any): void;
}
