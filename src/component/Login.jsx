import { Link } from "react-router"

export default function Home() {
    function submit() {}
    return (
        <div className="flex justify-center items-center h-screen m-2">
            <div className="text-neutral-100 max-w-screen-sm w-full p-8 rounded-lg border border-neutral-800 bg-neutral-950">
                <div className="text-center">
                    <h1 className="text-3xl mb-3">Welcome Back</h1>
                    <h1 className="text-neutral-400">Sign in to continue</h1>
                </div>
                <form onSubmit={submit} className="flex flex-col gap-3 mt-7">
                    <div>
                        <h1 className="mb-1">Email</h1>
                        <input
                            placeholder="Enter Your Email"
                            className="w-full bg-[#171717] rounded p-2 border border-neutral-800"
                        />
                    </div>
                    <div>
                        <h1 className="mb-1">Password</h1>
                        <input
                            placeholder="Enter Your Password"
                            className="w-full bg-[#171717] rounded p-2 border border-neutral-800"
                        />
                    </div>
                    <button className="w-full bg-red-600 rounded p-2 mt-2">
                        Sign In
                    </button>
                    <h1 className="text-center text-neutral-400">
                        Don't have an account?{" "}
                        <Link className="text-red-600" to="/register">
                            Sign Up
                        </Link>
                    </h1>
                </form>
            </div>
        </div>
    )
}
