/*
import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Perfil from './images/LuminusEletricidade.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados profissionais</h2>
        <CardGrande 

          imagem={Perfil}

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

          imagem = {Perfil}

          nome="Email: crftorres@hotmail.com"
        />        
      </div>

      <div className="page-section-container">
        <CardPequeno 

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

export default App; */

import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Perfil from './images/LuminusEletricidade.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Especificações - filtros dos geradores</h2>
        <CardGrande 

          imagem={Perfil}

          nome="LUMINUS ELETRICIDADE, GERADORES E SERVIÇOS EIRELI" 
          descricao="Avenida Guerra Junqueira, 
                     Figueira, Duque de Caxias - RJ, 25231-190, Brasil"
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2></h2>

        <CardGrande 
          
          imagem={Perfil}

          nome="ARM XERÉM" 
          descricao="Filtro diesel: PSD460/I
                     Filtro lubrificante: PSL339
                     Filtro Separador: PSD460/1
                     Filtro de Ar: FPA2115"         
        />
        
        <CardGrande 
          
          imagem={Perfil}

          nome="CONSPIRAÇÃO FILMES"
          descricao="Filtro diesel: 2 pc2/255
                     Filtro lubrificante: Efl745
                     Filtro Separador: Na
                     Filtro de Ar: Na"         
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="VIVA RIO - CLINICA DA FAMÍLIA BELIZARIO PENA"
          descricao="Filtro diesel:  (1) psc72/2
                     Filtro lubrificante: (1) psl 321
                     Filtro Separador: Na
                     Filtro de Ar: Na"         
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="CMS AGUIAR TORRES"
          descricao="Filtro diesel:  
                     Filtro lubrificante:  
                     Filtro Separador:  
                     Filtro de Ar:"         
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="COLÉGIO PEDRO II - 220-002"
          descricao="Filtro diesel:  
                     Filtro lubrificante:  
                     Filtro Separador:  
                     Filtro de Ar:"         
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="ADAO PEREIRA NUNES - 550-001"
          descricao="Filtro diesel: scania 1763776
                     Filtro lubrificante: psl 417
                     Filtro Separador: scania 1518512
                     Filtro de Ar: fpa 198"         
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="ADAO PEREIRA NUNES - 550-002"
          descricao="Filtro diesel: scania 1763776
                     Filtro lubrificante: psl 417
                     Filtro Separador: scania 1518512
                     Filtro de Ar: fpa 198"         
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="WPF SOLUÇÕES - Maternidade"
          descricao="Filtro diesel: ECO796
                     Filtro lubrificante: WO480
                     Filtro Separador: Na
                     Filtro de Ar: ARS3003"         
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="WPF SOLUÇÕES - UPA 24h"
          descricao="Filtro diesel: TB181i
                     Filtro lubrificante: Psl280
                     Filtro Separador: PSC410
                     Filtro de Ar: Da 1320"         
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="WPF SOLUÇÕES - HOSPITAL CAMPANHA"
          descricao="Filtro diesel: PSC72/2
                     Filtro lubrificante: PSL282
                     Filtro Separador: PSC410
                     Filtro de Ar: DA 317"         
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