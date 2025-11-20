# 📋 Kanban To-Do List

Uma aplicação Kanban moderna e responsiva construída com React e Vite, com tema escuro elegante e funcionalidades completas de gerenciamento de tarefas.

![Kanban Board](screenshots/kanban-board.png)
![Task Detail](screenshots/task-detail.png)

## 🚀 Tecnologias Utilizadas

- **React 18.3** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool rápido e moderno
- **Tailwind CSS** - Framework CSS utility-first
- **React Router DOM** - Roteamento para React
- **Lucide React** - Ícones modernos
- **LocalStorage** - Persistência de dados no navegador

## ✨ Funcionalidades

### ✅ Gestão Completa de Tarefas
- ➕ **Criar** novas atividades com título, descrição, status e prioridade
- ✏️ **Editar** atividades existentes
- 👁️ **Visualizar** detalhes completos de cada atividade
- 🗑️ **Excluir** atividades com confirmação
- 🔄 **Mover** atividades entre colunas via drag-and-drop

### 🎯 Organização Kanban
- 📊 Três colunas: **Pendente**, **Realizando**, **Concluída**
- 🎨 Cards coloridos por status:
  - 🔴 **Vermelho** para tarefas pendentes
  - 🔵 **Azul/Roxo** para tarefas em andamento
  - 🟢 **Verde** para tarefas concluídas
- 🏷️ Badges de prioridade (Low, Medium, High)

### 🔍 Busca e Filtros
- 🔎 Busca em tempo real por título ou descrição
- 📌 Filtros por status e prioridade

### 💾 Persistência de Dados
- 💿 Armazenamento automático no localStorage
- 🔄 Dados preservados ao recarregar a página
- 📦 Tarefas de exemplo incluídas na primeira execução

### 📱 Design Responsivo
- 🖥️ Layout adaptativo para desktop
- 📱 Otimizado para tablets
- 📲 Totalmente funcional em dispositivos móveis

## 📦 Instalação

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn

### Passos para Instalação

1. **Clone o repositório**
```bash
git clone <seu-repositorio-url>
cd kanban-todo-list
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto em modo de desenvolvimento**
```bash
npm run dev
```

O projeto estará disponível em `http://localhost:8080`

4. **Build para produção**
```bash
npm run build
```

5. **Preview da build de produção**
```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
kanban-todo-list/
├── src/
│   ├── components/           # Componentes reutilizáveis
│   │   ├── ui/              # Componentes UI base (shadcn)
│   │   ├── KanbanColumn.jsx # Coluna do Kanban
│   │   ├── TaskCard.jsx     # Card de tarefa
│   │   ├── TaskModal.jsx    # Modal de criação/edição
│   │   ├── TaskDetailModal.jsx # Modal de detalhes
│   │   └── SearchBar.jsx    # Barra de busca
│   ├── hooks/               # Custom hooks
│   │   └── useTasks.js      # Hook de gerenciamento de tarefas
│   ├── pages/               # Páginas da aplicação
│   │   ├── Index.jsx        # Página principal do Kanban
│   │   └── NotFound.jsx     # Página 404
│   ├── App.tsx              # Componente raiz com roteamento
│   ├── index.css            # Estilos globais e design system
│   └── main.tsx             # Entry point da aplicação
├── public/                  # Arquivos estáticos
├── tailwind.config.ts       # Configuração do Tailwind
├── vite.config.ts           # Configuração do Vite
└── README.md               # Este arquivo
```

## 🎨 Design System

### Cores Principais
- **Background**: `#121212` (cinza muito escuro)
- **Cards**: `#1E1E1E` (cinza escuro)
- **Status Pendente**: `#EF4444` (vermelho)
- **Status Realizando**: `#6366F1` (azul/roxo)
- **Status Concluída**: `#14B8A6` (verde/teal)
- **Texto**: `#F5F5F5` (branco/cinza claro)

### Tipografia
- Font: System fonts (sans-serif)
- Tamanhos responsivos e hierarquia clara

