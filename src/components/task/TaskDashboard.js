import React from 'react';
import { observer } from 'mobx-react';
import Task from './Task';

const TaskDashboard = observer((props) => (
  <div>
    <h1>Tasks <button onClick={() => props.store.addTask()}>Add Task</button></h1>
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <th>Backlog</th>
          <th>In progress</th>
          <th>QA</th>
          <th>Ready</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.store.backlogTasks.map(task => <Task key={task.id} task={task} users={props.store.users} />)}</td>
          <td>{props.store.inprogressTasks.map(task => <Task key={task.id} task={task} users={props.store.users} />)}</td>
          <td>{props.store.qaTasks.map(task => <Task key={task.id} task={task} users={props.store.users} />)}</td>
          <td>{props.store.readyTasks.map(task => <Task key={task.id} task={task} users={props.store.users} />)}</td>
        </tr>
      </tbody>
    </table>
  </div>
));

export default TaskDashboard;
