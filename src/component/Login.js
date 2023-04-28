import React from 'react'
import './Login.css'
import { auth, provider } from '../firebase'
import { useDispatch } from 'react-redux'
import { signin } from '../redux/userSlice'

const Login = () => {
  const dispatch = useDispatch()
  const login=()=>{
    auth.signInWithPopup(provider).then(({user})=>{
      dispatch(signin({
        displayName:user.displayName,
        photoURL:user.photoURL,
        email:user.email
      }))
    }).catch(error=>{
      alert(error)
    })
  }
  return (
    <div className='loginwrapper'>
      <div className='login'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRceIIBz4GgeNszaN5SupI6p1SJE_Bzgk3Q&usqp=CAU' alt='logo'/>
        <button className='gmail__login' onClick={login}>Login with gmail</button>
      </div>
    </div>
  )
}

export default Login
