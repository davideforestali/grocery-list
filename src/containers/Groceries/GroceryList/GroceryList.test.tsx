import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { Provider } from 'react-redux'
import GroceryList from './GroceryList'
import { BrowserRouter } from 'react-router-dom'
import { testStore } from '../../../test/testUtils'
import { addIngrToGroceryList } from '../../../helpers/helpers'
import moxios from 'moxios'
import { fetchGroceryList } from '../../../store/actions'

jest.mock('../../../helpers/helpers.ts')
jest.mock('../../../store/actions')

const groceryListTest = [
  'apples',
  'bananas'
]

const initialStateDefault = {
  groceries: {
    groceryList: [...groceryListTest]
  }
}

let store

const setup = (
  initialState = {...initialStateDefault},
  props = {}
) => {
  store = testStore(initialState)

  return mount(
    <BrowserRouter>
      <Provider store={store}>
        <GroceryList {...props} />
      </Provider>
    </BrowserRouter>
  )
}

describe('GroceryList component', () => {

  let wrapper: ReactWrapper
  beforeEach(() => wrapper = setup())

  it('renders with no errors', () => {
    expect(wrapper.exists()).toBe(true)
  })

  describe('insert new ingredient', () => {

    beforeEach(() => {
      moxios.install()
    })
    afterEach(() => {
      moxios.uninstall()
    })

    it('insert text in new ingredient input field when digit', () => {
      wrapper.find('.insert-input').find('textarea').simulate('change', {target: {value: 'coconut'}})
      expect(wrapper.find('.insert-input').find('textarea').prop('value')).toBe('coconut')
    })

    it('returns the updated grocery list when click on "insert" button', () => {
      wrapper.find('.insert-input').find('button').simulate('click')
      expect(addIngrToGroceryList).toHaveBeenCalled()
      
      const currentGrocery = store.getState().groceries.groceryList

      moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200,
          response: [
            ...currentGrocery,
            'coconut'
          ],
        })
      })

      return store.dispatch(fetchGroceryList())
        .then(() => {
          expect(currentGrocery).toBe([
            ...currentGrocery,
            'coconut'
          ])
        })
    })
  })

  it('clears list when click on clear button', () => {
    const clearButton = wrapper.find('[data-test=\'clear\']')

    const currentGrocery = store.getState().groceries.groceryList

    clearButton.simulate('click')

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: []
      })
    })

    return store.dispatch(fetchGroceryList())
      .then(() => {
        expect(currentGrocery).toBe([])
      })
  })
})
