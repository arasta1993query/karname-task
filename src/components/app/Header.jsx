import Plus from "../svgs/Plus.jsx";
import Button from "./Button.jsx";
import {useDispatch} from "react-redux";

function Header() {
    const dispatch = useDispatch()

    const openModal = () => {
        console.log('test')
        dispatch({type: 'show' , payload: {}})
    }
    return (
        <header className="bg-white">
            <div className="container mx-auto">
                <div className="flex w-full py-4 items-center justify-between">
                    <div className="text-2xl font-extrabold text-[#222222]">لیست سوالات</div>
                    <div className="flex items-center">
                        <Button onClick={openModal}>
                            <Plus />
                            <span className="mr-2.5">سوال جدید</span>
                        </Button>
                        <div className="flex items-center mr-10">
                            <img src="src/components/app/Header.jsx" alt="" className="w-[44px] h-[44px] rounded-full"/>
                            <span className="mr-3 text-sm text-[#454545]">الناز شاکردوست</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header