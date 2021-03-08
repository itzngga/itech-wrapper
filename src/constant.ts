export interface error {
    code: number,
    status: string,
    pesan: string
}
export interface Profile {
    code: number,
    status: string,
    result: {
        username: string,
        nama: string,
        hp: number,
        email: string,
        saldo: number,
        total_hit: number,
        level: string,
        expaired: string,
        status: string,
        register_at: string
    }
}
export function roleError(role: string): error {
    return {
        code: 404,
        status: 'ERROR',
        pesan: role+'Only'
    }
}
export type apiResult = Object | Profile | error