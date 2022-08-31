import DetailItem from "../components/feed/DetailItem.jsx";
import AnswerItem from "../components/feed/AnswerItem.jsx";
import Button from "../components/app/Button.jsx";


function Details(){
    return (
        <>
            <DetailItem />
            <div className="text-2xl font-extrabold mt-6 mb-4">پاسخ ها</div>
            <AnswerItem />
            <div className="text-2xl font-extrabold mt-6 mb-4">پاسخ خود را ثبت کنید</div>
            <div className="text-xs font-bold mt-6 mb-2.5">پاسخ خود را بنویسید</div>
            <textarea name="" id="" placeholder="متن پاسخ ..." className="bg-white text-sm border border-[#EEEEEE] rounded-md w-full h-[160px] px-4 py-3"></textarea>
            <span className="block text-[10px] text-[#F16063] pr-6 mb-6">محل قرارگیری متن راهنمای خطا</span>
            <Button width={200}>
                ارسال پاسخ
            </Button>
        </>
    )
}

export default Details