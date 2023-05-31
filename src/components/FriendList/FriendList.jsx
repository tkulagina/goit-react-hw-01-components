import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({friends}) => {
    return (
        <div className={css.container}>
            <ul className={css.friendList}>
  
            {friends.map(({avatar, name, isOnline, id}) => {
            return (
                <li className={css.item} key ={id}>
                    <span className={isOnline ? css.onLine : css.offLine}>{isOnline}</span>
                    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{name}</p>
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
        })
    )
}