import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
  
        {friends.map(({avatar, name, isOnline, id}) => {
            return (
                <li className="item" key ={id}>
                    <span className="status">{isOnline}</span>
                    <img className="avatar" src={avatar} alt="User avatar" width="48" />
                    <p className="name">{name}</p>
                </li>   
            )}
        )}
    </ul>
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