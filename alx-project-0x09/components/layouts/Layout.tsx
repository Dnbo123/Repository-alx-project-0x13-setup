import { ReactComponentProps } from "@/interfaces";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<ReactComponentProps> = ({ children }) => {
    if (children === null || children === undefined) {
        throw new Error("Layout component must have children");
    }

    return (
        <>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    )
}

export default Layout
