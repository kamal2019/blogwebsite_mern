import React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import memories from '../../images/memories.png';
import useStyles from './Styles';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';



function Navbar() {
    const classes = useStyles();
    const user = null;
    const logout = ()=>{

    }
  return (
      <div className='navbar'>
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
        <Link to='/'><Typography className={classes.heading} variant="h2" align="center">Blogs</Typography></Link>
        <img className={classes.image} src={memories} alt="memories" height="50"/>
        </div>

        <Toolbar className={classes.toolbar} >
        {user? (
          <div>

            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>

            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>

            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
            </div>
          
        ) : (

            <Link to='/auth'><Button variant="contained" color="primary">Sign In</Button></Link>
        )
        }
      </Toolbar>

  </AppBar>
  </div>
    )
}

export default Navbar;
