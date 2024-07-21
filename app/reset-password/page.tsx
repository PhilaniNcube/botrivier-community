"use client";

import { Fragment, useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { signInAction } from "@/lib/actions/sign-in-action";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { resetPassword } from "@/lib/actions/reset-password-action";

export default function Login() {
	const [pending, startTransition] = useTransition();

	return (
		<div className="flex flex-col items-center justify-center flex-1 w-full h-[80vh] gap-2 px-8 mx-auto sm:max-w-md">
			<form
				className="flex flex-col justify-center flex-1 w-full gap-2 text-foreground"
				action={(formData) => {
					startTransition(() => {
						resetPassword(formData);
					});
				}}
			>
				<h1 className="text-2xl font-semibold text-foreground">Reset Password</h1>
				<div>
					<Label htmlFor="email">Email</Label>
					<Input type="email" id="email" name="email" />
				</div>
				<div className="my-2">
					<Label htmlFor="password">New Password</Label>
					<Input type="password" id="password" name="password" />
				</div>
				<div>
					<Button type="submit" className="w-full bg-green-600">
						{pending ? "Loading..." : "Sign In"}
					</Button>
				</div>
				<Link
					href="/forgot-password"
					className="text-sm font-medium text-blue-600 underline"
				>
					Forgot Password
				</Link>
			</form>
		</div>
	);
}
