import React from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelIcon from '@mui/icons-material/Label';
import './emailList.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';
import { openMessage } from '../redux/mailSlice';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';


const EmailBody = ({name,email,subject,message,time,onDelete}) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const setMail=()=>{
    dispatch(openMessage({
      name,
      subject,
      email,
      message,
      time
    }))
    history.push('/mail')
  }

  
  return (
    <div className='emailbody' onClick={setMail}>
      <div className='emailbody__left'>
        <CheckBoxOutlineBlankIcon/>
        <StarBorderIcon/>
        <LabelIcon/>
        <h4>{name}</h4>
      </div>  
      <div className='emailbody__middle'>
        <div className='emailbody__middle__message'>
            <p><b>{subject}</b>  - {message}</p>
        </div>
      </div>
      <div className='emailbody__right'>
        <p>{time}</p>
      </div>
      <IconButton onClick={onDelete}>
          <DeleteOutlineIcon />
        </IconButton>
    </div>
  )
}

export default EmailBody
