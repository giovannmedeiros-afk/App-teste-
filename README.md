# Em dia · Minha agenda

Aplicativo de tarefas em português, com 11 tarefas iniciais, conclusão, categorias, prioridades, datas, anotações, busca, filtros e exportação JSON. Interface responsiva.

## Executar

Requer Node.js 18 ou superior. Não há dependências externas para instalar.

```sh
npm start
```

O servidor usa a porta 3000; configure `PORT` para outra porta.

Os dados ficam no localStorage do navegador, separados por endereço e navegador. Não existe conta, sincronização ou integração automática com calendários, Stripe, PayPal ou plataformas de anúncios. Use Exportar tarefas para guardar uma cópia. As fontes do Google são opcionais; o aplicativo funciona com fontes locais quando não há internet.

As tarefas começam sem data e com prioridade normal para você organizar conforme sua agenda. Clique no título ou nos três pontos para editar.

## Publicação no GitHub Pages

Em Settings → Pages → Build and deployment, selecione GitHub Actions como Source. O workflow `.github/workflows/pages.yml` publica a pasta `public` a cada envio para `main`. Não há instalação ou build. O servidor Node é apenas para desenvolvimento local.
