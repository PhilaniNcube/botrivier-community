import Link from "next/link";
import { Button } from "./ui/button";


export default function ComingSoon() {

  return (
			<div>
				<div className="px-4 2xl:container 2xl:mx-auto sm:py-16 lg:px-20 py-36 ">
					<div className="relative grid py-40 place-items-center md:py-60 lg:py-40">
						<div className="relative z-10">
							<div className="flex flex-col items-center justify-center w-full h-full px-6 text-white sm:px-12">
								<h1 className="text-4xl font-bold text-center text-gray-800 md:text-6xl">
									This Page Is Under Construction
								</h1>
								<p className="pt-2 text-center text-gray-800 text-md sm:pt-4">
									This page is currently being rebuilt. Please check back later.
								</p>
								<Link href="/">
									<Button
										type="button"
										className="w-full px-4 py-5 mt-2 leading-none text-center text-white bg-green-700 rounded-md  sm:w-3/4 lg:w-auto sm:mt-4 text-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-opacity-50 md:px-16"
									>
										Return Home
									</Button>
								</Link>
							</div>
						</div>
						<div className="absolute">
							<img
								alt="Under Construction"
								className="hidden lg:block"
								src="https://i.ibb.co/LJKtdSz/Group-3.png"
							/>
							<img
								alt="Under Construction"
								className="hidden sm:block lg:hidden"
								src="https://i.ibb.co/zVQpwQM/Group-3-1.png"
							/>
							<img
								alt="Under Construction"
								className="sm:hidden"
								src="https://i.ibb.co/7XDwz1k/Group-3.png"
							/>
						</div>
					</div>
				</div>
			</div>
		);
}
