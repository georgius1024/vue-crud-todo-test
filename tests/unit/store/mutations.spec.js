import mutations from "@/store/mutations";

describe("store/mutations", () => {
  it("loads without errors", () => {
    expect(mutations).toBeDefined();
  });
  it("updateTodos works as expected", () => {
    const state = {}
    mutations.updateTodos(state, 123)
    expect(state.todos).toBe(123);
  });
  it("setUser works as expected", () => {
    const state = {}
    mutations.setUser(state, 123)
    expect(state.user).toBe(123);
  });
});
