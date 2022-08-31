import BoxHeader from "../app/BoxHeader.jsx";
import Box from "../app/Box.jsx";
import Happy from "../svgs/Happy.jsx";
import Sad from "../svgs/Sad.jsx";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment-jalaali";
import {fetchUpdateComment} from "../../stores/feed/comments.js";


function AnswerItem(props) {
    const {users} = useSelector(state => state.users)
    const dispatch = useDispatch()

    const update = (like, id) => {
        if (like) {
            dispatch(fetchUpdateComment({id , data: {...props.comment , like: props.comment.like + 1}}))
            return
        }
        dispatch(fetchUpdateComment({id , data: {...props.comment , dislike: props.comment.dislike + 1}}))

    }

    return (
        <Box>
            <BoxHeader>
                <div className="flex items-center">
                    <img src={users.find(user => +user.id === +props.comment.author_id)?.image_url} alt=""
                         className="w-[32px] h-[32px] object-cover object-top rounded-lg"/>
                    <h3 className="text-base font-bold mr-4">{props.comment.author}</h3>
                </div>
                <div className="flex text-xs text-[#777777]">
                    <div className="after:w-px after:h-full after:mx-3 after:bg-black/10 after:block flex">
                        ساعت : <span
                        className="text-[#222222] font-bold mr-1">{props.comment.created ? moment(props.comment.created).format('hh:mm') : ''}</span>
                    </div>
                    <div>
                        تاریخ : <span
                        className="text-[#222222] font-bold">{props.comment.created ? moment(props.comment.created).format('jYYYY/jM/jD') : ''}</span>
                    </div>
                    <div className="flex items-center mr-7">
                        <Happy/>
                        <span className="mr-1">{props.comment.like}</span>
                    </div>
                    <div className="flex items-center mr-7">
                        <Sad/>
                        <span className="mr-1">{props.comment.dislike}</span>
                    </div>
                </div>
            </BoxHeader>
            <div id="item-body" className="p-4">
                <p className="mb-6 text-sm">
                    سلام من میخوام یه authentication ساده تو react بسازم اما این error رو بهم میده. نمیدونم مشکل از
                    کجاست. عکس خروجی console رو هم گذاشتم که ببینید دقیقا چه مشکلی وجود داره
                </p>
                <div className="flex justify-end">
                    <div onClick={() => {
                        update(true, props.comment.id)
                    }}
                         className="rounded-md flex border-[#E4E9EC] border p-2 text-[#66CB9F] text-xs font-bold cursor-pointer">
                        <Happy/>
                        <span className="mr-2.5">پاسخ خوب بود</span>
                    </div>
                    <div onClick={() => {
                        update(false, props.comment.id)
                    }}
                         className="rounded-md flex border-[#E4E9EC] border p-2 text-[#F16063] text-xs font-bold cursor-pointer mr-4">
                        <Sad/>
                        <span className="mr-2.5">پاسخ خوب نبود</span>
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default AnswerItem;