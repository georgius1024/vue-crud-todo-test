import getters from "@/store/getters";

describe("store/getters", () => {
  it("loads without errors", () => {
    expect(getters).toBeDefined();
  });
  it("todos works as expected", () => {
    expect(getters.todos({todos: 123})).toBe(123);
  });
  it("user works as expected", () => {
    expect(getters.user({user: 123})).toBe(123);
  });
});
