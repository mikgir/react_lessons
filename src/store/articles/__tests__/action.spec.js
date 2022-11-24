import {GET_ARTICLES_REQUEST, getArticlesRequest} from "../actions";
import {getArticles} from "../reducer";

describe('getArticlesReq', ()=>{
    it('returns obj with predefined type', ()=>{
        const expected = {
            type: GET_ARTICLES_REQUEST,
        }
        const received = getArticlesRequest()
        expect(received).toEqual(expected)
    })
})
describe('getArticles', () => {
    it('dispatches getArticlesReq', ()=>{
        const mockDispatch = jest.fn()
        getArticles()(mockDispatch)

        expect(mockDispatch).toHaveBeenCalledWith(getArticlesRequest())
    })
})