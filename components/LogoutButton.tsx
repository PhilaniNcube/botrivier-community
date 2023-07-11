'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { Database } from '@/schema'

export default function LogoutButton() {
  const router = useRouter()

  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient<Database>()

  const signOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <Button
      variant="destructive"
      className=""
      onClick={signOut}
    >
      Logout
    </Button>
  )
}
