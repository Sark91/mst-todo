import { types } from 'mobx-state-tree';

const User = types.model({
  id: types.identifier(types.union(types.string, types.number)),
  name: types.string,
  tasks: types.array(
    types.late(() => types.reference(require('./Task').default, {
      get: (id, parent) => parent.tasks.find(t => t.id === id),
      set: (task) => task.id,
    })),
  ),
}).actions(user => ({
  setName(name){
    user.name = name;
  },

  setId(id) {
    user.id = id;
  },
}));

export default User;
