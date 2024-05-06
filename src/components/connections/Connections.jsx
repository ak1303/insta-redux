import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate, useParams } from 'react-router-dom';
import FollowersList from './FollowersList'
import FollowingList from './FollowingList'
import SuggestionsList from './SuggestionsList'
import { useEffect, useState } from 'react';

const tabs = ['followers', 'following', 'suggestions'];

const Connections = () =>{
  const navigate = useNavigate();
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const { tabId } = useParams();
  useEffect(()=>{
    if(tabId === 'followers')
     setCurrentTabIndex(0);
    else if(tabId === 'following'){
      setCurrentTabIndex(1);
    }else{
      setCurrentTabIndex(2);
    }
  },[tabId])

  const handleTabChange = (e, tabIndex) => {
    console.log(tabIndex);
    if(tabIndex === 3){
      navigate('/');
      return;
    }
    setCurrentTabIndex(tabIndex);
    navigate(`/connections/${tabs[tabIndex]}`);
  };
  return (
    <>
      <Tabs value={currentTabIndex} onChange={handleTabChange}>
        <Tab label='Followers' />
        <Tab label='Following' />
        <Tab label='Suggestions' />
        <Tab label='Profile' />
      </Tabs>
      {currentTabIndex === 0 &&<FollowersList/> }
      {currentTabIndex === 1 &&<FollowingList/> }
      {currentTabIndex === 2 &&<SuggestionsList/>}

    </>
  )
}
export default Connections


