
# The Alzhma Project 2.0


## Background
* O presente repositório possui o código-fonte bem como a documentação do último projeto da disciplina de Engenharia de Software (IF-977) ministrada pelo professor Vinicius Garcia, do CIn/UFPE.


## Objetivo
* O objetivo do projeto é construir uma aplicação (no formato MVP), que seja capaz de estimular cognitiva e digitalmente, pessoas acometidas da doença de Alzhimer.

* Nossa aplicação se chama "The Alzhma Project 2.0" e pretende ser uma plataforma capaz de estimular a cognição e a memória de pessoas acometidas pela Doença de Alzheimer, podendo ser também utilizada por  pessoas com outros distúrbios de memória e cognição, por meio de atividades lúdicas. Sendo assim, nossa missão é tentar fornecer uma plataforma digital lúdica que promova melhorias tanto na questão fisiológica ,como na emocional dos pacientes.


## Link para o projeto
https://github.com/odontoblasto/Alzhma2.0


## Link para o vídeo de demonstração da plataforma (Screencast)
FALTA


## Wiki
* Para uma documentação mais detalhada e separada em seções (FrontEnd e BackEnd): https://github.com/zsmn/adota.ai/wiki


## Membros
* Carlos Eduardo D.F de Vasconcellos (cedfv)
* Pedro Henrique Medeiros (phmfl)
* Leonardo Bezerra de Oliveira (lbo)


## Ferramentas utilizadas no projeto
* Javascript
* React JS
* Python
* HTML
* CSS
* Bootstrap 
* MUI
* Node.js
* Axios
* Express.js
* Jest
* Cors
* Firebase
* MongoDB Atlas


## Explicações sobre decisões tomadas no decorrer do projeto
### Aplicação Web x Aplicação Mobile
* Nesse aspecto, a equipe optou por produzir uma aplicação Web devido à grande quantidade de materiais e tutoriais disponíveis sobre esse assunto. Quando procuramos por tutoriais e materiais na área de desenvolvimento mobile, acabamos encontrando uma quantidade menor de recursos. Portanto, acabamos por optar pelo desenvolvimento Web.

### Escolha de Framework para o FrontEnd
* Nesse quesito, nossa equipe seguiu por um caminho diferente das outras equipes da disciplina, e optamos por elaborar o FrontEnd fazendo uso de HTML e CSS puro em conjunto com o framework de FrontEnd Bootstrap 4 e a linguagem Javascript. Não optamos por utilizar o React.js, pois nós acreditamos que, dado o prazo de entrega do projeto, não tinhamos tempo suficiente para aprender sobre esse framework do zero, dado que a sua curva de aprendizado é maior do que a de outros frameworks mais simples (como o próprio Bootstrap). Vale salientar também que nenhum dos integrantes da equipe possuía experiência prévia com a área de desenvolvimento Web. Por isso, optamos por seguir pelo caminho mais simples de maneira que não tivéssemos problemas para entregar um produto que fosse minimamente funcional.

### Escolha de Framework e de outros aspectos para o BackEnd
* Para desenvolver o BackEnd de nossa aplicação, optamos por usar Javascript (ao invés de Go ou Python) por ser uma linguagem bastante popular e que apresenta síntaxe de fácil entendimento e também pela quantidade de materiais existentes sobre ela. Na elaboração do BackEnd de fato, usamos o Node.js em conjunto com o framework Express.js. Optamos por usar essas duas tecnologias por recomendação do professor e porque também achamos um tutorial muito bem formulado feito pela Rocketseat que explicava exatamente o que estávamos querendo fazer e também utilizava essas duas ferramentas. Como nossa aplicação envolve o cadastro e o login/logout de usuários, é necessário que ela seja capaz de gerar tokens e também de fornecer algum tipo de privacidade com criptografia. Para esse fim, utilizamos outras duas bibliotecas de Javascript: "JsonWebToken" e "Bcrypt.js", a primeira, como o nome sugere, é responsável pela geração dos tokens necessários no login dos usuários, já a última é necessária para a encriptação das senhas inseridas pelos usuários no ato de cadastro e de login. Ademais, vale pontuar que utilizamos a biblioteca "Axios" para realizarmos as requisições ao nosso servidor.

### Escolha de ferramenta para deploy
* Optamos por usar o Google Firebase por sua simplicidade e facilidade e pelo fato de nenhum dos integrantes da equipe possuir experiência prévia em deploy.

### Escolha de ferramenta para realização de testes End-to-End
* Para essa finalidade, escolhemos utilizar a ferramenta Cypress, seguindo uma recomendação do professor. Outros fatores que fizeram com que a equipe optasse por sua utilização foram: a facilidade de utilização da ferramenta, a abundância de tutoriais a envolvendo e o fato de os integrantes da equipe já terem alguma familiaridade com Cypress, pois já tinhamos utilizado ela para a realização de um Hackenge proposto anteriormente na disciplina.

## Screenshots
### Página Inicial
![[pagina_inicial]](assets/adotaai-pagina_inicial.png)
### Página de Bichinhos
![[pagina_inicial]](assets/adotaai-pagina_bichinhos.png)
### Página de Cadastro de Bichinhos
![[pagina_inicial]](assets/adotaai-pagina_cadastro_bichinhos.png)
### Página de Eventos
![[pagina_inicial]](assets/adotaai-pagina_eventos.png)
### Página de Cadastro de Eventos
![[pagina_inicial]](assets/adotaai-pagina_cadastro_eventos.png)
### Página de Login
![[pagina_inicial]](assets/adotaai-pagina_login.png)
### Página de Cadastro
![[pagina_inicial]](assets/adotaai-pagina_cadastro.png)

## Referências utilizadas na elaboração do projeto
* https://github.com/IF977/if977 (Repositório da cadeira de Engenharia de Software)
* https://getbootstrap.com/docs/4.0/getting-started/introduction/ (Documentação Oficial do framework Bootstrap 4)
* https://www.youtube.com/watch?v=BN_8bCfVp88&list=PL85ITvJ7FLoiXVwHXeOsOuVppGbBzo2dp (Série de tutoriais API NodeJS + Express + MongoDB, ministrada pela Rocketseat)
* http://zetcode.com/javascript/axios/ (Tutorial de como usar o Axios com Javascript)
* https://medium.com/@shalandy/deploy-git-subdirectory-to-heroku-ea05e95fce1f (Tutorial de como dar um deploy pelo Heroku a partir de um sub-repositório do GitHub)
* https://www.cypress.io/ (Site Oficial do Framework Cypress)
