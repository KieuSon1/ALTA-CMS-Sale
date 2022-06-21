import { EmailIcon, NotificationIcon } from 'components/Icons'
import React from 'react'
import "./AccountItem.scss"
import { Link } from 'react-router-dom'

const AccountItem: React.FC<{}> = () => {
  return (
    <div className='app__account-item'>
        <EmailIcon className="app__account-item__email-icon" size={24}/>
        <NotificationIcon className="app__account-item__notification-icon" size={24}/>
        <Link className="app__account-item__account-avatar" to={"/dashboard"}>
            <img src="https://static.bongda24h.vn/medias/standard/2022/5/24/erik-ten-hag-phat-bieu-bat-ngo-ve-harry-maguire.png" alt="Harry 80M" />
        </Link>
    </div>
  )
}

export default AccountItem