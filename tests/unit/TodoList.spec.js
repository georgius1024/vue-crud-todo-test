import { shallowMount } from "@vue/test-utils";
import component from "@/components/TodoList.vue";

describe("TodoList", () => {
  it("mounts without errors", () => {
    const wrapper = shallowMount(component, {
      props: {
        todos: [
          {
            _id: 101,
            name: "todo",
            done: true,
          },
        ],
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
