import Compose from './component/Compose';
import EmailList from './component/EmailList';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './redux/mailSlice';
import EmailDetail from './component/EmailDetail';
import {
  Switch,
  Route,
} from 'react-router-dom'
import Login from './component/Login';
import { selectUser, signin, signout } from './redux/userSlice';
import { useEffect } from 'react';
import {auth} from './firebase'
import Sent from './component/Sent'

function App() {
const dispatch = useDispatch()



  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
          dispatch(signin({
            displayName:user.displayName,
            photoURL:user.photoURL,
            email:user.email
          }))
      } else {
        dispatch(signout())
      }
    })
  },[dispatch])

  const isMessageOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)

  if(!user){
    return <Login/>
  }

  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <EmailList />
          </Route>
          <Route exact path="/mail">
            <EmailDetail />
          </Route>
          <Route exact path="/sent">
            <Sent />
          </Route>
        </Switch>
        {isMessageOpen && <Compose />}
      </div>
    </div>
  );
}


export default App;
