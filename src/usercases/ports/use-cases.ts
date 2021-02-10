export interface UserCase {
    perform(request: any): Promise<any>
}