import AnswerItem from "../components/feed/AnswerItem.jsx";
import Button from "../components/app/Button.jsx";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPostById, fetchUpdatePost} from "../stores/feed/posts.js";
import {useParams} from "react-router-dom";
import {fetchComments, fetchCreateComment} from "../stores/feed/comments.js";
import Item from "../components/feed/Item.jsx";
import {data} from "autoprefixer";


function Details() {

    const dispatch = useDispatch()
    const postId = parseInt(useParams().postId)
    const {currentPost} = useSelector(state => state.posts)
    const {currentUser} = useSelector(state => state.users)
    const {comments} = useSelector(state => state.comments)

    const [body, setBody] = useState()

    useEffect(() => {
        console.log(body)
    }, [body])

    let debounce = true;


    useEffect(() => {
        dispatch(fetchPostById(postId))
        dispatch(fetchComments({postId}))

    }, [])

    const handleBody = (e) => {
        if (debounce) {
            setTimeout(() => {
                setBody(e.target.value)
                debounce = false;
            }, 1000)
            return
        }
        debounce = true;
    }

    const addComment = () => {
        const data = {
            body,
            postId,
            author: currentUser.name,
            author_id: currentUser.id,
            like: 0,
            dislike: 0,
            created: Date.now()
        }
        dispatch(fetchCreateComment(data))
        dispatch(fetchUpdatePost({id: postId, data: {...currentPost, comments: currentPost.comments + 1}}))
    }

    return (
        <>
            <Item post={currentPost} detail/>

            <div className="text-2xl font-extrabold mt-6 mb-4">پاسخ ها</div>
            {
                comments.map(comment => {
                    return <AnswerItem comment={comment} key={comment.id}/>
                })
            }

            <div className="text-2xl font-extrabold mt-6 mb-4">پاسخ خود را ثبت کنید</div>
            <div className="text-xs font-bold mt-6 mb-2.5">پاسخ خود را بنویسید</div>
            <textarea onInput={handleBody} placeholder="متن پاسخ ..."
                      className="bg-white text-sm border border-[#EEEEEE] rounded-md w-full h-[160px] px-4 py-3"></textarea>
            <span className="block text-[10px] text-[#F16063] pr-6 mb-6">محل قرارگیری متن راهنمای خطا</span>
            <Button width={200} onClick={addComment}>
                ارسال پاسخ
            </Button>
        </>
    )
}

export default Details