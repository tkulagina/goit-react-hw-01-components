import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({avatar, name, isOnline, id}) => {
    return (
        <li className={css.item} key ={id}>
            <span className={isOnline ? css.onLine : css.offLine}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>   
    )}


FriendListItem.proTypes ={
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.string,
        id: PropTypes.number.isRequired,
        }