import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from './FriendList.module.css';


export const FriendList = ({friends}) => {
    return (
        <div className={css.container}>
            <ul className={css.friendList}>
                {friends.map (({avatar, name, isOnline, id}) => {
                    return (
                    <li className={css.item} key ={id}>
                    <FriendListItem 
                        isOnline={isOnline}
                        avatar={avatar}
                        name={name}/>
                    </li>
                )}
            )}
             
            </ul>
        </div>
)}

FriendList.proTypes ={
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.string,
            id: PropTypes.number.isRequired,
        }).isRequired
    )}