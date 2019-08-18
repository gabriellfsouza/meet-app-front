import React from 'react';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import DefaultButton from '~/components/DefaultButton';
import { Container, Resume } from './styles';

export default function Details() {
  return (
    <Container>
      <header>
        <h1>Meetup de React Native</h1>
        <span>
          <DefaultButton type="button">
            <MdAddCircleOutline size={20} />
            Editar
          </DefaultButton>
          <DefaultButton type="button">
            <MdAddCircleOutline size={20} />
            Cancelar
          </DefaultButton>
        </span>
      </header>

      <ul>
        <Resume>
          <strong>Meetup react native</strong>
          <span>
            24 de Junho, às 20
            <button type="button">
              <MdChevronRight size={20} />
            </button>
          </span>
        </Resume>
        <Resume>
          <strong>Meetup react native</strong>
          <span>
            24 de Junho, às 20
            <button type="button">
              <MdChevronRight size={20} />
            </button>
          </span>
        </Resume>
      </ul>
    </Container>
  );
}
