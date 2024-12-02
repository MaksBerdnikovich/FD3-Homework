import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Main = () => {
    return (
        <main className="Main">
            <Header />

            <Outlet />

            <Footer />
        </main>
    );
}

export default Main