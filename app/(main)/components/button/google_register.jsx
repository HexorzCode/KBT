"use client";

import { auth, provider, signInWithPopup, db } from "@/lib/firebase/config";
import { setDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";


const GoogleRegisButton = () => {

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log(`Signed in with Google: ${user.displayName} (${user.email}) - UID: ${user.uid}`);
            
            // You can handle the user data here, e.g., save to your database
            const userref = doc(db, "users", user.uid);
            await setDoc(userref, {username: user.displayName, email: user.email, seller: false});
            console.log("User data saved to Firestore:", user.displayName);
        } catch (error) {
            console.error("Error during Google Sign-In:", error);
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