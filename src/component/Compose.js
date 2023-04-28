import React, { useState } from 'react'
import './compose.css'
import RemoveIcon from '@mui/icons-material/Remove';
import HeightIcon from '@mui/icons-material/Height';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch, useSelector } from 'react-redux';
import { closeSendMessage } from '../redux/mailSlice';
import { selectUser } from '../redux/userSlice';



const Compose = () => {

  const [to,setTo] = useState('')
  const [subject,setSubject] = useState('')
  const [message,setMessage] = useState('')
  const user = useSelector(selectUser)

  const formSubmit=(e)=>{
    e.preventDefault()
    fetch('https://auth-f188c-default-rtdb.firebaseio.com/email.json',{
      method: 'POST',
      body:JSON.stringify({
        from:user.email,
        fromName:user.displayName,
        to,
        subject,
        message,
        timestamp:new Date().toLocaleTimeString()
      }),
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then((res)=>{
      if(res.ok){
        alert('email sent')
        console.log(res.data)
      } else {
        console.log('error')
      }
    })
    .then((data)=>{
      if(data && data.error){
        console.log(data.error)
      }
    })
    setTo('')
    setMessage('')
    setSubject('')
    dispatch(closeSendMessage())
  }

  const dispatch = useDispatch()
  return (
    <div className='compose'>
      <div className='compose__header'>
        <div className='compose__header__left'>
            <span>New Message</span>
        </div>
        <div className='compose__header__right'>
            <RemoveIcon/>
            <HeightIcon/>
            <CloseIcon onClick={()=>dispatch(closeSendMessage())}/>
        </div>
      </div>
      <form onSubmit={formSubmit}>
      <div className='compose__body'>
        <div className='compose__bodyForm'>
            <input type='email' placeholder='Recipents' value={to} onChange={(e)=>setTo(e.target.value)} required/>
            <input type='text' placeholder='subject' value={subject} onChange={(e)=>setSubject(e.target.value)} required/>
            <textarea rows='20' name='message' onChange={(e)=>setMessage(e.target.value)} required>{message}</textarea>
        </div>
      </div>
      <div className='compose__footer'>
        <div className='compose__footerLeft'>
            <button type='submit'>Send <ArrowDropDownIcon/></button>
        </div>
        <div className='compose__footerRight'>
            <FormatColorTextIcon/>
            <AttachFileIcon/>
            <InsertEmoticonIcon/>
            <InsertLinkIcon/>
            <AddPhotoAlternateIcon/>
            <MoreVertIcon/>
            <DeleteOutlineIcon/>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Compose
