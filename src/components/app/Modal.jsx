import Box from "./Box.jsx";
import BoxHeader from "./BoxHeader.jsx";
import Button from "./Button.jsx";
import Close from "../svgs/Close.jsx";
import {useDispatch, useSelector} from "react-redux";

function Modal() {
    const dispatch = useDispatch()
    const {data , show} = useSelector(state => {
        return state.modal
    })

    const closeModal = (e) => {
        dispatch({type: 'hide'})
        e.stopPropagation()
    }
    return (
        <>
            {
                show && data &&
                <>
                    <div onClick={closeModal} className="w-screen h-screen bg-black/40 fixed top-0 left-0"></div>
                    <div className="fixed w-1/2 top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
                        <Box>
                            <BoxHeader>
                                <h3 className="text-base font-bold">ایجاد سوال جدید</h3>
                                <div onClick={closeModal} className="cursor-pointer">
                                    <Close />
                                </div>
                            </BoxHeader>
                            <div className="pt-4 pb-6 px-5">
                                <label className="mb-3.5 block">
                                    <span className="block text-[#454545] text-xs mb-2.5">موضوع</span>
                                    <input type="text" placeholder="مشکل در اجرای کد" className="bg-white w-full border border-[#EEEEEE] rounded-md px-4 py-3 text-sm"/>
                                </label>
                                <label className="mb-3.5 block">
                                    <span className="block text-[#454545] text-xs mb-2.5">موضوع</span>
                                    <textarea type="text" placeholder="مشکل در اجرای کد" className="bg-white w-full border border-[#EEEEEE] rounded-md px-4 py-3 text-sm h-[164px]"/>
                                </label>
                                <div className="flex justify-end items-center">
                                    <div onClick={closeModal} className="ml-12 cursor-pointer text-xs text-[#27AE60] font-bold">
                                        انصراف
                                    </div>
                                    <Button>ایجاد سوال</Button>
                                </div>
                            </div>
                        </Box>
                    </div>
                </>
            }
        </>
    )
}

export default Modal