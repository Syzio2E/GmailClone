import React, { useEffect, useState } from 'react'
import './emailList.css'
import EmailListSetting from './EmailListSetting'
import EmailType from './EmailType'
import EmailBody from './EmailBody'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'


const EmailList = () => {
  const [emails,setEmails] = useState([])
  const user = useSelector(selectUser)


  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch('https://auth-f188c-default-rtdb.firebaseio.com/email.json')
        .then(response => response.json())
        .then(data => {
          const emails = Object.values(data).filter(email => email.to !== user.email);
          setEmails(emails);      
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
    }, 1000);
  
    return () => clearInterval(intervalId);
  }, [user.email]);

  return (
    <div className='emaillist'>
      <EmailListSetting/>
      <EmailType/>
      {emails.map(email => (
        <EmailBody
          key={email.id}
          name={email.fromName}
          subject={email.subject}
          message={email.message}
          time={email.timestamp}
          email={email.to}  
        />
      ))}
    </div>
  )
}

export default EmailList
