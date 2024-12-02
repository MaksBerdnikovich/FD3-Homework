import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import "./Main.scss";

const Main = () => {
    return (
        <main className="Main">
            <Header />

            <section className="Wrapper">
                <Outlet />
            </section>

            <Footer />
        </main>
    );
}

export default Main