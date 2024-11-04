
export default function MainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     <>
        <header className="h-24 bg-gray-shop-e4 flex justify-center items-center">Header</header>
        <main className="flex-1">{children}</main>
        <footer className="h-24 bg-gray-shop-e4 flex justify-center items-center">Footer</footer>
     </>
    );
  }