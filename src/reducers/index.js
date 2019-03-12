import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading, itemDetail } from './items';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    itemDetail
});
