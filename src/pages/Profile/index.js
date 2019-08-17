import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import { Container } from './styles';

export default function Profile() {
  return (
    <Container>
      <Form>
        <Input name="name" placeholder="Nome completo" />
        <Input type="email" name="email" placeholder="Digite seu e-mail" />

        <hr />

        <Input type="password" name="oldPassword" placeholder="Senha atual" />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmção de senha"
        />

        <button type="submit">
          <MdAddCircleOutline size={20} />
          Salvar perfil
        </button>
      </Form>
    </Container>
  );
}
