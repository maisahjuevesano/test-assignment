import { Todo } from "../ts/models/Todo";
import { addTodo, changeTodo, removeAllTodos } from "./../ts/functions";

describe("addTodo", () => {
  test("should add todo to list", () => {
    //arrange
    let todoText: string = "hejsan";
    let emptyList: Todo[] = [];
    //act
    addTodo(todoText, emptyList);
    //assert
    expect(emptyList.length).toBe(1);
  });

  test("should not add todo to list", () => {
    //arrange
    let todoText: string = "a";
    let emptyList: Todo[] = [];
    //act

    let result = addTodo(todoText, emptyList);

    //assert
    expect(emptyList.length).toBe(0);
    expect(result.success).toBe(false);
  });
});

test("should change the todo bolean value", () => {
  //arrange
  let todo: Todo = new Todo("studdy", false);

  //act
  changeTodo(todo);
  //assert
  expect(todo.done).toBe(true);
});

test("should remove allTodos", () => {
  //arrange
  let list: Todo[] = [
    new Todo("studdy", true),
    new Todo("eat", true),
    new Todo("sleep", true),
  ];
  //act
  removeAllTodos(list);
  //assert
  expect(list.length).toBe(0);
});
