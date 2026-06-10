# 🌌 North Studios

> Site oficial da **North Studios**, selo independente criado por Akira Dev.  
> Vitrine dos nossos artistas, lançamentos e porta de entrada para novos talentos.

🌍 **Acesse:** [akiradv.github.io/northstudios](https://akiradv.github.io/northstudios)

---

## 🎤 Artistas

O site é estruturado como um hub, com páginas dedicadas para cada artista.  
Atualmente, nossa banca conta com **3 artistas**:

| Artista | Página | Estilo |
|---------|--------|--------|
| **Soltryx** | [`soltryx.html`](soltryx.html) | Eletrônico, jazz, trap, experimental |
| **Orange Isle** | [`orangeisle.html`](orangeisle.html) | Bossa nova, jazz, lo‑fi, introspectivo |
| **Disk** | [`disk.html`](disk.html) | Em breve |

### Sobre os artistas

**Soltryx:** Projeto musical de Akiradv. Combinando elementos eletrônicos com influências de diversos gêneros, cada faixa busca criar atmosferas imersivas e levar o ouvinte a uma jornada única através da energia e experimentação sonora.

**Orange Isle:** Nascido da vontade de dar vida a beats que estavam soltos pelo YouTube, o objetivo é simples: criar vibes. Cada faixa é escolhida a dedo e lançada nas plataformas. Todas as músicas são **free for profit** (até 5 mil streams). Créditos de cada produtor são devidamente colocados nas faixas.

**Disk:** Artista da North Studios. Seu primeiro lançamento, HOLLDONE:ECHOES (em parceria com Soltryx), está previsto para breve.

### Próximo lançamento

**HOLLDONE:ECHOES** — Trilha sonora oficial de Holldone, produzida por Soltryx em colaboração com Disk. House, música eletrônica e elementos experimentais. Em breve.

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
- **Taglines animadas** com efeito de digitação e rodízio de frases exclusivas para cada artista
- **Formulário de contato** no hub para novos artistas (envio via Formspree)
- **Página de agradecimento** após envio do formulário
- **Design responsivo** otimizado para mobile, tablet e desktop
- **Navbar profissional** com efeito de scroll e menu mobile com blur
- **Contador regressivo** para lançamentos futuros
- **Metadados Open Graph** para compartilhamento em redes sociais (WhatsApp, Discord, etc.)
- **Favicon e ícones** personalizados para cada dispositivo

---

## 🛠️ Tecnologias

- **Front-end:** HTML5, CSS3, JavaScript (vanilla, sem frameworks)
- **Internacionalização:** Sistema próprio (`i18n.js`) com arquivos de tradução em `/lang`
- **Formulário:** [Formspree](https://formspree.io/) (envio AJAX sem recarregar a página)
- **Ícones:** [Font Awesome 6](https://fontawesome.com/)
- **Fontes:** [Google Fonts](https://fonts.google.com/) (Bebas Neue + Segoe UI)
- **Hospedagem:** GitHub Pages
- **CDN / Segurança:** Cloudflare (SSL/TLS e proxy)

---

## 📁 Estrutura do Projeto

```
northstudios/
├── index.html              # Hub principal da distribuidora
├── soltryx.html            # Página do artista Soltryx
├── orangeisle.html         # Página do artista Orange Isle
├── disk.html               # Página do artista Disk
├── thanks.html             # Página de agradecimento (pós-formulário)
├── style.css               # Estilos globais
├── script.js               # JavaScript global (navbar, tilt, taglines, etc.)
├── i18n.js                 # Motor do sistema de tradução
├── lang/
│   ├── pt.js               # Traduções em português
│   └── en.js               # Traduções em inglês
├── covers/
│   ├── soltryx/            # Capas dos lançamentos do Soltryx
│   ├── orangeisle/         # Capas dos lançamentos do Orange Isle
│   └── disk/               # Capas dos lançamentos do Disk
└── favicon/
    └── northstudios/       # Ícones e favicons
```

---

## 📬 Contato

Quer lançar sua música pela North Studios? Entre em contato que a gente conversa sobre valores.  
Sempre fazemos descontos bons pra quem tá começando.

📧 **E-mail:** [northstudiosbr@gmail.com](mailto:northstudiosbr@gmail.com)  
🌐 **Site:** [akiradv.github.io/northstudios](https://akiradv.github.io/northstudios)

---

## 📝 Licença

Este projeto é open-source apenas para fins de portfólio e estudo.  
Os direitos sobre as músicas, capas e identidade visual pertencem aos respectivos artistas e à North Studios.

---

*Feito com ❤️ por Akira Dev*