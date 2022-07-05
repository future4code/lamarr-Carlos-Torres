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
//import CardPequeno from './components/CardPequeno/CardPequeno';
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

          nome="FIOTEC - FUNDACAO PARA O DESENVOLVIMENTO CIENTIFICO E TECNOL  -  (FIOTEC_181-001)"
          descricao="Filtro diesel: 2 fcd 2093 fcd 2096
                     Filtro lubrificante: WD 612
                     Filtro água: 0
                     Filtro Separador: FCD 2096
                     Filtro de Ar: NÃO INFORMADO"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="FIOTEC - FUNDACAO PARA O DESENVOLVIMENTO CIENTIFICO E TECNOL  -  (FIOTEC_300-001)"
          descricao="Filtro diesel: 2 wk 731 wk 940/7
                     Filtro lubrificante: lf 3959
                     Filtro água: Não possui
                     Filtro Separador: WK 940/7
                     Filtro de Ar: NÃO INFORMADO"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="IREP BRASIL PRESTACAO DE SERVICOS TERCERIZADOS LTDA -         (IREP_450-001)"
          descricao="Filtro diesel: 22480372
                     Filtro lubrificante: 1 uni 21707132  /  2 uni 21707133
                     Filtro água: Não possui
                     Filtro Separador: Racor R260P
                     Filtro de Ar: 21702911"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="WL DISTRIBUIDORA RJ LTDA"
          descricao="Filtro diesel: PSC72/2  -  FCD2041
                     Filtro lubrificante: PSL280
                     Filtro água: Não possui
                     Filtro Separador: R9010m
                     Filtro de Ar: HP7997"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="TB FORTE     (TB_500-001)"
          descricao="Filtro diesel: PSC289
                     Filtro lubrificante: PSL909
                     Filtro água: PSA761
                     Filtro Separador: PSC289
                     Filtro de Ar: AF928M"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="TB FORTE"
          descricao="Filtro diesel: Psc289
                     Filtro lubrificante: Psl 908
                     Filtro água: Psa761
                     Filtro Separador: Na
                     Filtro de Ar: Af928m"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="ASSOCIACAO DOS MORADORES DO LOTEAMENTO RIVIERA DEL SOL      (RIVIERA_40-001)"
          descricao="Filtro diesel: 817G
                     Filtro lubrificante: 585d
                     Filtro água: Não possui
                     Filtro Separador: Não possui
                     Filtro de Ar: DC240L"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="ASSOCIACAO DOS MORADORES DO LOTEAMENTO RIVIERA DEL SOL      (RIVIERA_145-001)"
          descricao="Filtro diesel: PC2/255
                     Filtro lubrificante: PSL283
                     Filtro água: Não possui
                     Filtro Separador: PC2/255
                     Filtro de Ar: 8041322"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="ROYAL RIO PALACE HOTEL LTDA"
          descricao="Filtro diesel: 2 psc172
                     Filtro lubrificante: Psl300
                     Filtro água: Psa761
                     Filtro Separador: Na
                     Filtro de Ar: Sp"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="MEIO DO MATO EVENTOS"
          descricao="Filtro diesel: (1) elemento
                     Filtro lubrificante: (1) PSL900
                     Filtro água: 0
                     Filtro Separador: 0
                     Filtro de Ar: (1) TR 28910"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="ESPAÇO GALERIA JARDIM"
          descricao="Filtro diesel: (1) elemento
                     Filtro lubrificante: (1) PSL900
                     Filtro água: 0
                     Filtro Separador: 0
                     Filtro de Ar: (1) TR 28910"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="ALESAT COMBUSTIVEIS S.A"
          descricao="Filtro diesel: PSC72/2
                     Filtro lubrificante: PSL300
                     Filtro água: PSA331
                     Filtro Separador: PSC410
                     Filtro de Ar: AH-1100"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="HOSPITAL HFB - W A SIQUEIRA ENGENHARIA LTDA   (HGB_450-003)"
          descricao="Filtro diesel: (2) FCD 2048
                     Filtro lubrificante: (1) PSL300
                     Filtro água: (1) PSA761
                     Filtro Separador: (1) RACOR 1000 FH 2020 PM
                     Filtro de Ar: (1) FPA 3005"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="HOSPITAL HFB - W A SIQUEIRA ENGENHARIA LTDA   (HGB_450-004)"
          descricao="Filtro diesel: (2) FCD 2048
                     Filtro lubrificante: (1) PSL300
                     Filtro água: (1)PSA761
                     Filtro Separador: (1) RACOR 1000 FH 2020 PM
                     Filtro de Ar: (1) FPA 3005"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="HOSPITAL HFB - W A SIQUEIRA ENGENHARIA LTDA   (HGB_450-005)"
          descricao="Filtro diesel: (2)FCD 2048
                     Filtro lubrificante: (1) PSL300
                     Filtro água: (1)PSA761
                     Filtro Separador: (1) RACOR 1000 FH 2020 MP
                     Filtro de Ar: (1) FPA3005"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="HOSPITAL HFB - W A SIQUEIRA ENGENHARIA LTDA   (HGB_450-006)"
          descricao="Filtro diesel: (2) FCD2048
                     Filtro lubrificante: (1) PSL300
                     Filtro água: (1) PSA761
                     Filtro Separador: (1) RACOR 1000 FH 2020 PM
                     Filtro de Ar: (1) FPA3005"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="HOSPITAL HFB - W A SIQUEIRA ENGENHARIA LTDA   (HGB_450-002)"
          descricao="Filtro diesel: (2) FCD2048
                     Filtro lubrificante: (1) PSL300
                     Filtro água: (1) PSA761
                     Filtro Separador: (1)RACOR 1000 FH 2020 PH
                     Filtro de Ar: (1) FPA3005"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="HOSPITAL HFB - W A SIQUEIRA ENGENHARIA LTDA   (HGB_450-001)"
          descricao="Filtro diesel: (2) FCD 2048
                     Filtro lubrificante: (1) PSL300
                     Filtro água: (1) PSA761
                     Filtro Separador: (1) RACOR 1000 FH 2020 PM
                     Filtro de Ar: (1) FPA 3005"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="ANDREANI LOGISTICA LTDA"
          descricao="Filtro diesel: Mergulhado
                     Filtro lubrificante: Mergulhado
                     Filtro Separador: PSD470/1
                     Filtro de Ar: 1421021"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="HOSPITAL ESTADUAL ADÃO PEREIRA NUNES - SES     (550-001)"
          descricao="Filtro diesel: 2 scania 1518512 1763776
                     Filtro lubrificante: 1 lf 3321
                     Filtro Separador: 0
                     Filtro de Ar: 0"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="HOSPITAL ESTADUAL ADÃO PEREIRA NUNES - SES     (550-002)"
          descricao="Filtro diesel: PSC 84
                     Filtro lubrificante: PSL 417
                     Filtro Separador: PSD 470/ 1
                     Filtro de Ar: FPA 198"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="HOSPITAL ESTADUAL ADÃO PEREIRA NUNES - SES     (SUBMG_1000-002/ GMG2)"
          descricao="Filtro diesel: Sn
                     Filtro lubrificante: Sn
                     Filtro de água: Sn
                     Filtro Separador: Wk1060/2
                     Filtro de Ar: 1625155"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="HOSPITAL ESTADUAL ADÃO PEREIRA NUNES - SES     (SUBMG_1000-002/ GMG1)"
          descricao="Filtro diesel: Sn
                     Filtro lubrificante: Sn
                     Filtro de água: Sn
                     Filtro Separador: Wk1060/2
                     Filtro de Ar: 1925155"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="PREFEITURA DE JAPERI"
          descricao="Filtro diesel: psc72/2
                     Filtro lubrificante: WO 710
                     Filtro de água: Psa299
                     Filtro Separador: 500a
                     Filtro de Ar: DA352"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="WPF 5 - SECRETARIA MUNICIPAL DE SAÚDE - PIRANEMA"
          descricao="Filtro diesel: KW723
                     Filtro lubrificante: PSL300
                     Filtro de água: PSA331
                     Filtro Separador: HDF500A
                     Filtro de Ar: DA 352"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="TUPPERWARE"
          descricao="Filtro diesel: (2) ECO796
                     Filtro lubrificante: (1) PSL 283
                     Filtro Separador: 0
                     Filtro de Ar: (1) Ar S3003"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="ORAMA DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS SA"
          descricao="Filtro diesel: 2- eco796
                     Filtro lubrificante: Psl283
                     Filtro Separador: Na
                     Filtro de Ar: P781039"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="RIOSAUDE - UPA 24H MAGALHÃES BASTOS"
          descricao="Filtro diesel: 2 pc 2/255
                     Filtro lubrificante: PSL 283
                     Filtro Separador: 0
                     Filtro de Ar: L 57472 11"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="WPF 1 - CASA DE SAÚDE"
          descricao="Filtro diesel: 2 psc496 psc 496
                     Filtro lubrificante: p550920
                     Filtro Separador: 1 pc2 15t
                     Filtro de Ar: DR 1329/1"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="WPF 6 - UNIDADE PRÉ HOSPITALAR"
          descricao="Filtro diesel: 2 uni PSC496
                     Filtro lubrificante: P550920
                     Filtro Separador: PC2/155
                     Filtro de Ar: 289 2348"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="ROMEU GONCALO SOARES 59643331768"
          descricao="Filtro diesel: 2 psc 496
                     Filtro lubrificante: p550920
                     Filtro Separador: 1 pc 2/155 
                     Filtro de Ar: frp 124"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="AÇÃO DA CIDADANIA"
          descricao="Filtro diesel: 2 EFS102 Tbs 1060/2i
                     Filtro lubrificante: (2) fs 19531
                     Filtro Separador:  
                     Filtro de Ar: (1) 56530T1¹"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="F DE FARIAS MARTINS MATERIAIS DE CONSTRUCAO E BAZAR - MARTELÃO"
          descricao="Filtro diesel: 2 EFS102 Tbs 1060/2i
                     Filtro lubrificante: 1 PSL 339
                     Filtro Separador: TBS 1060/2i
                     Filtro de Ar: Não informado"
        />


        <CardGrande 
          
          imagem={Perfil}

          nome="WPF 2 - CLINICA DA FAMÍLIA DO VASQUINHO"
          descricao="Filtro diesel: YBS1060/2i
                     Filtro lubrificante: PSL339
                     Filtro Separador: Parker racor R90-10M
                     Filtro de Ar: DR 1390"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="GRUPO CCM - SERVICOS EM SEGURANCA LTDA" 
          descricao="Filtro diesel: (1 filtro) = 130306380
                     Filtro lubrificante: (1 filtro) = psl 900
                     Filtro Separador: P
                     Filtro de Ar: (1 filtro) = 2652c120"
        />

        <CardGrande 
          
          imagem={Perfil}

          nome="TATIANA ROCHA VERBICARIO" 
          descricao="Filtro diesel: 1BF 940
                     Filtro lubrificante: 1PSL 321
                     Filtro Separador: 
                     Filtro de Ar: manut 13 11 20A"
        />

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

          nome="COLÉGIO PEDRO II - 220-001"
          descricao="Filtro diesel: S500
                     Filtro lubrificante: Psl300
                     Filtro Separador: Na
                     Filtro de Ar: SEM FILTRO DE AR"         
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