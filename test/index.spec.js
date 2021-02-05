import { mount } from '@vue/test-utils'

import Home from '~/pages/index'

test('displays home page', () => {
  const page = mount(Home)

  expect(page.text()).toContain('The Tioga County, Pa Democrats')
})
