interface succes {
    code: number,
    status: string
}
export interface error {
    code: number,
    status: string,
    pesan: string
}
export interface Profile extends succes {
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