"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotAllowed() {
    const router = useRouter();

    useEffect(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        if (width >= 1280 || height >= 720) {
            router.push('/');
        }
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
            <div className="max-w-md bg-white p-8 rounded-2xl shadow-xl">
                <h1 className="text-4xl font-bold text-red-600 mb-4">Device Not Supported</h1>
                <p className="text-gray-700 mb-6">
                    Your screen resolution is too low to access this page.
                </p>
                <p className="text-gray-500 text-sm">
                    Please use a device with a screen resolution of at least 1280×720.
                </p>
            </div>
        </div>
    );
}
