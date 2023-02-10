/**
 *
 * @typedef {object} todoitem
 * @description todo의 객체
 * @property {string} id — 유저 ID
 * @property {string} content - 할일
 * @property {boolean} isDone - 성공여부
 * @property {string} category — 카테고리
 * @property {string[]} tags — 태그
 */

interface todoitem {
  id: string;
  content: string;
  isDone: boolean;
  category: string;
  tags?: string[];
}

interface createTodo {
  (todo: todoitem): void;
}

interface getTodo {
  (id: string): todoitem;
}

interface updateTodo {
  (todo: todoitem): void;
}

interface deleteTodo {
  (id: string): void;
}

interface deleteTodoTags {
  (id: string, tags?: string[]): void;
}

// ----------------------추가 코드----------------------

class TodoList {
  private todos: todoitem[] = [];

  getTodo: getTodo = (id) => {
    return { ...this.todos.filter((i) => i.id === id)[0] };
  };

  createTodo: createTodo = (todo) => {
    this.todos.push(todo);
  };

  updateTodo: updateTodo = (todo) => {
    const index = this.todos.findIndex((i) => i.id === todo.id);
    if (!index) throw new Error("Not found todo");

    this.todos[index] = {
      ...todo,
    };
  };

  deleteTodo: deleteTodo = (id) => {
    this.todos = this.todos.filter((i) => i.id !== id);
  };

  deleteTodoTags: deleteTodoTags = (id, tags) => {
    const index = this.todos.findIndex((i) => i.id === id);
    this.todos[index].tags = tags;
  };
}

// ----------------------추가 코드----------------------

const todos: todoitem[] = [];

const getTodo: getTodo = (id) => {
  return { ...todos.filter((i) => i.id === id)[0] };
};

const createTodo: createTodo = (todo) => {
  todos.push(todo);
};

const updateTodo: updateTodo = (todo) => {
  const index = todos.findIndex((i) => i.id === todo.id);
  if (!index) throw new Error("Not found todo");

  todos[index] = {
    ...todo,
  };
};

const deleteTodo: deleteTodo = (id) => {
  const index = todos.findIndex((i) => i.id === id);
  delete todos[index];
};

const deleteTodoTags: deleteTodoTags = (id, tags) => {
  const index = todos.findIndex((i) => i.id === id);
  todos[index].tags = tags;
};
