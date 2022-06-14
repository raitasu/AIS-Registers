import React from 'react';
import classes from './Information.module.css'
import officeLogo from './../../Common/3d Office Work 1.svg'
import {Button} from "@mui/material";

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Information = () => {
    return (
        <div className={classes.information}>
            <div className={classes.title}>
                <div className={classes.description}>
                    <h1 className={classes.h1}>РЕЕСТР ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ</h1>
                    <p className={classes.p1}>Единый реестр программ для электронных вычислительных машин и баз данных</p>
                    <p className={classes.p2}>Включено ПО в реестр: 13 438 Правообладателей: 4 272</p>
                </div>
                <div className={classes.research}>
                    <CustomizedInputBase/>
                    <Button sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '16px 25px',
                        gap: '10px',
                        width: '120px',
                        height: '56px'
                    }}>Искать
                    </Button>

                </div>
            </div>
            <div>
                <img className={classes.officeLogo} src={officeLogo} alt="OfficeLogo"/>
            </div>
        </div>
    );
};

export default Information;


export function CustomizedInputBase() {
    return (
        <Paper
            component="form"
            sx={{
                p: '2px 4px', display: 'flex', alignItems: 'center', width: '330px',
                height: '56px'
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
                    padding: '14px 15px',
                    gap: '10px',

                    width: '330px',
                    height: '56px'
                }}
                placeholder="Искать реестр..."
            />
        </Paper>
    );
}