import React from 'react';

import { Form, Input, Textarea } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import DefaultButton from '~/components/DefaultButton';
import ImageInput from '~/components/ImageInput';
import { Container } from './styles';

export default function AddEdit() {
  // const { profile } = useSelector(state => state.user);

  function handleSubmit() {}

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <ImageInput name="TESTE" />
        <Input name="TESTE" placeholder="Título do Meetup" />
        <Textarea name="TESTE" placeholder="Descrição completa" />
        <Input name="TESTE" placeholder="Data do meetup" />
        <Input name="TESTE" placeholder="Localização" />

        <DefaultButton type="submit">
          <MdAddCircleOutline size={20} />
          Salvar meetup
        </DefaultButton>
      </Form>
    </Container>
  );
}
