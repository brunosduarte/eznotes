import { RiShutDownLine } from 'react-icons/ri'

import { Container, Profile, Logout } from './styles'

export function Header() {
  return (
    <Container>
      <Profile>
        <img 
          src="https://github.com/brunosduarte.png"
          alt="foto"
        />

        <div>
          <span>benvenido</span>
          <strong>BruSd</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  
  )
}