'use client'
import { Auth, ThemeSupa } from "@supabase/auth-ui-react"
import { supabase } from "../utils/supabaseClient"


export default function Login() {

    return (
        <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={['github']}
            theme='dark'
            redirectTo={"https://yahoo.com/account"}
        />
    )
}