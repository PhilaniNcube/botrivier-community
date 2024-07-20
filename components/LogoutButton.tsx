'use client'

import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { createClient } from '@/utils/supabase/client'

export default function LogoutButton() {
  const router = useRouter()

  // Create a Supabase client configured to use cookies
  const supabase = createClient()

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
