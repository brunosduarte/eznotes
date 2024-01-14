import { useState } from "react";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Avatar, Form } from "./styles";

export function Profile(){
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate(){
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
      updateProfile
    }
    await updateProfile({ user, avatarFile });
  }

  function handleChangeAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
    
  }
  
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
            src={avatar}
            alt="Foto do usuario"
          />
          <label htmlFor="avatar">
            <FiCamera />

            <input 
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label> 
        </Avatar>

        <Input 
          type="text"
          placeholder="Nome"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input 
          type="text"
          placeholder="E-mail"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          type="password"
          placeholder="Senha atual"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input 
          type="password"
          placeholder="Nova senha"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />

      </Form>
    </Container>
  )
}