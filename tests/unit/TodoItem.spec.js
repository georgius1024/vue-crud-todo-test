import { shallowMount } from '@vue/test-utils'
import component from "@/components/TodoItem.vue"

describe('TodoItem', () => {
  it("mounts without errors", () => {
    const wrapper = shallowMount(component, {
      props: { todo: {
        _id: 101,
        name: 'todo',
        done: true
      } }
    })
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });
})