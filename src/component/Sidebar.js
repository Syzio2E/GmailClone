import React from 'react'
import './sidebar.css'
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SidebarOptions from './SidebarOptions';
import InboxIcon from '@mui/icons-material/Inbox';
import StarRateIcon from '@mui/icons-material/StarRate';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import LabelIcon from '@mui/icons-material/Label';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../redux/mailSlice';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Sidebar = () => {
const dispatch = useDispatch()


  return (
    <div className='sidebar'>
      <Button startIcon={<AddIcon/>} className='compose__btn' onClick={()=>dispatch(openSendMessage())}>Compose</Button>
      <Link to='/'><SidebarOptions Icon={InboxIcon} title='inbox' number='54' isActive={true}/></Link>
      <SidebarOptions Icon={StarRateIcon} title={'Snoozed'} number={'54'}/>
      <SidebarOptions Icon={WatchLaterIcon} title={'Important'} number={'54'}/>
      <Link to='/sent'><SidebarOptions Icon={LabelImportantIcon} title={'Sent'} number={'54'}/></Link>
      <SidebarOptions Icon={SendIcon} title={'Starred'} number={'54'}/>
      <SidebarOptions Icon={DraftsIcon} title={'Drafts'} number={'54'}/>
      <SidebarOptions Icon={LabelIcon} title={'Category'} number={'54'}/>
      <SidebarOptions Icon={DeleteOutlineIcon} title={'spam'} number={'54'}/>
      <SidebarOptions Icon={FindInPageIcon} title={'Documents'} number={'54'}/>
      <SidebarOptions Icon={ExpandMoreIcon} title={'More'} number={'54'}/>
    <hr/>
    <h3 className='sidebarOptions__heading'>
      Meet
    </h3>
    <SidebarOptions Icon={VideocamIcon} title={'New Meeting'} />
    <SidebarOptions Icon={KeyboardIcon} title={'Join a Meeting'} />
    </div>
  )
}

export default Sidebar
