import React from 'react';
import classes from './Header.module.css'
import reestrLogo from './../../Common/Vector.svg'
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import calendar from './../../Common/calendar.svg'
import user from './../../Common/Юзер.svg'
import vektorBottom from './../../Common/VectorBottom.svg'
const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.form}>
                <div className={classes.logo}>
                    <img src={reestrLogo} alt="reestrLogo"/>
                </div>
                <div className={classes.research}>
                    <Paper
                        component="form"
                        sx={{
                            p: '2px 4px', display: 'flex', alignItems: 'center', width: '270px',
                            height: '48px'
                        }}
                    >
                        <IconButton type="submit" sx={{p: '10px'}} aria-label="search">
                            <SearchIcon/>
                        </IconButton>
                        <InputBase
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: '10px 0px 10px 10px',
                                gap: '5px',


                            }}
                            placeholder="Поиск"
                        />
                    </Paper>
                </div>
                <div className={classes.profile}>
                    <IconButton sx={{
                        width: '48px',
                        height: '48px'
                    }}>
                        <img src={calendar} alt="calendar"/>
                    </IconButton>
                    <IconButton sx={{
                        width: '48px',
                        height: '48px'
                    }}>
                        <NotificationsNoneOutlinedIcon/>
                    </IconButton>

                    <div className={classes.user}>
                        <div><img src={user} alt="user"/></div>
                        <div className={classes.userName}>Захар Палазник</div>
                        <div><img src={vektorBottom} alt="vektorBottom"/></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;