import Header from "./components/app/Header.jsx";
import Questions from "./pages/Questions.jsx";
import Modal from "./components/app/Modal.jsx";
import Details from "./pages/Details.jsx";
import {
    Routes,
    Route,
} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchUserById} from "./stores/feed/users.js";


function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserById(1))
    })

    return (
        <>
            <Header/>
            <div className="container mx-auto pt-8 pb-10">
                <Routes>
                    <Route path="/" element={<Questions/>} />
                    <Route path="/details/:postId"  element={<Details />} />
                </Routes>
            </div>
            <Modal />
        </>
    )
}

export default App
