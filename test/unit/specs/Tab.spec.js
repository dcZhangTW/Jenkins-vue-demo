import Vue from 'vue'
import Tab from '@/components/Tab'
import routes from '@/router'
import VueRouter from 'vue-router'

const mockRouter = new VueRouter(routes)

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
      },
      router: mockRouter
    }).$mount()
    expect(vm.$el.querySelectorAll('ul li').length).to.equal(1)
    expect(vm.$el.querySelector('li a span').innerText).to.equal('Test')
  })
})
