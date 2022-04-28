import actions from "@/store/actions";

describe("store/actions", () => {
  it("loads without errors", () => {
    expect(actions).toBeDefined();
  });
  it("loadTodos works as expected", () => {
    const commit = jest.fn()
    actions.loadTodos({commit}, 123)
    expect(commit).toHaveBeenCalledWith("updateTodos", 123)
  });
  it("login works as expected", () => {
    const commit = jest.fn()
    actions.login({commit}, 123)
    expect(commit).toHaveBeenCalledWith("setUser", 123)
  });
});
