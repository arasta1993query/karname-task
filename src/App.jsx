import Header from "./components/app/Header.jsx";
import Questions from "./pages/Questions.jsx";


function App() {

    return (
        <>
            <Header/>
            <div className="container mx-auto pt-8">
                <Questions/>
            </div>
        </>
    )
}

export default App
