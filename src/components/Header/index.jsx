import { RiShutDownLine } from 'react-icons/ri'

import { Container, Profile, Logout } from './styles'

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img 
          src="https://github.com/brunosduarte.png"
          alt="foto"
        />

        <div>
          <span>Bienvenido</span>
          <strong>Bruno D</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  
  )
}