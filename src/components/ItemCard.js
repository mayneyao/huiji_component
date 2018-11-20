import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Coin from './Coin';

const styles = theme => ({
	chip: {
		margin: theme.spacing.unit * 0.2,
	},
	card: {
		maxWidth: 480,
	},
	media: {
		height: 64,
		width: 64,
		float: 'left'
	},
	name: {
		float: 'right',
		width: '70%'
	},
	Junk: {
		color: '#aaa'
	},

	Basic: {
		color: '#000'
	},

	Fine: {
		color: '#62a4da'
	},

	Masterwork: {
		color: '#1a9306'
	},

	Rare: {
		color: '#fcd00b'
	},

	Exotic: {
		color: '#ffa405'
	},

	Ascended: {
		color: '#fb3e8d'
	},

	Legendary: {
		color: '#4c139d'
	}
});


const typeMap = {
	Armor: '护甲',
	Back: '背部',
	Bag: '包裹',
	Consumable: "消耗品",
	Container: '盒子',
	CraftingMaterial: '工艺材料',
	Gathering: '采集工具',
	Gizmo: '玩具',
	MiniPet: '迷你宠物',
	Tool: '拆解工具',
	Trait: '特性指南',
	Trinket: '饰品',
	Trophy: '战利品',
	UpgradeComponent: '升级组件',
	Weapon: '武器'
};

const flagsMap = {
	AccountBindOnUse: '使用后帐号绑定',
	AccountBound: '帐号绑定',
	Attuned: 'Attuned',
	BulkConsume: '可批量使用',
	DeleteWarning: '摧毁时会有警告',
	HideSuffix: '隐藏升级组件的后缀',
	Infused: '灌注物品',
	MonsterOnly: 'MonsterOnly',
	NoMysticForge: '不可在熔炉内使用',
	NoSalvage: '不可拆解',
	NoSell: '不可出售',
	NotUpgradeable: '不可升级',
	NoUnderwater: '水下不可用',
	SoulbindOnAcquire: '装备后灵魂绑定',
	SoulBindOnUse: '使用后灵魂绑定',
	Tonic: '用掉就没了?',
	Unique: '唯一物品'
};

const gameTypesMap = {
	Activity: '可在活动中使用',
	Dungeon: '可在副本中使用',
	Pve: '可在Pve中使用',
	Pvp: '可在Pvp中使用',
	PvpLobby: '可在迷雾之心使用',
	Wvw: '可在战场使用'
};

const restrictionsMap = {
	Asura: '阿苏拉',
	Charr: '夏尔',
	Human: '人类',
	Norn: '诺恩',
	Sylvari: '希尔瓦里',
	Elementalist: '元素使',
	Engineer: '工程师',
	Guardian: '守护者',
	Mesmer: '幻术师',
	Necromancer: '死灵法师',
	Ranger: '游侠',
	Thief: '潜行者',
	Warrior: '战士'
};

function MediaCard(props) {
	const {
		classes, data: {
			icon, name, name_en, description, rarity, type, level, vendor_value, flags, game_types, restrictions
		}
	} = props;
	return (
		<div className={classes.card}>
			<CardHeader
				avatar={
					<img src={icon} alt=""/>
				}
				action={
					<div></div>
				}
				title={<span className={classes[rarity]}>{name}</span>}
				subheader={<span className={classes[rarity]}>{name_en}</span>}
			/>
			<CardContent>
				<div>
					<span>描述:</span> <span>{description}</span>
				</div>
				<div>
					<span>类型:</span> <span>{typeMap[type]}</span>
				</div>
				<div>
					<span>等级:</span> <span>{level}</span>
				</div>
				<div>
					<span>出售价格:</span> <span><Coin val={vendor_value}/></span>
				</div>
				<div>
					<span>标签:</span> <span>{flags.map(flag => <Chip label={flagsMap[flag]}
					                                                className={classes.chip}/>)}</span>
				</div>
				<div>
					<span>使用范围:</span><span>{game_types.map(gt => <Chip label={gameTypesMap[gt]}
					                                                    className={classes.chip}/>)}</span>
				</div>
				<div>
					<span>使用限制:</span><span>{restrictions.map(rst => <Chip label={restrictionsMap[rst]}
					                                                       className={classes.chip}/>)}</span>
				</div>


			</CardContent>
			<CardActions>
				<Button size="small" color="primary">
					Share
				</Button>
				<Button size="small" color="primary">
					Learn More
				</Button>
			</CardActions>
		</div>
	);
}

MediaCard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);