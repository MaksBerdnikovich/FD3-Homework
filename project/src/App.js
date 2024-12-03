import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./layouts/Home";
import Watchlist from "./layouts/Watchlist";
import Favorite from "./layouts/Favorite";
import NotFound from "./layouts/NotFound";
import Movie from "./layouts/Movie";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main />}>
                        <Route index element={<Home />} />
                        <Route path="/:slug" element={<Movie />} />
                        <Route path="watchlist" element={<Watchlist />} />
                        <Route path="favorite" element={<Favorite />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
