import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import SkillCard from "./SkillCard";

const styles = {
    media: {
        height: 18,
        width: 18,
        float: 'left'
    },
    name: {
        lineHeight: '18px'
    },
};

class ItemCard extends React.Component {

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render() {
        const {
            classes, data: {
                icon, name, rarity
            }
        } = this.props;
        return (
            <div style={{display: 'inline-block', maxWidth: '300px'}}>
                <div onClick={this.handleClickOpen}>
                    <img
                        className={classes.media}
                        src={icon}
                        title={name}
                    />
                    <span className={classes.name}>
						{name}
					</span>
                </div>
                <div>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <div>
                            <SkillCard data={this.props.data}/>
                        </div>
                    </Dialog>
                </div>
            </div>

        );
    }
}

ItemCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemCard);