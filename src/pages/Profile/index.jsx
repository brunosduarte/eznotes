import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";

import { Container, Avatar, Form } from "./styles";

export function Profile(){
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img 
            src="https://github.com/brunosduarte.png"
            alt="Foto do usuario"
          />
          <label htmlFor="avatar">
            <FiCamera />

            <input 
              id="avatar"
              type="file"
            />
          </label> 
        </Avatar>

        <Input 
          type="text"
          placeholder="Nome"
          icon={FiUser}
        />

        <Input 
          type="text"
          placeholder="E-mail"
          icon={FiMail}
        />

        <Input 
          type="password"
          placeholder="Senha atual"
          icon={FiLock}
        />

        <Input 
          type="password"
          placeholder="Nova senha"
          icon={FiLock}
        />

        <Button title="Salvar" />

      </Form>

    </Container>
  )
}