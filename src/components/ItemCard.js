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


const ArmorTypeMap = {
	Boots: '脚部',
	Coat: '胸部',
	Gloves: '手部',
	Helm: '头部',
	HelmAquatic: '水下呼吸器',
	Leggings: '腿部',
	Shoulders: '肩部'
};

const ArmorWeightClassMap = {
	Heavy: '重甲',
	Medium: '中甲',
	Light: '轻甲',
	Clothing: '城镇服装'
};

const ConsumableTypeMap = {
	AppearanceChange: '外观改变',
	Booze: '饮品',
	ContractNpc: '联系NPC',
	Food: '食物',
	Generic: '各种消耗品',
	Halloween: '增幅剂',
	Immediate: '及时生效',
	Transmutation: '皮肤幻化',
	Unlock: '解锁',
	UpgradeRemoval: '灌注拆解',
	Utility: '磨刀石之类的',
	TeleportToFriend: '好友传送'
};

const ConsumableUnlockTypeMap = {
	BagSlot: '背包扩充',
	BankTab: '银行栏位扩充',
	CollectibleCapacity: '银行存储数量上限扩充',
	Content: '解锁终结技,收藏成就,指挥官',
	CraftingRecipe: '工艺配方',
	Dye: '染料',
	Outfit: '套装',
	GliderSkin: '滑翔翼皮肤',
	Champion: '迷雾冠军',
	RandomUlock: '随机解锁'
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

function WeaponDetail(props) {
	const weaponDamageTypeMap = {
		Fire:'火焰',
		Ice:'寒冰',
		Lightning:'光明',
		Physical:'物理',
		Choking:'没有用到'
	};

	const weaponTypeMap = {
		Axe:'斧头',
		Dagger:'匕首',
		Pistol:'手枪',
		Scepter:'节杖',
		Sword:'单手剑',
		Focus:'聚能器',
		Shield:'盾牌',
		Torch:'火炬',
		Warhorn:'战号',
		Greatsword:'大剑',
		Hammer:'巨锤',
		LongBow:'长弓',
		Rifle:'步枪',
		ShortBow:'短弓',
		Staff:'法杖',
		Harpoon:'鱼叉',
		Speargun:'鱼枪',
		Trident:'三叉戟',
		LargeBundle:'LargeBundle',
		SmallBundle:'SmallBundle',
		Toy:'玩具',
		TwoHandedToy:'TwoHandedToy'
	};
	const {type, damage_type, min_power, max_power, defense, infusion_slots, infix_upgrade, suffix_item_id, secondary_suffix_item_id} = props.data
	return (
		<div>
			<div>
				<span>武器类型:</span> <span>{weaponTypeMap[type]}</span>
			</div>
			<div>
				<span>攻击力:</span> <span>{min_power}~{max_power}</span>
			</div>
			<div>
				<span>伤害类型:</span> <span>{weaponDamageTypeMap[damage_type]}</span>
			</div>
			<div>
				<span>防御力:</span> <span>{defense}</span>
			</div>
		</div>
	)
}

function MediaCard(props) {
	const {
		classes, data: {
			id, icon, name, name_en, description, rarity, type, level, vendor_value, flags, game_types, restrictions, details
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
				{
					Boolean(flags) && <div>
						<span>标签:</span> <span>{flags.map(flag => <Chip label={flagsMap[flag]}
						                                                className={classes.chip}/>)}</span>
					</div>
				}
				{
					Boolean(game_types) && <div>
						<span>使用范围:</span><span>{game_types.map(gt => <Chip label={gameTypesMap[gt]}
						                                                    className={classes.chip}/>)}</span>
					</div>
				}
				{
					Boolean(restrictions) && <div>
						<span>使用限制:</span><span>{restrictions.map(rst => <Chip label={restrictionsMap[rst]}
						                                                       className={classes.chip}/>)}</span>
					</div>
				}
				<div>详细信息</div>
				<hr/>
				{
					type === 'Weapon' && <WeaponDetail data={details}/>
				}


			</CardContent>
			<CardActions>
				<Button size="small" color="primary">
					在中文维基中查看
				</Button>
				<Button size="small" color="primary" href={`https://wiki.guildwars2.com/wiki/?search=${name_en}`}>
					在英文维基上查看
				</Button>
				<Button size="small" color="primary" href={`http://www.gw2data.cn/itemdatabase/${id}`}>
					在数据库中查看
				</Button>
			</CardActions>
		</div>
	);
}

MediaCard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);