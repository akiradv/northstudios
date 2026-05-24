# 🌌 North Studios

> Site oficial da **North Studios**, selo independente criado por Akira Dev.  
> Vitrine dos nossos artistas, lançamentos e porta de entrada para novos talentos.

🌍 **Site:** [northstudiosbr.qzz.io](https://www.northstudiosbr.qzz.io)  
🔗 **Github:** [akiradv.github.io/northstudios](https://akiradv.github.io/northstudios)

---

## 🎤 Artistas

O site é estruturado como um hub, com páginas dedicadas para cada artista.  
Atualmente, nossa banca conta com **2 artistas**:

| Artista | Página | Estilo |
|---------|--------|--------|
| **Soltryx** | [`soltryx.html`](soltryx.html) | Eletrônico, jazz, trap, experimental |
| **Orange Isle** | [`orangeisle.html`](orangeisle.html) | Bossa nova, jazz, lo‑fi, introspectivo |

### Sobre os artistas

**Soltryx:** Combinando elementos eletrônicos com influências de diversos gêneros, cada faixa busca criar atmosferas imersivas e levar o ouvinte a uma jornada única através da energia e experimentação sonora.

**Orange Isle:** Nascido da vontade de dar vida a beats que estavam soltos pelo YouTube, o objetivo é simples: criar vibes. Cada faixa é escolhida a dedo, recebendo um nome e uma capa com os quais as pessoas possam se identificar, e então é lançada nas plataformas para que todos possam ouvir. Todas as músicas são **free for profit**, o que significa que podem ser usadas gratuitamente em projetos com até 5 mil streams acima disso, é necessário adquirir uma licença. Os créditos de cada produtor são devidamente colocados nas faixas (sem uso de Content ID). Se você é produtor e não gostou do uso da sua música, ou quer que ela seja removida, o contato é pelo Instagram: **@orangeisle__**.

*Novos artistas podem ser adicionados facilmente — a estrutura já é escalável.*

---

## ✨ Funcionalidades

- **Hub principal** com seções "Sobre", "Artistas" e "Contato"
- **Páginas individuais** para cada artista com:
  - Lançamento recente em destaque (embed do Spotify)
  - Linha do tempo com toda a discografia
  - Links para **múltiplas plataformas** (Spotify, Apple Music, Deezer, Tidal, Amazon Music, YouTube)
  - Seção "Sobre" com a história do artista
  - Formulário de contato funcional
- **Sistema de tradução** (Português / Inglês) com detecção automática do idioma do visitante
- **Formulário de contato** no hub para novos artistas (envio via Formspree)
- **Página de agradecimento** após envio do formulário
- **Design responsivo** (funciona em celular, tablet e desktop)
- **Contador regressivo** para lançamentos futuros

---

## 🛠️ Tecnologias

- **Front-end:** HTML5, CSS3, JavaScript (vanilla, sem frameworks)
- **Internacionalização:** Sistema próprio (`i18n.js`) com arquivos de tradução em `/lang`
- **Formulário:** [Formspree](https://formspree.io/) (envio AJAX sem recarregar a página)
- **Ícones:** [Font Awesome 6](https://fontawesome.com/)
- **Fontes:** [Google Fonts](https://fonts.google.com/) (Bebas Neue + Segoe UI)
- **Hospedagem:** GitHub Pages
- **CDN / Segurança:** Cloudflare (SSL/TLS e proxy)
- **Domínio:** DigitalPlat

---

## 📁 Estrutura do Projeto

```northstudios/
├── index.html              # Hub principal da distribuidora
├── soltryx.html            # Página do artista Soltryx
├── orangeisle.html         # Página do artista Orange Isle
├── thanks.html             # Página de agradecimento (pós-formulário)
├── style.css               # Estilos globais
├── script.js               # JavaScript global (partículas, menu, tilt, etc.)
├── i18n.js                 # Motor do sistema de tradução
├── lang/
│   ├── pt.js               # Traduções em português
│   └── en.js               # Traduções em inglês
├── covers/
│   ├── soltryx/            # Capas dos lançamentos do Soltryx
│   └── orangeisle/         # Capas dos lançamentos do Orange Isle
└── favicon/
    └── northstudios/       # Ícones e favicons
```

## 📬 Contato

Quer lançar sua música pela North Studios? Entre em contato que a gente conversa sobre valores.  
Sempre fazemos descontos bons pra quem tá começando.

📧 **E-mail:** [northstudiosbr@gmail.com](mailto:northstudiosbr@gmail.com)  
🌐 **Site:** [northstudiosbr.qzz.io](https://www.northstudiosbr.qzz.io)

---

## 📝 Licença

Este projeto é open-source apenas para fins de portfólio e estudo.  
Os direitos sobre as músicas, capas e identidade visual pertencem aos respectivos artistas e à North Studios.

---

*Feito com ❤️ por Akira Dev*
