import Vue from 'vue'
import Tab from '@/components/Tab'

describe('Tab', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Tab)
    const vm = new Constructor({
      propsData: {
        tabs: [
          {
            name: 'Test',
            path: '/'
          }
        ]
      }
    }).$mount()
    expect(vm.$el.querySelector('li').length).to.equal(1)
    expect(vm.$el.querySelector('li a span')[0].text).to.equal('Test')
  })
})
