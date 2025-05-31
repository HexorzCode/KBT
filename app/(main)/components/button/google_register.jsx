"use client";

import { auth, provider, signInWithPopup } from "../../../service/firebase/config"; // Adjust path if needed


const GoogleRegisButton = () => {

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("Google Sign-In successful:", user);
            // You can handle the user data here, e.g., save to your database
        } catch (error) {
            console.error("Error during Google Sign-In:", error);
            // Handle errors here, e.g., show a notification
        }
    }

    return (
        <button className="w-full py-2 mb-3 border flex items-center hover:cursor-pointer justify-center gap-2 rounded-md hover:bg-gray-100"
            onClick={handleGoogleSignIn}>
            <img src="/google.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
        </button>
    );
}

export default GoogleRegisButton;