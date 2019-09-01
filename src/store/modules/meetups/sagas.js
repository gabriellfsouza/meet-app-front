import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';

import api from '~/services/api';

import {
  meetupsListSuccess,
  meetupsListFailure,
  meetupRemoveSuccess,
  meetupCreateSuccess,
  meetupUpdateSuccess,
} from './actions';

export function* getMeetups() {
  try {
    const response = yield call(api.get, '/organizer');

    const meetups = response.data.map(
      ({ title, id, description, location, date, Banner, past }) => ({
        title,
        id,
        description,
        location,
        date,
        past,
        Banner: {
          url: Banner.url,
          name: Banner.name,
          id: Banner.id,
        },
      })
    );

    yield put(meetupsListSuccess(meetups));
  } catch (error) {
    toast.error('Erro ao obter os meetups, verifique sua conexão.');
    yield put(meetupsListFailure());
  }
}

export function* removeMeetup({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `/meetups/${id}`);
    toast.success('Meetup removido com sucesso.');
    history.push('/dashboard');

    yield put(meetupRemoveSuccess(id));
  } catch (error) {
    const message =
      (error &&
        error.response &&
        error.response.data &&
        error.response.data.error) ||
      'Erro ao remover a inscrição';
    toast.error(JSON.stringify(message));
  }
}

export function* addMeetup({ payload }) {
  try {
    const { banner_id, title, description, date, location } = payload;

    const response = yield call(api.post, 'meetups', {
      banner_id,
      title,
      description,
      date,
      location,
    });

    yield put(meetupCreateSuccess(response.data));

    toast.success('Meetup cadastrado com sucesso');
    history.push('/dashboard');
  } catch (error) {
    const message =
      (error &&
        error.response &&
        error.response.data &&
        error.response.data.error) ||
      'Erro ao cadastrar o meetup';
    toast.error(JSON.stringify(message));
  }
}

export function* updateMeetup({ payload }) {
  try {
    const { banner_id, title, description, date, location, id } = payload;

    const response = yield call(api.put, 'meetups', {
      banner_id,
      title,
      description,
      date,
      location,
      id,
    });

    yield put(meetupUpdateSuccess(response.data));

    toast.success('Meetup atualizado com sucesso');
    history.goBack();
  } catch (error) {
    const message =
      (error &&
        error.response &&
        error.response.data &&
        error.response.data.error) ||
      'Erro ao cadastrar o meetup';
    toast.error(JSON.stringify(message));
  }
}

export default all([
  takeLatest('@meetups/LIST_REQUEST', getMeetups),
  takeLatest('@meetups/REMOVE_MEETUP_REQUEST', removeMeetup),
  takeLatest('@meetups/CREATE_MEETUP_REQUEST', addMeetup),
  takeLatest('@meetups/UPDATE_MEETUP_REQUEST', updateMeetup),
]);
