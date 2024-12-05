import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./layouts/Main/Main";
import Home from "./layouts/Pages/Home";
import Watchlist from "./layouts/Pages/Watchlist";
import Favorite from "./layouts/Pages/Favorite";
import NotFound from "./layouts/Pages/NotFound";
import Movie from "./layouts/Pages/Movie";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main />}>
                        <Route index element={<Home />} />
                        <Route path=":pageNumber" element={<Home />} />
                        <Route path="title/:slug" element={<Movie />} />
                        <Route path="watchlist" element={<Watchlist />} />
                        <Route path="favorite" element={<Favorite />} />
                        <Route path="404Page" element={<NotFound />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
