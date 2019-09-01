import React from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import {
  MdModeEdit,
  MdLocationOn,
  MdEvent,
  MdDeleteForever,
} from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import DefaultButton from '~/components/DefaultButton';
import { Container, Description } from './styles';
import { meetupRemoveRequest } from '~/store/modules/meetups/actions';

export default function Details({ match, history }) {
  const dispatch = useDispatch();
  const { id } = match.params;

  const meetup = useSelector(
    // state => state.meetups
    state => state.meetups.find(mt => Number(mt.id) === Number(id))
  );

  function handleRemove() {
    dispatch(meetupRemoveRequest(meetup.id));
  }

  function handleEdit() {
    history.push(`/edit/${meetup.id}`);
  }

  return (
    <Container>
      <header>
        <h1>{meetup.title}</h1>

        {!meetup.past && (
          <span>
            <DefaultButton onClick={handleEdit} className="edit" type="button">
              <MdModeEdit size={20} />
              Editar
            </DefaultButton>
            <DefaultButton onClick={handleRemove} type="button">
              <MdDeleteForever size={20} />
              Cancelar
            </DefaultButton>
          </span>
        )}
      </header>

      <Description>
        <img src={meetup.Banner.url} alt={meetup.Banner.name} />
        <p>
          {meetup.description.split('\n').map((el, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <span key={idx}>
              {el}
              <br />
            </span>
          ))}
        </p>
        <footer>
          <span className="date">
            <MdEvent />
            {format(parseISO(meetup.date), "dd' de 'MMMM', 'H:mm'h'", {
              locale: ptBR,
            })}
          </span>
          <span className="location">
            <MdLocationOn />
            {meetup.location}
          </span>
        </footer>
      </Description>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
