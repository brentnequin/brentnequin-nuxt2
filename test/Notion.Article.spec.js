import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import NotionArticle from '@/components/Notion/Article.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('NotionArticle', () => {

    let actions
    let store

    beforeEach(() => {
        actions = {
            getPage: jest.fn(),
            getPageBlocks: jest.fn()
        }
        store = new Vuex.Store({
            actions
        })
    })

    test('is a Vue instance', () => {
        const wrapper = shallowMount(NotionArticle, { store, localVue })
        expect(wrapper.vm).toBeTruthy()
    })
})
