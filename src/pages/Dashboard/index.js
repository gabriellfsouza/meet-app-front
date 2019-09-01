import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import DefaultButton from '~/components/DefaultButton';
import { Container, Resume } from './styles';
import { meetupsListRequest } from '~/store/modules/meetups/actions';

export default function Dashboard({ history }) {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetups);

  useEffect(() => {
    dispatch(meetupsListRequest());
  }, [dispatch]);

  function handlerNewMeetup() {
    history.push('/add');
  }

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <DefaultButton type="button" onClick={handlerNewMeetup}>
          <MdAddCircleOutline size={20} />
          Novo meetup
        </DefaultButton>
      </header>

      <ul>
        {meetups.map(meetup => (
          <Resume key={meetup.id}>
            <strong>{meetup.title}</strong>
            <span>
              {format(parseISO(meetup.date), "dd 'de' MMMM', às 'H", {
                locale: ptBR,
              })}
              <Link to={`/details/${meetup.id}`}>
                <MdChevronRight size={20} />
              </Link>
            </span>
          </Resume>
        ))}
      </ul>
    </Container>
  );
}

Dashboard.propTypes = {
  history: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.shape(),
  ]),
};

Dashboard.defaultProps = {
  history: {},
};
