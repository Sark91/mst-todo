import { types, addMiddleware, applySnapshot, getSnapshot } from 'mobx-state-tree';

import User from './User';
import Task from './Task';

const Store = types.model({
  users: types.array(User),
  tasks: types.array(Task),
}).actions(store => ({
  addUser(name = ''){
    store.users.push(User.create({
      id: Date.now(),
      name,
      tasks: [],
    }));
  },

  addInvalidUser1() {
    store.users.push({
      id: Date.now(),
      name: 'Filipek <4',
      tasks: [],
      someProperty: '1',
    });
  },

  addInvalidUser2() {
    store.users.push(User.create({
      id: Date.now(),
    }));
  },

  addTask(){
    store.tasks.push({
      id: Date.now(),
      owner: null,
      note: '',
      state: 'backlog',
    });
  }
})).views(store => ({
  get backlogTasks() { return store.tasks.filter(task => task.state === 'backlog'); },
  get inprogressTasks() { return store.tasks.filter(task => task.state === 'inprogress'); },
  get qaTasks() { return store.tasks.filter(task => task.state === 'qa'); },
  get readyTasks() { return store.tasks.filter(task => task.state === 'ready'); },
}));

const store = Store.create({
  users: [],
  tasks: [],
});

const disposer = addMiddleware(store, (call, next) => {
  console.log('MIDDLEWARE', call);

  return next(call);
});

Object.assign(window, { disposer, store, applySnapshot, getSnapshot });

export default store;
