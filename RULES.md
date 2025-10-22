# Branchs
  Antes de vocês subirem qualquer código pro repositório, vamos partir dos príncipios de **Branch**, que é como se fosse a área de trabalho dos times. Criei 2 Branchs que vão consistir em:
  * **BRANCH MAIN** - Código Final, ou principais alterações que vão ficar no projeto (Qualquer modificação no código entra via Pull Request na qual o Biro aprova).
  * **BRANCH DEV** - Aqui vai entrar todo código que está sendo desenvolvido no projeto, visando arrumar, organizar e refatorar o projeto (Todos os gerentes vão commitar aqui quando suas páginas estiverem prontas).

  E outras branchs que vão ser a dos grupos, pra gente evitar ter conflitos na construção de páginas. Serão por volta de 7/8 Branchs destinada para grupos específicos.

  * BRANCH ONE - Grupo Biro.
  * BRANCH TWO - Grupo Wesley.
  * BRANCH THREE - Grupo Maria.
  * BRANCH FOUR - Grupo Nicoly.
  * BRANCH FIVE - Grupo Roberth.
  * BRANCH SIX - Grupo Caua.
  * BRANCH SEVEN - Grupo Diego.
  * BRANCH EIGHT - Grupo Emilly.

# Guia de Criação das Branchs (Essencial pros Gerentes)
 1 - Clonar o Repositório do Projeto.
 
``git clone https://github.com/dann473/semanamidiatica.git``

 2 - Verificar as Áreas de Trabalho disponíveis.
 
``git branch -a``

 3 - Criar a Branch do seu Grupo(a partir da "dev")
 
``git checkout dev                 # Sempre partir da dev``

``git pull origin dev              # Atualizar com a última versão``

``git checkout -b grupo-(nome_do_gerente)``

 4 - Adicionar, Commitar e Enviar o código
 
``git add .``

``git commit -m "(descrição_do_commit)"``

``git push origin (nome_da_branch)``

 **OBS:** Não commitem em hípotese alguma na ``main/dev`` sem a permissão do gerente e dono do Repositório.
