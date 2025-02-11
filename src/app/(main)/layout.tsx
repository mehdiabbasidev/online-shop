import { Footer } from "../_components/footer";
import { Header } from "../_components/header";

export default function MainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     <>
        <Header/>
        <main className="flex-1">{children}</main>
        {/* <Footer/> */}
     </>
    );
  }