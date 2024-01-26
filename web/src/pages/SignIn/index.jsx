import { useState } from "react";
import { Container, Form, Background } from "./styles";

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock } from "react-icons/fi";

export function SignIn() { 
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

    const {signIn} = useAuth();

    function handleSignIn() {
        signIn({email, password});
    }

    return(
        <Container>
            <Form>
                <h1>Ez Notes</h1>
                <p>Manage your links</p>

                <h2>Login</h2>

                <Input 
                placeholder="E-mail" 
                type="text" 
                icon={FiMail}
                onChange={e => setEmail(e.target.value)}
                />
                <Input 
                placeholder="Password" 
                type="password" 
                icon={FiLock}
                onChange={e => setPassword(e.target.value)}
                />

                <Button title="Sign In" onClick={handleSignIn}/>

                <Link to="/register">Sign Up</Link>
            </Form>

            <Background/>
        </Container>
    );
}