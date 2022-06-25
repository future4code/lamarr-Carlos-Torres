import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import { Perfil } from './imagens/Perfil_Foto.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados profissionais</h2>
        <CardGrande 

          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png"

          nome="Carlos Roberto Fernandes Torres." 
          descricao="Olá, sou Carlos Torres estudante de engenharia elétrica; PCM da Luminus eletricidade desde maio de 2022 
          e tenho formação superior em TI, acumulando formação técnica em eletrotécnica."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 

          imagem={Perfil}

          //imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png"
          
          nome="Email: crftorres@hotmail.com"

        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 

          //imagem="C:\Labenu\lamarr-Carlos-Torres\modulo3\props-labedin\labedin\src\components\CardPequeno\Perfil_Foto.png"

          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png"
          
          nome="Endereço: Rua João Maranhão, 58 – Bairro Sítio Cercado – CEP 81.925-267 Curitiba - Paraná"
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Projetos sociais na área de educação" 
          descricao="  Professor de português, inglês e suas respectivas literaturas EJA (Escola para jovens e adultos) 
                    na escola municipal Leo Joas – Estrela/RS; tutor para o ensino de língua inglesa no projeto Freire 
                    Mandela pela universidade Veiga de Almeida/RJ."         
        />
        
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2019/03/nasa-logo-0-768x768.png" 
          nome="LUMINUS ELETRICIDADE" 
          descricao="  Implantou o sistema PCM para preenchimento de OS pelo técnico via celular; organizou controle 
                    de qualidade reduzindo custos de manutenção; estruturou dados do sistema PCM para banco de dados 
                    relacional SQL SERVER aplicando business intelligence, data science, data warehouse e big Data; 
                    ministrou treinamento presencial e online para técnicos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;