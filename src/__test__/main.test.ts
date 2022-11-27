/**
 * @jest-environment jsdom
 */

import * as functionsInMain from "./../ts/main";
import * as functionsInfunctions from "./../ts/functions";

// import {
//   createNewTodo,
//   createHtml,
//   toggleTodo,
//   displayError,
//   clearTodos,
// } from "./../ts/main";

import { Todo } from "../ts/models/Todo";
// import { removeAllTodos } from "../ts/functions";
test("should create todo", () => {
  //arrange
  let spy = jest.spyOn(functionsInMain, "createHtml").mockReturnValue();
  let todoText: string = "ge mig helg";
  let todos: Todo[] = [new Todo("Inlämning", false)];
  //act
  functionsInMain.createNewTodo(todoText, todos);

  //assert
  expect(spy).toBeCalled();
});

describe("toggle todo", () => {
  test("should call change todos", () => {
    //arrange
    let spy = jest.spyOn(functionsInfunctions, "changeTodo").mockReturnValue();
    let todo = new Todo("write a message", false);
    //act
    functionsInMain.toggleTodo(todo);
    //assert
    expect(spy).toHaveBeenCalled();
  });

  test("Should call createHtml", () => {
    //Ska call funktionen createHtml
    //Arrange
    let spy = jest.spyOn(functionsInMain, "createHtml").mockReturnValue();
    let todo: Todo = new Todo("handin", false);
    //Act
    functionsInMain.toggleTodo(todo);
    //Assert
    expect(spy).toHaveBeenCalled();
  });
});

test("should not create todo", () => {
  //arrange
  let spy = jest.spyOn(functionsInMain, "displayError").mockReturnValue();
  let todoText: string = "no";
  let todos: Todo[] = [new Todo("Inlämning", false)];
  //act
  functionsInMain.createNewTodo(todoText, todos);
  //assert
  expect(spy).toBeCalled();
});

describe("clearTodos", () => {
  test("should call removeAllTodos", () => {
    //arrange
    let spy = jest
      .spyOn(functionsInfunctions, "removeAllTodos")
      .mockReturnValue();
    let todos: Todo[] = [new Todo("remove all todos", false)];
    //act
    functionsInMain.clearTodos(todos);
    //assert
    expect(spy).toHaveBeenCalled();
  });
  test("should call createHtml", () => {
    //arrange
    let spy = jest.spyOn(functionsInMain, "createHtml").mockReturnValue();
    let todos: Todo[] = [new Todo("inlämning", false)];
    //act
    functionsInMain.clearTodos(todos);
    //assert
    expect(spy).toHaveBeenCalled();
  });
});
