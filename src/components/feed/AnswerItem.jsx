import Comment from "../svgs/Comment.jsx";
import BoxHeader from "../app/BoxHeader.jsx";
import Box from "../app/Box.jsx";
import Button from "../app/Button.jsx";
import Happy from "../svgs/Happy.jsx";
import Sad from "../svgs/Sad.jsx";


function AnswerItem() {
    return (
        <Box>
            <BoxHeader>
                <div className="flex items-center">
                    <img src="" alt="" className="w-[32px] h-[32px] rounded-lg"/>
                    <h3 className="text-base font-bold mr-4">مشکل در Auth در React</h3>
                </div>
                <div className="flex text-xs text-[#777777]">
                    <div className="after:w-px after:h-full after:mx-3 after:bg-black/10 after:block flex">
                        ساعت : <span className="text-[#222222] font-bold mr-1">۱۶:۴۸</span>
                    </div>
                    <div>
                        تاریخ : <span className="text-[#222222] font-bold">۱۴۰۰/۲/۱۵</span>
                    </div>
                    <div className="flex items-center mr-7">
                        <Happy />
                        <span className="mr-1">20</span>
                    </div>
                    <div className="flex items-center mr-7">
                        <Sad />
                        <span className="mr-1">20</span>
                    </div>
                </div>
            </BoxHeader>
            <div id="item-body" className="p-4">
                <p className="mb-6 text-sm">
                    سلام من میخوام یه authentication ساده تو react بسازم اما این error رو بهم میده. نمیدونم مشکل از کجاست. عکس خروجی console رو هم گذاشتم که ببینید دقیقا چه مشکلی وجود داره
                </p>
                <div className="flex justify-end">
                    <div className="rounded-md flex border-[#E4E9EC] border p-2 text-[#66CB9F] text-xs font-bold cursor-pointer">
                        <Happy />
                        <span className="mr-2.5">پاسخ خوب بود</span>
                    </div>
                    <div className="rounded-md flex border-[#E4E9EC] border p-2 text-[#F16063] text-xs font-bold cursor-pointer mr-4">
                        <Sad />
                        <span className="mr-2.5">پاسخ خوب نبود</span>
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default AnswerItem;