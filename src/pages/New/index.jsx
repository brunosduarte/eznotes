import { useState } from "react";

import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, Form } from "./styles";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";



export function New() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    function handleAddLink() {
        setLinks(prevState => [...prevState, newLink])
        setNewLink("");
    }

    function handleRemoveLink(deleted) {
        setLinks(prevState => prevState.filter(link => link !== deleted));
    }

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNewNote() {

        if (!title) {
            return alert("Digite o título da nota.")
        }

        if (newLink) {
            return alert("Você deixou uma link no campo para adicionar, mas não clicou para adicionar.")
        }
        
        if (newTag) {
            return alert("Você deixou uma tag no campo para adicionar, mas não clicou para adicionar.")
        }


        await api.post("/notes", {
            title,
            description,
            tags,
            links
        });

        alert("Nota Criada com sucesso!");
        navigate(-1);
    }

    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <ButtonText 
                            title="Voltar"
                            onClick={handleBack}
                        />
                    </header>

                    <Input 
                    placeholder="Titulo"
                    onChange={e => setTitle(e.target.value)}
                    />

                    <Textarea 
                    placeholder="Observações"
                    onChange={e => setDescription(e.target.value)}
                    />

                    <Section title="Links úteis">
                        {
                            links.map((link, index) => (
                                <NoteItem 
                                key={String(index)}
                                value={link}
                                onClick={() => handleRemoveLink(link)}
                        />
                            ))
                        }
                        <NoteItem 
                        isNew 
                        placeholder="Novo Link"
                        value={newLink}
                        onChange={e => setNewLink(e.target.value)}
                        onClick={handleAddLink}
                        />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            {
                                tags.map((tag, index) => (
                                <NoteItem 
                                key={String(index)}
                                value={tag}
                                onClick={() => handleRemoveTag(tag)}
                                />
                                ))
                            }

                        <NoteItem 
                        isNew 
                        placeholder="Nova Tag"
                        onChange={e => setNewTag(e.target.value)}
                        value={newTag}
                        onClick={handleAddTag}
                        />
                        </div>
                    </Section>

                    <Button 
                    title="Salvar"
                    onClick={handleNewNote}
                    />
                </Form>
            </main>
        </Container>
    );
}