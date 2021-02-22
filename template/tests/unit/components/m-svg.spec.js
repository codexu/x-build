import { mount } from '@vue/test-utils';
import MSvg from '@/components/m-svg/index.vue';

// SVG 组件
describe('@/components => m-static', () => {
  // 无参数 返回一个 svg
  test('type null', () => {
    const wrapper = mount(MSvg);
    expect(wrapper.find('use').attributes('href')).toEqual('#');
  });

  // 返回带 href 的 svg
  test('type null', () => {
    const wrapper = mount(MSvg, {
      propsData: {
        name: 'logo',
      },
    });
    expect(wrapper.find('use').attributes('href')).toEqual('#logo');
  });
});
