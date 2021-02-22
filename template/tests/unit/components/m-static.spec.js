import { mount } from '@vue/test-utils';
import MStatic from '@/components/m-static/index.vue';

// 设置环境变量
process.env.VUE_APP_STATIC_URL = 'https://oss.com/';

// 静态资源组件
describe('@/components => m-static', () => {
  // 无参数 返回一个 img
  test('type null', () => {
    const wrapper = mount(MStatic);
    expect(wrapper.element.tagName).toEqual('IMG');
  });

  // 测试 props src 属性
  test('src', () => {
    const wrapper = mount(MStatic, {
      propsData: {
        src: 'example.jpg',
      },
    });
    expect(wrapper.attributes('src')).toEqual('https://oss.com/example.jpg');
  });

  // 测试 props type 图片
  test('type img', () => {
    const wrapper = mount(MStatic, {
      propsData: {
        type: 'img',
      },
    });
    expect(wrapper.element.tagName).toEqual('IMG');
  });

  // 测试 props type 视频
  test('type video', () => {
    const wrapper = mount(MStatic, {
      propsData: {
        type: 'video',
      },
    });
    expect(wrapper.element.tagName).toEqual('VIDEO');
  });

  // 测试 props type 其他 生成音频
  test('type other / audio', () => {
    const wrapper = mount(MStatic, {
      propsData: {
        type: 'other',
      },
    });
    expect(wrapper.element.tagName).toEqual('AUDIO');
  });
});
