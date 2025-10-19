# SD Chat (Sockets/RPC)

- **Comunicação:** XML-RPC (python stdlib).
- **Cliente:** HTML+JS puro (sem frameworks), servido por `python3 -m http.server`.
- **Servidor:** multithread, sem frameworks web.
- **Banco:** SQLite.

## Executar localmente
```bash
python3 server.py &
cd static && python3 -m http.server 8080
````

Acesse: `http://localhost:8080` (a UI chama `http://localhost:8000/RPC2`).

## Docker

```bash
docker build -t sd-chat .
docker run --rm -p 8000:8000 -p 8080:8080 sd-chat
```

## Fluxos atendidos

* Registro com e-mail único.
* Login com token de sessão.
* Listar usuários; iniciar conversa direta; enviar/receber mensagens.
* Criar grupos; enviar mensagens em grupo; sair do grupo.
* Excluir conversa direta **removendo do banco**.
* Quando **todos saem** de um grupo, o grupo e mensagens são apagados.

## Observações

* Sem frameworks (Flask/Express/React), conforme a atividade.
* Página pode ser servida pelo próprio Python (`-m http.server`).


## 🧪 Como isso mapeia seus requisitos
- **Cadastro único por e-mail**: `users.email UNIQUE`; `register_user` retorna `EMAIL_IN_USE`.  
- **Guarda conversas**: tabelas `conversations`, `conversation_members`, `messages` em **SQLite**.  
- **Login**: `login(email, senha)` → token de sessão.  
- **Conversar com qualquer cadastrado**: `send_direct_message` cria/reativa conversa direta (par único).  
- **Grupos**: `create_group`, `send_group_message`, `leave_group`; quando `active=0` para todos, o grupo é apagado (junto com mensagens).  
- **Excluir conversa**: `delete_direct_conversation` remove a conversa direta **do DB**.  
- **Multi-cliente + UI web**: servidor **multithread** e **HTML/JS** simples, sem frameworks; **RPC/XML-RPC** conforme exigido; UI pode ser publicada com `python3 -m http.server`. :contentReference[oaicite:7]{index=7}
