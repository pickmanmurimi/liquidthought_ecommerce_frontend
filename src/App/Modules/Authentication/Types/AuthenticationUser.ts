/**
 * object used for login
 */
export type AuthenticationUser = {
    email: string,
    password: string,
    password_confirmation?: string,
    first_name?: string,
    last_name?: string,
}