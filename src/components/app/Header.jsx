import Plus from "../svgs/Plus.jsx";

function Header() {
    return (
        <header className="bg-white">
            <div className="container mx-auto">
                <div className="flex w-full py-4 items-center justify-between">
                    <div className="text-2xl font-extrabold text-[#222222]">لیست سوالات</div>
                    <div className="flex items-center">
                        <div className="flex items-center justify-center text-xs text-white bg-[#27AE60] py-2 px-5 rounded-md">
                            <Plus />
                            <span className="mr-2.5">سوال جدید</span>
                        </div>
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