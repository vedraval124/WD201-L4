const todoList = () => {
  const all = [];

  let today = new Date().toLocaleDateString("en-CA");
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    return all.filter((io) => io.dueDate < today);
  };

  const dueToday = () => {
    return all.filter((io) => io.dueDate === today);
  };

  const dueLater = () => {
    return all.filter((io) => io.dueDate > today);
  };

  const toDisplayableList = (list) => {
    return list
      .map(
        (io) =>
          `${io.completed ? `[x]` : `[ ]`} ${io.title} ${
            io.dueDate != today ? io.dueDate : " "
          }`
      )
      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
  };
};

module.exports = todoList;
