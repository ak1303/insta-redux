import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import fetchPosts from '../../redux/thunk/postThunk/fetchPostsThunk'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import fetchComments from '../../redux/thunk/postThunk/fetchCommentsThunk';
import NewCommentModal from './NewCommentModal';
import endpoints from '../../network/endpoints';
import request from '../../network/request';

const Post = ({post}) =>{
  const {commentsCount, content, imageUrls,likesCount, title} = post;
  console.log(imageUrls);
  
  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(false);
  const [showNewCommentBox, setShowNewCommentBox] = useState(false);
  console.log('isOpen',showNewCommentBox);
  const comments = useSelector(state => state.posts.comments[post._id]);
  console.log(comments);
  const onClickComment = () => {
      setShowComments(!showComments);
      if (!comments) {
          dispatch(fetchComments(post._id));
      }
  }
  const likePost= async()=>{
    console.log(post._id);
    const httpConfig = {
      url: endpoints.like,
      method: 'POST',
      params: {postId: post._id}
    }
    await request(httpConfig);
    dispatch(fetchPosts);
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
  <div id='posts'>
    <div className=' flex flex-col gap-2 p-2 border-2 border-black rounded-lg bg-[url(https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=600)]'>
      <div>
        {
         <Carousel 
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          slidesToSlide={1}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
        >
        {
          imageUrls.map(url=>(
            <div key={url} className='m-auto p-2 rounded'>
              <img src={url} alt="" className=' m-auto object-contain rounded max-h-[500px] max-w-[80%]' onError={(e)=>{e.target.parentNode.style.display='none'}}/>
            </div>
          ))
        }
        </Carousel>
        }
      </div>
      <div>
        <div className=' p-2 text-xl font-serif font-bold' >{title}</div>
        <div className=' p-2 text-md font-mono ' >{content}</div>
      </div>
      <div className=' flex gap-4 justify-end'>
          <div className=' flex gap-2 p-2'>
            <div>{likesCount}</div>
            <div onClick={likePost}><ThumbUpIcon/></div>
          </div>
          <div className=' flex gap-2 p-2'>
            <div>{commentsCount}</div>
            <div onClick={onClickComment}><CommentIcon/></div>
          </div>
          <div className=' flex gap-2 p-2'>
            <div>0</div>
            <div><ShareIcon/></div>
          </div> 
      </div>
      {
        showComments && <div className=' flex flex-col gap-1'>
            {post.commentsCount === 0 ? <h2>No comments</h2> :
                comments?.map?.(comment => {
                    return <div key={comment.timeStamp} className=' border-b'>
                        <b>{comment.user.name}</b>
                        <p>{comment.message}</p>
                    </div>
                })
            }
            <button onClick={()=>setShowNewCommentBox(true)} className=' p-1 bg-[lightgrey] rounded-lg w-fit self-end'>Add comment</button>
            {showNewCommentBox && <NewCommentModal postId={post._id} isOpen={showNewCommentBox} setIsOpen = {setShowNewCommentBox}/>}
        </div>
      }
    </div>
  </div>
  )
}

const Posts = () => {

  const {apiStatus, data} = useSelector(state=>state.posts);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchPosts);
  },[]);

  if(apiStatus === 'pending' || apiStatus === 'init'){
    return <h1 className=' text-xl'>Loading Posts...</h1>
  }
  return (
    <div className=' w-2/4 m-auto flex flex-col gap-4 mt-10'>
      {
        data.map(post=>{
          return <Post key={post._id} post={post}/>
        })
      }
    </div>
  )
}

export default Posts