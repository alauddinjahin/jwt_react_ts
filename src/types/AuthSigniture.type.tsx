
export type AuthUser = {
    name: string | null
    email: string | null
    mobile: string | null
    token: string | null
    loggedIn: boolean
};


export type AuthSigniture = {
    auth: boolean
    user: AuthUser | null
};



