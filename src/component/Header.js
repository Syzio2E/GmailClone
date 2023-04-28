import React from "react";
import './header.css'
import ReorderIcon from "@mui/icons-material/Reorder";
import { IconButton,Avatar } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import firebase from "firebase/compat/app";

const Header = () => {
  const user = useSelector(selectUser)
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <ReorderIcon />
        </IconButton>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRceIIBz4GgeNszaN5SupI6p1SJE_Bzgk3Q&usqp=CAU"
          alt="gmail logo"
        />
      </div>
      <div className="header__middle">
        <div className="search_mail">
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <input type="text" placeholder="Search mail"/>
            <IconButton>
                <ExpandMoreIcon/>
            </IconButton>
        </div>
      </div>
      <div className="header__right">
        <IconButton><HelpOutlineIcon/></IconButton>
        <IconButton><SettingsIcon/></IconButton>
        <IconButton><AppsIcon/></IconButton>
        <Avatar src={user?.photoURL} onClick={()=>firebase.auth().signOut()}></Avatar>
      </div>
    </div>
  );
};

export default Header;
