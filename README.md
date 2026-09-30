# Site — Vidraçaria Cristal

Site institucional estático preparado para GitHub Pages e domínio `vcristal.com.br`.

## Estrutura

```text
/
├── index.html
├── 404.html
├── CNAME
├── robots.txt
├── sitemap.xml
├── .nojekyll
├── README.md
└── assets/
    ├── css/styles.css
    ├── js/main.js
    └── img/
        ├── favicon.svg
        ├── logo-vcristal.svg
        ├── logo-vcristal-light.svg
        └── og-vcristal.svg
```

## Publicação no GitHub Pages

1. Crie um repositório exclusivo para o site (ex.: `vcristal-site`).
2. Envie TODO o conteúdo desta pasta para a raiz do repositório.
3. No GitHub: **Settings → Pages**.
4. Escolha publicação via branch, usando `main` e pasta `/ (root)`.
5. Configure o domínio personalizado `vcristal.com.br` no GitHub Pages.
6. Só depois ajuste o DNS do domínio no provedor.
7. Ative **Enforce HTTPS** assim que o GitHub disponibilizar a opção.

> Depois da configuração inicial, alterações futuras são feitas no mesmo repositório. O domínio não muda a cada atualização.

## Conteúdo que ainda precisa ser validado/substituído

- O logotipo atual deste projeto é **provisório** e deve ser substituído após a identidade final ser aprovada.
- As três imagens da seção "Aplicações" são referências externas do Unsplash e NÃO são apresentadas como projetos da Vidraçaria Cristal.
- Quando houver portfólio real, substitua as URLs dos `<img>` em `index.html` por arquivos próprios, por exemplo:
  - `assets/img/projeto-sacada.webp`
  - `assets/img/projeto-box.webp`
  - `assets/img/projeto-comercial.webp`
- Não há e-mail ou horário publicados porque esses dados ainda não foram informados.
- Não há depoimentos fictícios.
- Não há promessa de garantia vitalícia do vidro.
- Serviços prioritários, preços, condições de pagamento e prazos continuam em aberto.

## WhatsApp

Número configurado no JavaScript:

`5511975856834`

Arquivo: `assets/js/main.js`

Mensagens de WhatsApp são pré-preenchidas automaticamente. Cada serviço pode abrir uma mensagem específica.

## Instagram

Perfil configurado no rodapé:

`https://www.instagram.com/vidracaria.cristall`

## SEO incluído

- title;
- meta description;
- canonical;
- Open Graph básico;
- headings semânticos;
- alt text;
- Schema.org `HomeAndConstructionBusiness` apenas com dados conhecidos;
- `robots.txt`;
- `sitemap.xml`.

## Tracking

GA4, GTM, Google Ads e Meta Pixel NÃO foram adicionados porque as contas/IDs ainda não foram informados.

Quando forem criados, inserir o tracking de forma controlada e documentada antes de iniciar campanhas.

## Imagens externas temporárias

A V1 usa imagens do Unsplash como referências visuais. Elas dependem de conexão externa. Antes de uma entrega definitiva ao cliente, prefira baixar/substituir por fotos reais e otimizadas em WebP/AVIF para obter controle total de performance e branding.

## Desenvolvimento local

O site não precisa de build.

Você pode abrir `index.html` diretamente ou rodar um servidor local:

```bash
python -m http.server 8080
```

Depois acesse `http://localhost:8080`.

## Regra operacional

Não misturar este repositório com o repositório principal do Vide Hub. Alterações no site da VCRISTAL devem permanecer isoladas aqui.
