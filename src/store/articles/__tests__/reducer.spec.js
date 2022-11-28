import {articleReducer} from "../reducer";
import {FETCH_STATUSES} from "../../../utils/constants";
import {getArticlesRequest} from "../actions";

describe('article reducer', () => {
    it('sets error to null if called with request action', () => {
        const result = articleReducer(
            {
                data: [],
                status: FETCH_STATUSES.IDLE,
                error: 'some error'
            },
            getArticlesRequest()
        )
        expect(result.error).toBeNull()
    })
})

