
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { forgotPasswordAction } from "@/lib/actions/forgot-password-action";

export default function Component() {
	return (
		<Card className="max-w-md mx-auto mt-[100px] lg:mt-[200px]">
			<CardHeader>
				<CardTitle>Forgot your password?</CardTitle>
				<CardDescription>
					Enter your email address and we'll send you a link to reset your
					password.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form action={forgotPasswordAction} className="grid gap-4">
					<div className="grid gap-2">
						<Label htmlFor="email">Email</Label>
						<Input id="email" type="email" name="email" placeholder="m@example.com" />
					</div>
					<Button type="submit" className="bg-green-600">
						Reset password
					</Button>
				</form>
			</CardContent>
			<CardFooter>
				<Link href="#" className="text-sm underline" prefetch={false}>
					Back to login
				</Link>
			</CardFooter>
		</Card>
	);
}
