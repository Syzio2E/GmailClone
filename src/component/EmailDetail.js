import React from 'react'
import './emailList.css'
import { Avatar, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import LaunchIcon from '@mui/icons-material/Launch';
import StarIcon from '@mui/icons-material/Star';
import ReplyIcon from '@mui/icons-material/Reply';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import { selectedMail } from '../redux/mailSlice';



const EmailDetail = () => {
    const history = useHistory()
    const mail = useSelector(selectedMail)
  return (
    
    <div className='emaildetail'>
    <div className='emaillist__settings'>
      <div className='emaillist__settingsLeft'>
        <IconButton>
            <ArrowBackIcon onClick={()=>history.push('/')}/>
        </IconButton>
        <IconButton><ArrowDropDownIcon/></IconButton>
        <IconButton><RefreshIcon/> </IconButton>
        <IconButton><MoreVertIcon/></IconButton>
      </div>
      
      <div className='emaillist__settingsRight'>
        <p>1-50 of 10,222</p>
        <IconButton><ChevronLeftIcon/></IconButton>
        <IconButton><ChevronRightIcon/></IconButton>
      </div>
    </div>
    <div className='emaildetail__message'>
        <div className='emaildetail__header'>
            <div className='emaildetail__headerLeft'>
            <h4>{mail?.subject}</h4>
            <IconButton>
                <LabelImportantIcon/>
            </IconButton>
            </div>
            <div className='emaildetail__headerRight'>
            <IconButton>
                <LocalPrintshopIcon/>
            </IconButton>
            <IconButton>
                <LaunchIcon/>
            </IconButton>
            </div>
        </div>
        <div className='emaildetail__middleheader'>
        <div className='emaildetail__middleheaderLeft'>
        <IconButton>
            <Avatar/>
        </IconButton>
        <h4>{mail?.name}</h4>
        <p>{mail?.email}</p>
        </div>
        <div className='emaildetail__middleheaderRight'>
            <p>{mail?.time}</p>
        <IconButton>
            <StarIcon/>
        </IconButton>
        <IconButton>
            <ReplyIcon/>
        </IconButton>
        <IconButton>
            <MoreVertIcon/>
        </IconButton>
        </div>
    </div>
        <div className='emaildetail__body'>
            <p>{mail?.message}</p>
        </div>
    </div>
    </div>
  )
}

export default EmailDetail
