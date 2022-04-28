jest.mock("axios");
import http from "axios";
import * as todos from "@/services/todos";

describe("todos service", () => {
  it("imports without errors", () => {
    expect(todos).toBeDefined();
    expect(typeof todos).toBe("object");
    expect(todos).toHaveProperty("list");
    expect(todos).toHaveProperty("add");
    expect(todos).toHaveProperty("update");
    expect(todos).toHaveProperty("remove");
  });
  it("list works as expected", async () => {
    http.get = jest.fn().mockResolvedValue({ data: [1,2,3], status: 200 });
    const list = await todos.list();
    expect(list).toEqual([1,2,3]);
    expect(http.get).toHaveBeenCalled()
  });
  it("add works as expected", async () => {
    http.post = jest.fn().mockResolvedValue({ data: {_id: 101}, status: 200 });
    const id = await todos.add({});
    expect(id).toEqual(101);
    expect(http.post).toHaveBeenCalled()
  });
  it("update works as expected", async () => {
    http.put = jest.fn().mockResolvedValue({ status: 200 });
    await todos.update(101, {});
    expect(http.put).toHaveBeenCalled()
  });
  it("remove works as expected", async () => {
    http.delete = jest.fn().mockResolvedValue({ status: 200 });
    await todos.remove(101);
    expect(http.delete).toHaveBeenCalled()
  });
});
