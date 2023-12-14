import React from 'react';
import './DetalhesEventoPage.css'
import api from '../../Services/Service';
import Title from '../../components/Title/Title';
import MainContent from '../../components/MainContent/MainContent';
import Container from '../../components/Container/Container';

const DetalhesEventoPage = () => {

    return(
        <>
        <MainContent>
        <Container>
        <Title titleText={"Detalhes do Evento"} potatoClass="custom-title"/>  
        
        </Container>
      </MainContent>   
        </>
    )        
        
 }

export default DetalhesEventoPage;