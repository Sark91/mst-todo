import { types } from 'mobx-state-tree';

const Task = types.model({
  id: types.identifier(types.union(types.string, types.number)),
  owner: types.maybe(
    types.reference(types.late(() => require('./User').default)),
  ),
  note: types.string,
  state: types.union(
    types.literal('backlog'),
    types.literal('inprogress'),
    types.literal('qa'),
    types.literal('ready'),
  ),
}).actions(task => ({
  setOwner(user){
    task.owner = user;
  },
  setNote(note) {
    task.note = note;
  },
  setState(state) {
    task.state = state;
  },
}));

export default Task;
