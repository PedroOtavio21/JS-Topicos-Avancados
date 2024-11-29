# Aula 22 - Conhecendo as APIs Restfull
Nessa aula, veremos um dos assuntos mais importantes hoje no mercado de ti, no que diz trabalhar com desenvolvimento

## O que é uma API
Application Programming Interface, ou Interface de Programação de Aplicações

Se refere ao conjunto de definições e protocolos pelo qual conseguimos programar nossas aplicações

É um conceito já existente há muito tempo na programação, mas hoje é utilizado muito para se referir aos serviços de Back-End na web.

Exemplos:
- O DOM que aprendemos é uma forma de API, nos ajudando a interagir com os elementos do documento html
- Quando usamos uma biblioteca ou framework podemos dizer que ele tem suas próprias APIs, ou seja, as formas específicas como os usamos para programar as aplicações.
- APIs Rest nos oferecem padrões para criar formas de se comunicar com um serivdor

## O que é Rest e Restfull
Rest significa Representation State Transfer, ou Transferência de Estado Representacional

É um conjunto de restrições de arquitetura que visa organizar a comunicação entre cliente e servidor

Uma API Restful nda mais é do que uma API que segue a arquitetura Rest

Quando um cliente faz uma reaquisição usando uma API Restful ela responde transferindo uma representação do estado do recurso que foi requisitado

Principais pontos para que uma API seja considerada Restfull
- Arquitetura cliente/servidor
- Comunicação através de HTTP
- Comunicação *stateless*, ou seja, todas as solicitações são preparadas independentemente
- Ter uma interface uniforme e com informações em formato padronizado (GET /users , POST /users, PUT /users/99, GET /user/99, DELET users/99).  

Como as APIs Restful funcionam sobre o protocolo HTTP, elas usam seus métodos para a comunicação
- GET: obter informações
- POST: enviar informações
- PUT/PATCH: solicitar a atualização/correção de informações
- DELETE: solicitar a exclusão de informações