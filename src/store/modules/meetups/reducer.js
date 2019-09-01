import produce from 'immer';

const INITIAL_STATE = [];

export default function meetups(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetups/LIST_SUCCESS': {
        draft.splice(0);
        action.payload.forEach(meetup => draft.push(meetup));
        break;
      }
      case '@meetups/REMOVE_MEETUP_SUCCES': {
        const { id } = action.payload;
        const idx = draft.findIndex(m => m.id === id);
        draft.splice(idx, 1);
        break;
      }
      case '@meetups/CREATE_MEETUP_SUCCESS': {
        draft.push(action.payload);
        break;
      }
      case '@meetups/UPDATE_MEETUP_SUCCESS': {
        const idx = draft.findIndex(m => action.payload.id === m.id);
        draft[idx] = { ...draft[idx], ...action.payload };
        break;
      }
      default:
    }
  });
}
