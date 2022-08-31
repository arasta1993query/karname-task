import AnswerItem from "../components/feed/AnswerItem.jsx";
import Button from "../components/app/Button.jsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPostById} from "../stores/feed/posts.js";
import {useParams} from "react-router-dom";
import {fetchComments} from "../stores/feed/comments.js";
import Item from "../components/feed/Item.jsx";


function Details(){

    const dispatch = useDispatch()
    const postId = parseInt(useParams().postId)
    const {currentPost} = useSelector(state => state.posts)
    const {comments} = useSelector(state => state.comments)


    useEffect(() => {
        dispatch(fetchPostById(postId))
        dispatch(fetchComments({postId}))

    } , [])

    return (
        <>
            <Item post={currentPost} detail />

            <div className="text-2xl font-extrabold mt-6 mb-4">پاسخ ها</div>
            {
                comments.map(comment => {
                    return <AnswerItem comment={comment} key={comment.id} />
                })
            }

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