### Espaçamento
- Baseado em múltiplos de 4px
- Cards com padding generoso
- Gaps consistentes entre elementos

## 🎯 Como Usar

### Criar Nova Atividade
1. Clique no botão "Nova atividade" no topo
2. Preencha título, descrição, status e prioridade
3. Clique em "Criar Atividade"

### Editar Atividade
1. Clique em qualquer card para abrir os detalhes
2. Clique em "Editar informações"
3. Modifique os campos desejados
4. Clique em "Salvar Alterações"

### Mover Atividade
**Opção 1 - Drag and Drop:**
- Arraste o card e solte na coluna desejada

**Opção 2 - Seletor de Status:**
- Abra os detalhes da atividade
- Altere o status no dropdown
- A atividade será movida automaticamente

### Deletar Atividade
1. Abra os detalhes da atividade
2. Clique em "Deletar atividade"
3. Confirme a exclusão

### Buscar Atividades
- Digite no campo de busca no topo
- A busca filtra por título e descrição em tempo real

## 🚀 Deploy

### Deploy no Lovable

1. Acesse [Lovable](https://lovable.dev)
2. Faça login na sua conta
3. Clique em "Import Project" ou "New Project"
4. Conecte seu repositório GitHub
5. O Lovable fará o deploy automaticamente

### Deploy em outras plataformas

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm run build
# Faça upload da pasta 'dist' no Netlify
```

#### GitHub Pages
1. Configure o `base` no `vite.config.ts`
2. Execute:
```bash
npm run build
# Commit e push da pasta dist
```

## 📤 Push para GitHub

### Primeira vez

```bash
# Inicialize o git (se ainda não foi feito)
git init

# Adicione o remote do seu repositório
git remote add origin <seu-repositorio-url>

# Adicione todos os arquivos
git add .

# Faça o primeiro commit
git commit -m "🎉 Initial commit - Kanban To-Do List"

# Push para o GitHub
git push -u origin main
```

### Commits subsequentes

```bash
git add .
git commit -m "✨ Descrição das mudanças"
git push
```

## ✅ Requisitos Atendidos

- ✅ Adicionar nova atividade ao Kanban
- ✅ Mudar status de atividade (drag-and-drop + seletor)
- ✅ Visualizar detalhes de atividade
- ✅ Editar atividade
- ✅ Excluir atividade
- ✅ Filtrar atividades (busca por título/descrição)
- ✅ Visualizar atividades em andamento destacadas
- ✅ Definir prioridade
- ✅ Persistência em localStorage
- ✅ Design responsivo
- ✅ Tema escuro seguindo o Figma
- ✅ Código organizado e componentizado

## 🔮 Melhorias Futuras

### Funcionalidades
- [ ] Filtros avançados (por prioridade, data)
- [ ] Ordenação customizada dentro das colunas
- [ ] Tags/categorias para atividades
- [ ] Datas de vencimento e lembretes
- [ ] Anexos e comentários nas atividades
- [ ] Histórico de alterações
- [ ] Modo de visualização em lista
- [ ] Exportar/importar dados (JSON, CSV)

### Técnicas
- [ ] Integração com backend (API REST)
- [ ] Autenticação de usuários
- [ ] Sincronização multi-dispositivos
- [ ] Testes unitários e E2E
- [ ] PWA (Progressive Web App)
- [ ] Dark/Light mode toggle
- [ ] Internacionalização (i18n)
- [ ] Animações mais elaboradas

### UI/UX
- [ ] Atalhos de teclado
- [ ] Modo de edição rápida inline
- [ ] Desfazer/refazer ações
- [ ] Tutorial/onboarding para novos usuários
- [ ] Temas customizáveis
- [ ] Estatísticas e gráficos de produtividade

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👤 Autor

Desenvolvido com ❤️ usando React e Vite

---

**Nota**: Este projeto foi desenvolvido seguindo fielmente os designs do Figma fornecidos, com foco em código limpo, componentização adequada e experiência do usuário.
