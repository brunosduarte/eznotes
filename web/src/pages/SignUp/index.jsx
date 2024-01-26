import { useState } from "react";

import { Container, Form, Background } from "./styles";

import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if (!name || !email || !password) {
            return alert("Fill all fields!")
        }

        api.post("/users", {name, email, password})
        .then(() => {alert("User registered successfully!");
        navigate("/");
        })
        .catch( error => {
            if (error.response) {
                alert(error.response.data.message);
            }else {
                alert("Not possible to register")
            }
        })
    }

    return(
        <Container>
        <Background/>
            <Form>
                <h1>Ez Notes</h1>
                <p>Manage your links</p>

                <h2>Create your account</h2>

                <Input 
                placeholder="Name" 
                type="text" 
                icon={FiUser}
                onChange = {e => setName(e.target.value)}
                />

                <Input 
                placeholder="E-mail" 
                type="text" 
                icon={FiMail}
                onChange = {e => setEmail(e.target.value)}
                />

                <Input 
                placeholder="Password" 
                type="password" 
                icon={FiLock}
                onChange = {e => setPassword(e.target.value)}
                />

                <Button title="Register" onClick={handleSignUp}/>

                <Link to="/">back to login</Link>
            </Form>
        </Container>
    );
}