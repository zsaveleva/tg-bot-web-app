import axios from '../../axios'
import { campsFetching, campsFetchingError, campsFetchingSuccess } from './camps'

export const fetchCamps = (parameters) => async (dispatch) => {
    try {
        dispatch(campsFetching())
        const cardsResponce = await axios.get(`/camps?${parameters}`)
        dispatch(campsFetchingSuccess(cardsResponce.data))
    } catch (e) {
        if (e instanceof Error) {
            dispatch(campsFetchingError(e.message))
        }
    }
}