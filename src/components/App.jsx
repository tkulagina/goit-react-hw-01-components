import user from 'path/user.json';
import data from 'path/data.json';
import friends from 'path/friends.json';
import transactions from 'path/transactions.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList} from './FriendList/FriendList'
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () =>{
  return (
  <mainContainer>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </mainContainer>
)}