jest.mock("@/services/todos");
import * as todos from "@/services/todos";
import { shallowMount } from "@vue/test-utils";
import component from "@/App.vue";
import flushPromises from "flush-promises";

describe("app", () => {
  const list = [
    { _id: 101, name: "todo item", done: true },
    { _id: 102, name: "another todo item", done: true },
  ]
  beforeEach(() => {
    todos.list = jest.fn().mockResolvedValue([...list]);
  })
  it("mounts without errors", async () => {
    const wrapper = shallowMount(component);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
    await flushPromises();
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).toMatchSnapshot();
    expect(todos.list).toHaveBeenCalled();
    expect(wrapper.vm.todos).toHaveLength(2);
    expect(wrapper.vm.todos[0]).toHaveProperty("name", "todo item");
  });
  it("adds todo item", async () => {
    const wrapper = shallowMount(component);
    await flushPromises();
    await wrapper.vm.$nextTick();
    wrapper.setData({ text: "new todo item" });
    todos.add = jest.fn().mockResolvedValue(103);
    await wrapper.vm.add();
    await wrapper.vm.$nextTick();
    expect(todos.add).toHaveBeenCalled();
    expect(wrapper.vm.todos).toHaveLength(3);
    expect(wrapper.vm.todos[2]).toHaveProperty("name", "new todo item");
  });
  it("removes todo item", async () => {
    const wrapper = shallowMount(component);
    await flushPromises();
    await wrapper.vm.$nextTick();
    todos.remove = jest.fn().mockResolvedValue();
    await wrapper.vm.remove(wrapper.vm.todos[0]);
    await wrapper.vm.$nextTick();
    expect(todos.remove).toHaveBeenCalled();
    expect(wrapper.vm.todos).toHaveLength(1);
  });
  it("toggles todo item", async () => {
    const wrapper = shallowMount(component);
    await flushPromises();
    await wrapper.vm.$nextTick();
    todos.update = jest.fn().mockResolvedValue();
    await wrapper.vm.toggle(wrapper.vm.todos[0]);
    await wrapper.vm.$nextTick();
    expect(todos.update).toHaveBeenCalled();
    expect(wrapper.vm.todos[0]).toHaveProperty("done", false);
  });
});
