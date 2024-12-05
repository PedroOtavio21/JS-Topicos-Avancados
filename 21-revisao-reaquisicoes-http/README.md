# Aula 21 - Revisão: Comunicação na web com HTTP
Protocolo de comunicação (protocolo para realizar uma troca de mensagens na web entre cliente e servidor)

Arquitetura cliente-servidor
- Cliente (geralmente um navegador web) envia **requisições** a um servidor
- Servidor (geralmente uma máquina acessível pela internet) recebe a rquisição, a processa e envia de volta uma **resposta** para o cliente

Características do HTTP
- Simples, fácil de entender e utilizar
- Extensível, permite adicionar novas funcionalidades facilmente
- Sateless, ou sem estado (mas com sessão)

Estrutura de mensagens

## Requisições
Método:
- Define o tipo de operação a ser realizada (GET, POST, OPTIONS, HEAD, etc)
 
Caminho:
- O caminho do recurso a ser obtido, basicamente a URL do recuro sem a parte inicial (protocolo, domínio e porta)
 
Versão: 
- O protocolo HTTP possui diferentes versões, com suas respectivas particularidades, logo é preciso definir a versão que está utilizando
  
Cabeçalho:
- Informações adicionais entre cliente e servidor

Corpo:
- Conteúdo da mensagem, usado, por exemplo, ao enviar dados via POSt

## Respostas
Código e mensagem de status
- Um código e uma breve descrição que indicam se a rquisição foi bem-sucedida ou não (e o motivo)
- Exemplos populares:
    - 200, sucesso
    - 301, redirecionamento (movido permanentemente)
    - 404, não encontrado
    - 500, erro interno do servidor

Versão
- Versão do protocolo, como nas rquisições

Cabeçalho
- Informações adicionais entre cliente e servidor, como nas requisições

Corpo
- Opcionalmente pode possuir um corpo, que é o conteúdo da mensagem (como uma página HTML ou um documento JSON)

## Exemplos
Quando digitamos um endereço de um site no navegador estamos enviando uma requisição que receberá a resposta com um documento HTML

QUando solicitamos informações a uma API Restfull enviamos uma requisição que receberá uma resposta contendo um documento JSON