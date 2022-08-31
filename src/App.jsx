import Header from "./components/app/Header.jsx";
import Questions from "./pages/Questions.jsx";
import Modal from "./components/app/Modal.jsx";
import Details from "./pages/Details.jsx";


function App() {

    return (
        <>
            <Header/>
            <div className="container mx-auto pt-8 pb-10">
                <Questions/>
                <Details />
            </div>
            <Modal />
        </>
    )
}

export default App
