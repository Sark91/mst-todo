import React from 'react';
import { observer } from 'mobx-react';
import User from './User';

const UserDashboard = observer((props) => (
  <div>
    <h1>Users <button onClick={() => props.store.addUser('')}>Add User</button></h1>
    {props.store.users.map(user => (
      <User key={user.id} user={user} tasks={props.store.tasks} />
    ))}
  </div>
));

export default UserDashboard;
