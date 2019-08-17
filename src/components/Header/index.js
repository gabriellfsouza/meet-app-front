import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/logo.svg';

import { Container, Content, Profile } from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const { name } = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="MeetApp" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <button type="button" onClick={handleSignOut}>
              Sair
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
