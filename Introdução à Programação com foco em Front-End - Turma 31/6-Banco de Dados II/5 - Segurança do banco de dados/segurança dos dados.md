## Instruções do projeto


Após uma varredura rápida no sistema de banco de dados de uma empresa de vendas, identificamos a necessidade de melhorar a segurança dessas informações. Por isso, será necessário desenvolver um novo banco para armazenar os dados mais importantes, como detalhes dos clientes, valores faturados diariamente e informações sobre os produtos, além de outros. Sendo assim, explique quais são os pilares da segurança de dados que devem ser seguidos para que o novo banco seja bem projetado e funcione corretamente


Para garantir que um banco de dados seja seguro e funcione corretamente, é importante seguir os pilares da segurança de dados. Esses pilares são princípios fundamentais que orientam o design e a manutenção de sistemas de armazenamento de informações sensíveis. Os principais pilares são:


1. Confidencialidade
Definição: A confidencialidade visa garantir que apenas indivíduos autorizados tenham acesso às informações confidenciais. Em um sistema de banco de dados, isso significa proteger dados sensíveis (como detalhes de clientes e valores faturados) contra acessos não autorizados.

### Práticas Comuns:

Criptografia: Usar criptografia para proteger dados em repouso (armazenados) e em trânsito (durante a transmissão).
Controle de Acesso: Implementar regras de acesso rigorosas, concedendo permissões somente aos usuários que realmente necessitam.
Autenticação: Utilizar métodos seguros de autenticação, como autenticação multifator (MFA).

2. Integridade
Definição: A integridade assegura que os dados sejam precisos e completos, evitando alterações não autorizadas ou acidentais. Isso é vital para garantir que as informações no banco estejam corretas e reflitam a realidade da empresa.

### Práticas Comuns:

Validação de Dados: Implementar mecanismos de validação para assegurar que apenas informações corretas e formatadas entrem no sistema.
Controles de Versionamento: Utilizar logs de auditoria que registrem alterações nos dados, permitindo rastrear quem modificou o quê.
Procedimentos de Backup e Restauração: Manter backups regulares e planos de recuperação para restaurar informações em caso de falhas ou ataques.

3. Disponibilidade
Definição: A disponibilidade garante que o sistema e os dados estejam acessíveis sempre que necessário. Isso é essencial para uma empresa de vendas, onde interrupções podem impactar diretamente os negócios.

 ### Práticas Comuns:

Redundância e Replicação: Implementar estratégias de redundância (servidores e sistemas de armazenamento) para manter os serviços operacionais, mesmo em caso de falhas.
Monitoramento: Monitorar continuamente a infraestrutura e o desempenho do banco de dados para detectar problemas antes que se tornem críticos.
Plano de Recuperação de Desastres: Desenvolver e testar planos de recuperação de desastres para restaurar o sistema rapidamente em caso de falha.