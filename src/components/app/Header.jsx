import Plus from "../svgs/Plus.jsx";
import Button from "./Button.jsx";
import {useDispatch, useSelector} from "react-redux";
import DropDown from "../svgs/DropDown.jsx";
import {useLocation, useParams} from "react-router-dom";

function Header() {
    const dispatch = useDispatch()
    const {currentUser} = useSelector(state => state.users)
    const routes = useLocation()
    console.log(routes)

    const openModal = () => {
        console.log('test')
        dispatch({type: 'show' , payload: {}})
    }
    return (
        <header className="bg-white">
            <div className="container mx-auto">
                <div className="flex w-full py-4 items-center justify-between">
                    <div className="text-2xl font-extrabold text-[#222222]">{routes.pathname.includes('details') ? 'جزییات سوال' : 'لیست سوالات'}</div>
                    <div className="flex items-center">
                        <Button onClick={openModal}>
                            <Plus />
                            <span className="mr-2.5">سوال جدید</span>
                        </Button>
                        <div className="flex items-center mr-10">
                            <img src={currentUser.image_url} alt="" className="w-[44px] h-[44px] object-cover object-top rounded-full"/>
                            <span className="mr-3 text-sm text-[#454545] ml-5">{currentUser.name}</span>
                            <DropDown />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header