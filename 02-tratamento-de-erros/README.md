# Aula 02 - Tratamento de erro com Try, Catch e Finally

Esta aula consiste em explorar algumas maneiras de tratar mensagens ou erros esperados ao decorrer de 
testes ou execução de código

## Palavra reservada 'Throw'
Geralmente usada em um condicional, onde você espera que ocorra uma exceção (valor inesperado, 
valor vazio, etc), usando o seguinte comando:
- throw new Error('Valor inserido inválido' ou 'O deve ser um número', etc ...)

## Bloco try, catch, finally
Como visto na faculdade, usasse tais blocos para executar uma aplicação que não seja interrompida, mesmo que aconteça 
algum erro esperado ou inesperado ao decorrer do código. 

### try
Executa o código normalmente, meio que 'esperando' ou 'vigiando' se algum erro é capturado

### catch 
Captura o erro presente (podendo ser especificado ou não) dentro do bloco try, caso exista, mostrando 
alguma mensagem ou realizando uma determinada ação

### finally
Executa algum código, independente que haja ou não uma captura de erro na execução do bloco de código try. Geralmente 
é utilizado para realizar um término de execução ou algo do tipo. 