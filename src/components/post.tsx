import React, {useEffect, useState} from 'react';
import TimeAgo from "javascript-time-ago";
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

function Post({post}:any) {
    const [thePost,setPost] = useState(post)

    useEffect(()=>{
        fetch(`https://www.tedooo.com/?itemId=${thePost.id}`)
    },[])
    return (
        <div className={"bg-white w-3/4  shadow flex flex-col space-y-4 rounded"}>
            <div className={"flex flex-row space-x-2 p-4 pb-0 cursor-pointer"}>
                <img src={thePost.avatar} className={" w-12 h-12 object-cover rounded-full"} />
                <div className={"flex flex-col"}>
                    <span className={"font-bold"}>{thePost.shopName}</span>
                    <span className={"text-blue-500  font-bold"}>{thePost.username} <span className={"text-gray-400"}>• {timeAgo.format(new Date(thePost.date),'mini')}</span></span>

                </div>

            </div>
            <div className={"p-4 py-0"}>{thePost.text}</div>
            <div className={"flex flex-row justify-around bg-gray-200"}>{thePost.images.slice(0,2).map((image:string,index)=><img className={"h-96 w-1/2 object-cover " + (index%2===0?'pr-1':'pl-1')} src={image}/>)}</div>
            <div className={"flex flex-row justify-between text-gray-400 px-4 text-xs"}>
                <span className={"flex flex-row space-x-2"}>
                     <img src={"like.svg" } />
                    <span className={"flex flex-row w-full"}>{thePost.likes} Likes</span>
                </span>
                <span>
                     {thePost.comments} Comments
                </span>
            </div>
            <hr className={"mx-8"}/>
            <div className={"px-4 pb-4 flex flex-row justify-around"}>
                <div className={"flex flex-row space-x-2 items-center hover:cursor-pointer"} onClick={()=>{
                    setPost({...thePost,likes:thePost.likes+(thePost.didLike?-1:1),didLike:!thePost.didLike})
                }}>
                    {/*Ideally I would change the stroke of the icons, this is a quick hack */}
                    {thePost.didLike?
                        <img  src={"like-icon.svg"}/>
                        :<img  src={"like-icon-unliked.svg"}/>}
                    <span className={thePost.didLike?"text-ocean":""}>Like</span>
                </div>
                <div className={"flex flex-row space-x-2 items-center hover:cursor-pointer"}>
                    <img src={"comment-icon.svg" } />
                    <span>Comment</span>
                </div>


            </div>
        </div>
    );
}

export default Post;