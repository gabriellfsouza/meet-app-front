export function meetupsListRequest() {
  return {
    type: '@meetups/LIST_REQUEST',
  };
}

export function meetupsListSuccess(meetups) {
  return {
    type: '@meetups/LIST_SUCCESS',
    payload: meetups,
  };
}

export function meetupsListFailure() {
  return {
    type: '@meetups/LIST_FAILURE',
  };
}

export function meetupRemoveRequest(id) {
  return {
    type: '@meetups/REMOVE_MEETUP_REQUEST',
    payload: { id },
  };
}

export function meetupRemoveSuccess(id) {
  return {
    type: '@meetups/REMOVE_MEETUP_SUCCES',
    payload: { id },
  };
}

export function meetupCreateRequest(meetup) {
  return {
    type: '@meetups/CREATE_MEETUP_REQUEST',
    payload: meetup,
  };
}

export function meetupCreateSuccess(meetup) {
  return {
    type: '@meetups/CREATE_MEETUP_SUCCESS',
    payload: meetup,
  };
}

export function meetupUpdateRequest(meetup) {
  return {
    type: '@meetups/UPDATE_MEETUP_REQUEST',
    payload: meetup,
  };
}

export function meetupUpdateSuccess(meetup) {
  return {
    type: '@meetups/UPDATE_MEETUP_SUCCESS',
    payload: meetup,
  };
}
