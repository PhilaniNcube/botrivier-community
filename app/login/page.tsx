'use client'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Fragment, useState } from 'react'
import {useRouter} from 'next/navigation'
import Link from 'next/link'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";


export default function Login() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [view, setView] = useState('sign-in')
  const router = useRouter()
  const supabase = createClientComponentClient()

  const {toast} = useToast()

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
        data: {
          first_name: first_name,
          last_name: last_name,
        }
      },
    })
    console.log(data)
    setView('check-email')
  }

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (
					email === "mark@tenderscan" ||
					email === "ruthodigie@gmail.com" ||
					email === "ncbphi001@gmail.com"
				) {
          router.push("/dashboard");
        }
					router.push("/");
    router.refresh()
  }

  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full h-screen gap-2 px-8 mx-auto sm:max-w-md">

      {view === "check-email" ? (
        <p className="text-center text-foreground">
          Check <span className="font-bold">{email}</span> to continue signing
          up
        </p>
      ) : (
        <form
          className="flex flex-col justify-center flex-1 w-full gap-2 text-foreground"
          onSubmit={view === "sign-in" ? handleSignIn : handleSignUp}
        >
          {view === "sign-up" && (
            <Fragment>
              <Label className="text-md" htmlFor="first_name">
                First Name
              </Label>
              <Input
                className="px-4 py-2 mb-6 border rounded-md bg-inherit"
                type="text"
                name="first_name"
                onChange={(e) => setFirstName(e.target.value)}
                value={first_name}
                placeholder="John"
              />
              <Label className="text-md" htmlFor="last_name">
                Last Name
              </Label>
              <Input
                className="px-4 py-2 mb-6 border rounded-md bg-inherit"
                type="text"
                name="last_name"
                onChange={(e) => setLastName(e.target.value)}
                value={last_name}
                placeholder="Smith"
              />
            </Fragment>
          )}

          <Label className="text-md" htmlFor="email">
            Email
          </Label>
          <Input
            className="px-4 py-2 mb-6 border rounded-md bg-inherit"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="you@example.com"
          />
          <Label className="text-md" htmlFor="password">
            Password
          </Label>
          <Input
            className="px-4 py-2 mb-6 border rounded-md bg-inherit"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="••••••••"
          />
          {view === "sign-in" && (
            <>
              <button type="button" className="px-4 py-2 mb-6 text-white bg-green-700 rounded">
                Sign In
              </button>
              <p className="text-sm text-center">
                Don't have an account?
                <button
                  type="button"
                  className="ml-1 underline"
                  onClick={() => setView("sign-up")}
                >
                  Sign Up Now
                </button>
              </p>
            </>
          )}
          {view === "sign-up" && (
            <>
              <button type="button" className="px-4 py-2 mb-6 text-white bg-green-700 rounded">
                Sign Up
              </button>
              <p className="text-sm text-center">
                Already have an account?
                <button
                  type="button"
                  className="ml-1 underline"
                  onClick={() => setView("sign-in")}
                >
                  Sign In Now
                </button>
              </p>
            </>
          )}
        </form>
      )}
    </div>
  );
}
