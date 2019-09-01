import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';

import { updateProfileRequest } from '~/store/modules/user/actions';
import DefaultButton from '~/components/DefaultButton';
import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  oldPassword: Yup.string().notRequired(),
  password: Yup.string().when('oldPassword', {
    is: val => val.length > 0,
    then: Yup.string().min(6, 'No mínimo 6 caracteres'),
  }),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'As senhas devem bater.'
  ),
});

export default function Profile() {
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.user);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form schema={schema} initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input type="email" name="email" placeholder="Digite seu e-mail" />

        <hr />

        <Input type="password" name="oldPassword" placeholder="Senha atual" />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />

        <DefaultButton type="submit">
          <MdAddCircleOutline size={20} />
          Salvar perfil
        </DefaultButton>
      </Form>
    </Container>
  );
}
