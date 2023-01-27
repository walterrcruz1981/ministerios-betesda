'use client'
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react"
import { useEffect, useState } from "react"
import AdminAccount from "./AdminAccount"
import NormalUser from "./NormalUsers"
export default function GateWay() {
    const session = useSession()
    const supabase = useSupabaseClient()
    const [admin, setAdmin] = useState([])
    useEffect(() => {
        async function getUserStatus() {
            const { data, error } = await supabase.from('profiles')
                .select('is_admin')
                .match({ 'id': session.user.id })
                .single()
            if (data) { setAdmin(data.is_admin) }
            if (error) { throw error }
        }
        getUserStatus()
    }, [session])
    console.log(admin);
    return (
        <>
            {!admin
                ? <NormalUser />
                : <AdminAccount />
            }
        </>
    )
}