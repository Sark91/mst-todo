import React from 'react';
import { observer } from 'mobx-react';
import _get from 'lodash/get';

class Task extends React.Component {
  handleInputChange = (e) => {
    this.props.task.setNote(e.target.value);
  };

  handleSelectOwnerChange = (e) => {
    const selectedUserId = e.target.value;
    const user = this.props.users.find(user => user.id == selectedUserId);

    this.props.task.setOwner(user);
  };

  handleSelectStateChange = (e) => {
    this.props.task.setState(e.target.value);
  };

  render() {
    return (
      <div style={{ border: '1px solid black', padding: 12, display: 'flex', flexDirection: 'column' }}>
        <input type="text" value={this.props.task.note} onChange={this.handleInputChange} />

        <select value={_get(this.props.task.owner, 'id') || ''} onChange={this.handleSelectOwnerChange}>
          <option value="">(not selected)</option>
          {this.props.users.map(user => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>

        <select value={this.props.task.state} onChange={this.handleSelectStateChange}>
          <option value="backlog">Backlog</option>
          <option value="inprogress">In progress</option>
          <option value="qa">Qa</option>
          <option value="ready">Ready</option>
        </select>
      </div>
    );
  }
}

export default observer(Task);
