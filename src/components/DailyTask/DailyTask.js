import React from 'react';
import PropTypes from 'prop-types';
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import pvpIcon from './Daily_PvP_Achievement.png';
import wvwIcon from './Daily_WvW_Achievement.png';
import pveIcon from './Daily_Achievement.png';
import webIcon from './Daily_Web.png';
import fractalsIcon from './Daily_Fractals.png';

const theme = createMuiTheme({
	palette: {
		type: 'dark',
	},
});

function DailyList(props) {
	const {classes, list, type} = props;
	const iconMap = {
		pvp: pvpIcon,
		pve: pveIcon,
		wvw: wvwIcon,
		web: webIcon,
		fractals: fractalsIcon
	};
	return (
		<div className={classes.list}>
			<List>
				{
					list.map(item => (<ListItem key={item.id}>
						<Avatar src={iconMap[type]} alt={type}/>
						<ListItemText primary={item.zh} secondary={item.detail}/>
					</ListItem>))
				}

			</List>
		</div>
	);
}


function TabContainer(props) {
	return (
		<Typography component="div" style={{padding: 8 * 3}}>
			{props.children}
		</Typography>
	);
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
};

const styles = theme => ({
	root: {
		// maxWidth: 500,
		flexGrow: 1,
		backgroundColor: '#0f1425',
		color: '#ddd'
	},
	tabRoot: {
		textTransform: 'initial',
		minWidth: 72,
		fontWeight: theme.typography.fontWeightRegular,
		marginRight: theme.spacing.unit * 4,
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		color: '#ddd',
		'&:hover': {
			color: '#ddd',
			opacity: 1,
		},
		'&$tabSelected': {
			color: '#ddd',
			fontWeight: theme.typography.fontWeightMedium,
		},
		'&:focus': {
			color: '#ddd',
		},
	},
	list: {
		width: '100%',
		maxWidth: 400,
	},
});

class SimpleTabs extends React.Component {
	state = {
		value: 0,
		data: {
			'pvp': [],
			'date': '',
			'fractals': [],
			'pve': [],
			'wvw': []
		}
	};

	handleChange = (event, value) => {
		this.setState({value});
	};

	componentDidMount() {
		axios.get('https://gw2.wishingstarmoye.com/gw2api/daily').then(res => {
			this.setState({
				data: res.data
			})
		})
	}

	render() {
		const {classes} = this.props;
		const {
			value, data: {
				pvp, pve, wvw, fractals, date
			}
		} = this.state;

		return (
			<MuiThemeProvider theme={theme}>
				<div className={classes.root}>
					<Tabs
						value={this.state.value}
						indicatorColor="primary"
						textColor="primary"
						onChange={this.handleChange}
					>
						<Tab label="PvE" className={classes.tabRoot} disableRipple/>
						<Tab label="PvP" className={classes.tabRoot} disableRipple/>
						<Tab label="WvW" className={classes.tabRoot} disableRipple/>
						<Tab label="碎层" className={classes.tabRoot} disableRipple/>
					</Tabs>

					{value === 0 &&
					<TabContainer date={date}> <DailyList list={pve} type='pve' classes={classes}/></TabContainer>}
					{value === 1 &&
					<TabContainer date={date}><DailyList list={pvp} type='pvp' classes={classes}/></TabContainer>}
					{value === 2 &&
					<TabContainer date={date}><DailyList list={wvw} type='wvw' classes={classes}/></TabContainer>}
					{value === 3 &&
					<TabContainer><DailyList list={fractals} type='fractals' classes={classes}/></TabContainer>}
				</div>
			</MuiThemeProvider>

		);
	}
}

SimpleTabs.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);