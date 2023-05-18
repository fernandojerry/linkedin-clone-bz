import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HeaderOption from './HeaderOption';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Header() {
  return (
    <div className='header'>
        <div className="header-left">
            <img src="https://th.bing.com/th/id/R.443848cba102a400fa3a13e381fa1bc8?rik=Q9jGCjyTLW8weQ&pid=ImgRaw&r=0" alt="" />

            <div className="header-search">
                <SearchIcon />
                <input type="text" />
            </div>
        </div>

        <div className="header-right">
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
            <HeaderOption Icon={ChatIcon} title='Messaging'/>
            <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
            <HeaderOption avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLELf5a5fWYZDMTFB5nitQ7L0rzYZRiFUbkwp-tkABSS1POSLvnPZaHw&s" title='Me'/>
        </div>
    </div>
  )
}

export default Header
