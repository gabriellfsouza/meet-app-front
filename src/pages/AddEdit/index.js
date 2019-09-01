import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { parseISO } from 'date-fns';

import { Form, Input, Textarea } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import DefaultButton from '~/components/DefaultButton';
import ImageInput from '~/components/ImageInput';
import DatePicker from '~/components/DatePicker';
import { Container } from './styles';
import {
  meetupCreateRequest,
  meetupUpdateRequest,
} from '~/store/modules/meetups/actions';

const schema = Yup.object().shape({
  banner_id: Yup.number()
    .transform(value => (!value ? undefined : value))
    .required('Banner é obrigatório'),
  title: Yup.string().required('O título é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  date: Yup.date()
    .min(new Date(), 'Favor inserir uma data/horário maiores que as atuais')
    .required('A data é obrigatória'),
  location: Yup.string().required('A localização é obrigatória'),
});

export default function AddEdit({ match }) {
  const dispatch = useDispatch();
  const { id } = match.params;
  const { Banner, title, description, date: strDate, location } = useSelector(
    state => {
      return state.meetups.find(m => String(m.id) === id) || {};
    }
  );
  const date = strDate ? parseISO(strDate) : undefined;

  // eslint-disable-next-line no-shadow
  function handleSubmit({ banner_id, title, description, date, location }) {
    dispatch(
      !id
        ? meetupCreateRequest({ banner_id, title, description, date, location })
        : meetupUpdateRequest({
            banner_id,
            title,
            description,
            date,
            location,
            id,
          })
    );
  }

  return (
    <Container>
      <Form
        schema={schema}
        onSubmit={handleSubmit}
        initialData={{
          banner_id: (Banner && Banner.id) || undefined,
          title,
          description,
          date,
          location,
        }}
      >
        <ImageInput name="banner_id" source={Banner} />
        <Input name="title" placeholder="Título do Meetup" maxLength={255} />
        <Textarea
          name="description"
          placeholder="Descrição completa"
          maxLength={1000}
        />
        <DatePicker
          name="date"
          placeholder="Data do meetup"
          minDate={new Date()}
          showTimeSelect
          dateFormat="dd/MM/yyyy HH:mm"
        />
        <Input name="location" placeholder="Localização" maxLength={255} />

        <DefaultButton type="submit">
          <MdAddCircleOutline size={20} />
          Salvar meetup
        </DefaultButton>
      </Form>
    </Container>
  );
}

AddEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

AddEdit.defaultProps = {
  match: {
    params: {
      id: null,
    },
  },
};
