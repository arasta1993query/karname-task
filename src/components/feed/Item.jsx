import Comment from "../svgs/Comment.jsx";
import BoxHeader from "../app/BoxHeader.jsx";
import Box from "../app/Box.jsx";
import Button from "../app/Button.jsx";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import moment from "moment-jalaali";


function Item(props) {
    const {users} = useSelector(state => state.users)
    return (
        <Box>
            <BoxHeader>
                <div className="flex items-center">
                    <img src={users.find(user => user.id === props.post.author_id)?.image_url} alt="" className="w-[32px] h-[32px] object-cover rounded-lg"/>
                    <h3 className="text-base font-bold mr-4">{props.post.title}</h3>
                </div>
                <div className="flex text-xs text-[#777777]">
                    <div className="after:w-px after:h-full after:mx-3 after:bg-black/10 after:block flex">
                        ساعت : <span className="text-[#222222] font-bold mr-1">{ props.post.created ? moment( props.post.created).format('hh:mm') : ''}</span>
                    </div>
                    <div>
                        تاریخ : <span className="text-[#222222] font-bold">{ props.post.created ? moment( props.post.created).format('jYYYY/jM/jD') : ''}</span>
                    </div>
                    <div className="flex items-center mr-7">
                        <Comment />
                        <span className="mr-1">{props.post.comments}</span>
                    </div>
                </div>
            </BoxHeader>
            <div id="item-body" className="p-4">
                <p className="mb-6 text-sm">{props.post.body}</p>
                <div className="flex justify-end">
                    <Link to={'details/' + props.post.id}>
                        <Button link>
                            مشاهده جزییات
                        </Button>
                    </Link>
                </div>
            </div>
        </Box>
    )
}

export default Item;