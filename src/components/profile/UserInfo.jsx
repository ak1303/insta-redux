import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import NewPostModal from './NewPostModal';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const UserInfo = ({user}) => {
 const [isModalOpen, setIsModalOpen] = useState(false);
 console.log(user);
 const handleModal = () => {
  setIsModalOpen(!isModalOpen);
 }
  return (
    <div className='flex flex-col text-center border-2 border-black w-2/4 m-auto p-5 rounded-lg min-w-[fit-content]'>
        <div className='flex p-2  justify-around'>
            <div className='border-2 border-black rounded-full p-2'>
                <AddIcon fontSize='large' onClick={handleModal}/>
            </div>
             {isModalOpen && <NewPostModal setIsModalOpen={setIsModalOpen} open={isModalOpen}/>}
            <div>
                <div>{user.followers}</div>
                <Link to="/connections/followers"><Button className='rounded'>Followers</Button></Link>
            </div>
            <div>
                <div>{user.following}</div>
                <Link to="/connections/following"><Button className='rounded'>Following</Button></Link>
            </div>
            <div>
                <div>{user.posts}</div>
                <Link to="#posts"><Button className='rounded'>Posts</Button></Link>
            </div>
        </div>
        <div className='text-start'>
            <div>{user.gender.toLowerCase()==='male' ? 'He/Him' : 'She/Her'}</div>
            <div>{user.name}</div>
            <div>{user.email}</div>
        </div>
        <div>
        <Link to="/connections/followers"><Button className='rounded'>See More</Button></Link>
        </div>
    </div>
  )
}

export default UserInfo;