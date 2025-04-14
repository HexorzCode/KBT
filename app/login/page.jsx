export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="p-8 shadow-md rounded-md w-full max-w-sm bg-white">
                <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
                {/* Form login di sini */}
                <form>
                    <input
                        type="text"
                        placeholder="Username"
                        className="input input-bordered w-full mb-4"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered w-full mb-4"
                    />
                    <button className="btn btn-primary w-full">Login</button>
                </form>
            </div>
        </div>
    );
}
