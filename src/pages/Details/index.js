import React from 'react';
import {
  MdModeEdit,
  MdLocationOn,
  MdEvent,
  MdDeleteForever,
} from 'react-icons/md';
import DefaultButton from '~/components/DefaultButton';
import { Container, Description } from './styles';

// será substituído pelo src da imagem gravada no repositório
import meetupPhoto from '~/assets/meetup de react native.jpg';

export default function Details() {
  return (
    <Container>
      <header>
        <h1>Meetup de React Native</h1>
        <span>
          <DefaultButton className="edit" type="button">
            <MdModeEdit size={20} />
            Editar
          </DefaultButton>
          <DefaultButton type="button">
            <MdDeleteForever size={20} />
            Cancelar
          </DefaultButton>
        </span>
      </header>

      <Description>
        <img src={meetupPhoto} alt="Meetup de React Native" />
        <p>
          O Meetup de React Native é um evento que reúne a comunidade de
          desenvolvimento mobile utilizando React a fim de compartilhar
          conhecimento. Todos são convidados.
        </p>
        <p>
          Caso queira participar como palestrante do meetup envie um e-mail para
          o rganizacao@meetuprn.com.br.
        </p>
        <footer>
          <span className="date">
            <MdEvent />
            24 de Junho, às 20h
          </span>
          <span className="location">
            <MdLocationOn />
            Rua Guilherme Gembala, 260
          </span>
        </footer>
      </Description>
      {/* <ul>
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
      </ul> */}
    </Container>
  );
}
