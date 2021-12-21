import React from 'react';
import './Header.scss';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { PALETTE } from '../../constants/Palette';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Box from '@material-ui/core/Box';
import { Grid, Hidden, IconButton, Slide, Dialog } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    lineHeight: '1rem'
  },
  header: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    boxShadow: '0 8px 6px -6px #000',
    paddingTop: '10px',
    position: 'fixed'
  },
  menuItem: {
    fontWeight: 'bold',
    margin: '0 15px',
    transition: 'color 0.5s',
    textDecoration: 'none',
    '&:hover': {
      color: PALETTE.primary
    }
  },
  menuItemLarge: {
    transition: 'color 0.5s',
    textDecoration: 'none',
    '&:hover': {
      color: PALETTE.primary
    }
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Header = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const menu = [
    { key: 'home', name: 'Home', link: '#home' },
    { key: 'about', name: 'About', link: '#about' },
    { key: 'experience', name: 'Experience', link: '#experience' },
    { key: 'skills', name: 'Skills', link: '#skills' },
    { key: 'hobbies', name: 'Hobbies', link: '#hobbies' },
    { key: 'contact', name: 'Contact', link: '#contact' },
  ];
  return (
    <AppBar position="sticky" className={classes.header}>
      <Container maxWidth="lg">
        <Toolbar className="Toolbar">
          <AnchorLink offset="74" href="#home" style={{ textDecoration: 'none' }}>
            <Typography variant="h6" color="primary" className={classes.title}>
              Vishnu
              </Typography>
          </AnchorLink>
          <Box flexGrow={1}></Box>
          <Hidden smDown>
            {
              menu.map(
                menuItem => (
                  <AnchorLink offset="74" href={menuItem.link} key={menuItem.key} className={classes.menuItem}>
                    <Button color={props.section === menuItem.key ? 'primary' : 'default'}>{menuItem.name}</Button>
                  </AnchorLink>
                )
              )
            }
          </Hidden>
          <Hidden mdUp>
            <IconButton aria-label="menu" color="secondary" onClick={handleClickOpen}>
              <MenuIcon fontSize="large"></MenuIcon>
            </IconButton>
          </Hidden>
        </Toolbar>
      </Container>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} PaperProps={{ style: { backgroundColor: PALETTE.background } }}>
        <Grid container justify="flex-end">
          <IconButton aria-label="menu" color="secondary" onClick={handleClose}>
            <CloseIcon fontSize="large"></CloseIcon>
          </IconButton>
        </Grid>
        <Grid container style={{ height: '90vh', paddingTop: '5vh' }} justify="center">
          <Grid item xs={10}>
            {
              menu.map(
                menuItem => (
                  <AnchorLink offset="74" href={menuItem.link} key={menuItem.key} className={classes.menuItemLarge} onClick={handleClose}>
                    <Typography variant="h1" color="primary" style={{ fontWeight: 'bold' }} gutterBottom>{menuItem.name}</Typography>
                  </AnchorLink>
                )
              )
            }
          </Grid>
        </Grid>
      </Dialog>
    </AppBar>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
