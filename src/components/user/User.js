import React from 'react';
import { observer } from 'mobx-react';
import _get from 'lodash/get';

class User extends React.Component {

  handleInputChange = (e) => {
    this.props.user.setName(e.target.value);
  };

  render() {
    return (
      <div key={this.props.user.id} style={{ display: 'inline-block', width: 250, border: '1px solid black', padding: 12 }}>
        <input type="text" value={this.props.user.name} onChange={this.handleInputChange} /><br />
        <ul>
          {this.props.tasks.filter(task => _get(task.owner, 'id') === this.props.user.id).map(task => (
            <li key={task.id}>(#{task.id}) {task.note}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default observer(User);