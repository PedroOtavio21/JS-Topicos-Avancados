# Aula 03 - Expressões Regulares

Esta aula teve o foco voltado em explorar as usabilidades das expressões regulares no JavaScript

## Oque são?
São uma maneira de encontrar padrões dentro de uma string no javascript. Geralmente utilizadas para encontrar posições em 
uma string, ou modificar partes específicas dentro dela. A exemplo de casos, temos:
- Pegar partes específicas de um número de telefone ou CPF;
- Validar o valor recebido de um e-mail ou senha;
- Etc ...;

## Como utilar?
As expressões regulares no javascript possuem diversos recuros para se trabalhar em sua busca e manipulação, como por exemplo:

### Flags
Após as duas barras ('/ /'), você utiliza as chamadas flags para potencializar sua busca, como a exemplo das principais:
- 'i': Case insensitive, permitindo palavrar tanto em caixa alta ou comuns
- 'g': Global, pegando padrões em toda a string, não retornando a 'primeira ocorrência' na expressão.

### Caracteres especiais
Dentro das duas barras, você tem a possibilidade de trabalhar com caracteres especiais, como:
- '^': Procura de um elemento no começo da string .Ex: '/^O/' -> Retorna o caractere 'O' no começo da string
- '$': Procura de um elemento no final da string .Ex: '/O$/' -> Retorna o caractere 'O' no final da string
- '|': Or, funcionando para retornar uma elemento 'ou' outro. Ex: '/yes|no/ -> Retorna o valor "yes" ou "no"'
- '+': Retorna as ocorrências em sequências de um determinada valor. Ex: '/a+/' na string aaaa -> retorna "aaaa"
- '.': Expécie de caractere coringa, onde retorna qualquer coisa após o caractere escolhido. Ex: '/a./' -> "ax"

- '\': Utilizado para aceitar um caractere específico em uma string, onde causará um erro na expressão regular. Ex:
    '/\(..\)/' -> Retorna o parenteses e quaisquer dois valores dentro deles.
- '\w': Encontra qualquer caractere alfanumérico. Ex: '/\w/'
- '\W': O contrário acima, retornando pontos, virgulas, +, -, etc. Ex: '/\W/'
- '\d': Retorna qualquer dígito de 0 à 9. Ex: '/\d/'
- '\D': O contrário acima, retornando tudo que não seja número. Ex: '/\D/'
- '\s': Retorna espaços dentro de uma string. Ex: '\s'

- '[]': Agrupamento de dados, retornando qualquer regra presente dentro dos colchetes. Ex: '/[a-z]/' -> 
Retorna caracteres de 'a' à 'z'
- '{}': Agrupamento de dados, porém retornando uma quantidade limite de elementos. Ex: 'a{1,3}' -> retorna 3 
a´s em sequencia

### Look ahead e Look behind
Ferramentas utilizadas para encontrar caracteres específicos antes ou após um determinado elemento.
- Positive look ahead: Ex: '/or(?=\s)/' -> retorna um or que precedem um espaço
- Negative look ahead: Ex: '/or(?!\s)/' -> retorna o oposto do exemplo acima
- Positive look behind: Ex: '/(?<=l)or/' -> retorna um l minúnsculo precedido de um or
- Negative look behind: Ex: '/(?<!)or/' -> retorna o oposto do exemplo acima