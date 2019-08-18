import React from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import DefaultButton from '~/components/DefaultButton';
import { Container, Resume } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <DefaultButton type="button">
          <MdAddCircleOutline size={20} />
          Novo meetup
        </DefaultButton>
      </header>

      <ul>
        <Resume>
          <strong>Meetup react native</strong>
          <span>
            24 de Junho, às 20
            <Link to="/details">
              <MdChevronRight size={20} />
            </Link>
          </span>
        </Resume>
        <Resume>
          <strong>Meetup react native</strong>
          <span>
            24 de Junho, às 20
            <Link to="/details">
              <MdChevronRight size={20} />
            </Link>
          </span>
        </Resume>
      </ul>
    </Container>
  );
}
