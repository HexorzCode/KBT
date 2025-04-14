export const metadata = {
    title: "Login",
    description: "Login page",
};

export default function LoginLayout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
