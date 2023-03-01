import React from 'react'
import css from "./Footer.module.css";
import Logo from "../../assets/logo.png"
import {

    InboxIcon,
    PhoneIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon,
    LocationMarkerIcon,

} from "@heroicons/react/outline"


function Footer() {
  return (
     <div className={css.cFooterWrap}>

        <hr />

        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>Msika</span>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact US</span>
                    <span className={css.pngLine}>
                    {" "}
                        <LocationMarkerIcon className={css.icon} />
                        <span>Malawi , Blantyre Nyambadwe</span>
                        
                    </span>
                    <span className={css.pngLine}>
                       
                        {" "}
                        <PhoneIcon className={css.icon} />
                        <a href='tel:265-990-865-810'>265-990-865-810</a>
                        
                    </span>
                    <span className={css.pngLine}>
                        <InboxIcon className={css.icon} />
                        <a href='mailto:chikuthomas44@gmail.com'>chikuthomas44@gmail.com</a>
                        
                    </span>
                  
                   
                </div>
                
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Account</span>
                
                  
                    <span className={css.pngLine}>
                        <LoginIcon className={css.icon} />
                        <span>Sign In</span>
                        
                    </span>
                   
                 
                </div>
                
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Company</span>
                 
                    <span className={css.pngLine}>
                        <UsersIcon className={css.icon} />
                        <span>About US</span>
                        
                    </span>
                  
                </div>
                
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Resources</span>
                    
                   
                    <span className={css.pngLine}>
                        <LinkIcon className={css.icon} />
                        <span>Safety Privacy & Terms</span>
                        
                    </span>
                </div>
                
            </div>
        </div>
        <div className={css.copyRight}>
            <span>Copyright @2022 by msika, Inc.</span>
            <span>All rights reserved</span>
        </div>
     </div>
  )
}

export default Footer