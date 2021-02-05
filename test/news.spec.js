import { mount } from '@vue/test-utils'

import News from '~/pages/news'

test('displays news page', () => {
  const page = mount(News)

  expect(page.text()).toContain('News')
})
