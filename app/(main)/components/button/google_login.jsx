import { useState } from "react";
import { auth, provider, signInWithPopup } from "@/lib/firebase/config"; // Adjust path accordingly
import { redirect } from "next/navigation";

const GoogleButtonLogin = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleGoogleLogin = async () => {
        setLoading(true);
        try {
            await signInWithPopup(auth, provider);
            console.log("Google sign-in successful");
            redirect("/home");
        } catch (error) {
            console.error("Google sign-in error:", error);
            alert("Failed to sign in with Google.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            className="w-full py-2 mb-3 border flex items-center justify-center gap-2 rounded-md hover:bg-gray-100 hover:cursor-pointer"
            onClick={handleGoogleLogin}
            disabled={loading}
        >
            <img src="/google.svg" alt="Google" className="w-5 h-5" />
            {loading ? "Signing in..." : "Continue with Google"}
        </button>
    );

}


export default GoogleButtonLogin;