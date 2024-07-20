import Link from "next/link";

export default function ErrorPage() {
return (
	<div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
		<div className="max-w-md mx-auto text-center">
			<div className="w-12 h-12 mx-auto text-primary" />
			<h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
				Oops, something went wrong!
			</h1>
			<p className="mt-4 text-muted-foreground">
				We're sorry, but an unexpected error has occurred. Please try again
				later or contact support if the issue persists.
			</p>
			<div className="mt-6">
				<Link
					href="/"
					className="inline-flex items-center px-4 py-2 text-sm font-medium transition-colors rounded-md shadow-sm bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
					prefetch={false}
				>
					Go to Homepage
				</Link>
			</div>
		</div>
	</div>
);

}
