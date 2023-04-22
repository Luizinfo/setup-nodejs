import Person from "./person"

it("shoud sum", () => {
  const person = new Person()

  expect(person.sayMyName()).toBe("Hello World!")
})
