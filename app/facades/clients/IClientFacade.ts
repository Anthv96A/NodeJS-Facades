
export interface IClientFacade{
    connect(): Promise<boolean>
    disconnect(): Promise<boolean>
}