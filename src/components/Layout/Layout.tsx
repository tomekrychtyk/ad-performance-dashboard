interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    <main>{children}</main>
                </div>
            </div>
            <footer className="bg-gray-100 p-4 text-center text-sm text-gray-500">
                &copy; 2025 AdDash. All rights reserved. For support, contact the
                <a href="mailto:example@example.com" className="ml-1 underline">
                    Administrator
                </a>
            </footer>
        </>
    );
};
