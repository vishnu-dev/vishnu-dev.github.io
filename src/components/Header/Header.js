import React from 'react';
import './Header.scss';
import {makeStyles} from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import {PALETTE} from '../../constants/Palette';
import { HashLink } from 'react-router-hash-link';
import Box from '@mui/material/Box';
import {Dialog, Grid, IconButton, Slide} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


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
        {key: 'home', name: 'Home', link: '/#home'},
        {key: 'about', name: 'My story', link: '/#about'},
        {key: 'experience', name: 'Experience', link: '/#experience'},
        {key: 'projects', name: 'Projects', link: '/#projects'},
        {key: 'skills', name: 'Skills', link: '/#skills'},
        {key: 'hobbies', name: 'Hobbies', link: '/#hobbies'},
        {key: 'contact', name: 'Contact', link: '/#contact'},
    ];

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -74;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    const menuButtons = menu.map(
        menuItem => (
            <HashLink
                smooth
                to={menuItem.link}
                key={menuItem.key}
                scroll={el => scrollWithOffset(el)}
                className={classes.menuItem}
            >
                <Button>{menuItem.name}</Button>
            </HashLink>
        )
    );
    return (
        <AppBar position="sticky" className={classes.header}>
            <Container maxWidth="lg">
                <Toolbar className="Toolbar">
                    <HashLink to="/#home" style={{textDecoration: 'none'}}>
                        <Box display={{xs: 'none', sm: 'none', md: 'block'}}>
                            <Typography variant="h6" color="primary" className={classes.title}>
                                V
                            </Typography>
                        </Box>
                        <Box display={{xs: 'block', sm: 'block', md: 'none'}}>
                            <Typography variant="h6" color="primary" className={classes.title}>
                                Hello!
                            </Typography>
                        </Box>
                    </HashLink>
                    <Box flexGrow={1}/>
                    <Box sx={{display: {xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block'}}}>
                        {menuButtons}
                    </Box>
                    <Box sx={{display: {xs: 'block', sm: 'block', md: 'block', lg: 'none', xl: 'none'}}}>
                        <IconButton
                            aria-label="menu"
                            color="secondary"
                            onClick={handleClickOpen}
                            size="large">
                            <MenuIcon fontSize="large"/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}
                    PaperProps={{style: {backgroundColor: PALETTE.background}}}>
                <Grid container justifyContent="flex-end">
                    <IconButton aria-label="menu" color="secondary" onClick={handleClose} size="large">
                        <CloseIcon fontSize="large"/>
                    </IconButton>
                </Grid>
                <Grid container style={{height: '90vh', paddingTop: '5vh'}} justifyContent="center">
                    <Grid item xs={10}>
                        {
                            menu.map(
                                menuItem => (
                                    <HashLink
                                        smooth
                                        to={menuItem.link}
                                        key={menuItem.key}
                                        scroll={el => scrollWithOffset(el)}
                                        className={classes.menuItemLarge}
                                        onClick={handleClose}
                                    >
                                        <Typography variant="h1" color="primary" style={{fontWeight: 'bold'}}
                                                    gutterBottom>{menuItem.name}</Typography>
                                    </HashLink>
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
