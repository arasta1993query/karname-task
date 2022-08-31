import Item from "../components/feed/Item.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchPosts} from "../stores/feed/posts.js";
import {fetchUsers} from "../stores/feed/users";


function Questions() {
    const {posts} = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
        dispatch(fetchUsers())
    },[])
    return (
        <div>
            {
                posts.map(post => {
                    return (
                        <Item post={post} key={post.id}/>
                    )
                })
            }
            {
                console.log(posts,'1')
            }

        </div>
    )
}

export default Questions