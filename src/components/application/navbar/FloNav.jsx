import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { doGetFamilyMembers } from '../../../actions/userActions';
import { doLogout } from '../../../actions/authActions';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import HomeRounded from '@material-ui/icons/HomeRounded';
import Person from '@material-ui/icons/Person';
import Settings from '@material-ui/icons/Settings';
import ScheduleRounded from '@material-ui/icons/ScheduleRounded';
import styled from 'styled-components';

const IconHideStyle = styled.div`@media screen and (max-width: 500px) {display: none;}`;

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
	root         : {
		display  : 'flex',
		flexGrow : 1,
	},
	appBar       : {
		backgroundColor : '#5C70DC',
		transition      : theme.transitions.create([ 'margin', 'width' ], {
			easing   : theme.transitions.easing.sharp,
			duration : theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift  : {
		width      : `calc(100% - ${drawerWidth}px)`,
		marginLeft : drawerWidth,
		transition : theme.transitions.create([ 'margin', 'width' ], {
			easing   : theme.transitions.easing.easeOut,
			duration : theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton   : {
		marginRight : theme.spacing(2),
	},
	hide         : {
		display : 'none',
	},
	drawer       : {
		width      : drawerWidth,
		flexShrink : 0,
	},
	drawerPaper  : {
		width : drawerWidth,
	},
	drawerHeader : {
		display        : 'flex',
		alignItems     : 'center',
		padding        : '0 8px',
		...theme.mixins.toolbar,
		justifyContent : 'flex-end',
	},
	content      : {
		flexGrow   : 1,
		padding    : theme.spacing(3),
		transition : theme.transitions.create('margin', {
			easing   : theme.transitions.easing.sharp,
			duration : theme.transitions.duration.leavingScreen,
		}),
		marginLeft : -drawerWidth,
	},
	contentShift : {
		transition : theme.transitions.create('margin', {
			easing   : theme.transitions.easing.easeOut,
			duration : theme.transitions.duration.enteringScreen,
		}),
		marginLeft : 0,
	},
	title        : {
		flexGrow : 1,
	},
}));

function MenuAppBar(props) {
	const classes = useStyles();
	const theme = useTheme();
	const [ auth, setAuth ] = React.useState(true);
	const [ menuOpen, setMenuOpen ] = React.useState(false);
	const [ anchorEl, setAnchorEl ] = React.useState(null);
	const open = Boolean(anchorEl);

	function handleChange(event) {
		setAuth(event.target.checked);
	}

	function handleMenu(event) {
		setAnchorEl(event.currentTarget);
	}

	function handleClose() {
		setAnchorEl(null);
	}

	function handleMenuOpen() {
		setMenuOpen(true);
	}

	function handleMenuClose() {
		setMenuOpen(false);
	}

	return (
		<div className={classes.root}>
			<AppBar position='fixed' className={clsx(classes.appBar, { [classes.appBarShift]: menuOpen })}>
				<Toolbar>
					<IconHideStyle>
						<IconButton
							aria-label='Open Side Menu'
							edge='start'
							className={clsx(classes.menuButton, open && classes.hide)}
							color='inherit'
							onClick={handleMenuOpen}>
							<MenuIcon />
						</IconButton>
					</IconHideStyle>
					<Typography variant='h5' style={{ fontFamily: 'Nunito', fontWeight: 'bold' }} className={classes.title}>
						Badger's Den
					</Typography>
					{auth && (
						<div>
							<IconButton
								aria-label='Account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleMenu}
								color='inherit'>
								<AccountCircle style={{ width: '32px', height: '32px' }} />
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical   : 'top',
									horizontal : 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical   : 'top',
									horizontal : 'right',
								}}
								open={open}
								onClose={handleClose}>
								<Link to='/app'>
									<MenuItem onClick={handleClose}>Home</MenuItem>
								</Link>
								<Link to='/profile'>
									<MenuItem onClick={handleClose}>Profile</MenuItem>
								</Link>
							</Menu>
						</div>
					)}
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant='persistent'
				anchor='left'
				open={menuOpen}
				classes={{ paper: classes.drawerPaper }}>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleMenuClose}>
						{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</div>
				<Divider />
				<List>
					<ListItem button>
						<ListItemIcon>
							<HomeRounded />
						</ListItemIcon>
						<Link to='/tasks'>
							<ListItemText primary={props.user.isAdmin ? 'Task Panel' : 'My Tasks'} />
						</Link>
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<ScheduleRounded />
						</ListItemIcon>
						<Link to='/calendar'>
							<ListItemText primary='Schedule' />
						</Link>
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<Person />
						</ListItemIcon>
						<Link to='/family'>
							<ListItemText primary='Family Members' />
						</Link>
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<Settings />
						</ListItemIcon>
						<Link to='/profile'>
							<ListItemText primary='Profile' />
						</Link>
					</ListItem>
					<Divider />
					<ListItem button>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary='Logout' onClick={props.doLogout} />
					</ListItem>
				</List>
			</Drawer>
		</div>
	);
}

const mapStateToProps = state => ({ user: state.users.user });

export default connect(mapStateToProps, { doGetFamilyMembers, doLogout })(MenuAppBar);
