export default function Home() {
  const checkoutUrl = "https://pay.cakto.com.br/seu-link-aqui";

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-emoji">🌸</div>
          <h1>GUIA DA BELEZA EXPRESS</h1>
          <p className="subtitle">Make perfeita em 10 minutos — sem produtos caros</p>
          <p className="description">
            Um passo a passo simples pra você se sentir arrumada, confiante e bonita no dia a dia — mesmo sem tempo.
          </p>
          <div className="hero-tags">
            <span>👉 Acesso imediato</span>
            <span>• Método rápido</span>
            <span>• Beleza natural</span>
          </div>
          <a href={checkoutUrl} className="cta-button">
            🔘 QUERO MEU ACESSO AGORA
          </a>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="section">
        <div className="container">
          <h2>💄 PARA QUEM É ESSE GUIA?</h2>

          <div className="no-need-list">
            <p style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px', textAlign: 'center' }}>
              Você não precisa de:
            </p>
            <div className="no-need-item">❌ horas na frente do espelho</div>
            <div className="no-need-item">❌ maquiagem cara</div>
            <div className="no-need-item">❌ técnicas complicadas</div>
          </div>

          <p style={{ fontSize: '19px', fontWeight: '600', margin: '30px 0' }}>
            Você só precisa de um método simples, feito pra rotina real.
          </p>

          <p style={{ fontSize: '18px', fontWeight: '600', margin: '30px 0 20px' }}>
            O Guia da Beleza Express foi criado para mulheres que:
          </p>

          <div className="target-list">
            <div className="target-item">Têm pouco tempo</div>
            <div className="target-item">Querem uma make leve e natural</div>
            <div className="target-item">Se sentem inseguras com maquiagem</div>
            <div className="target-item">Já gastaram dinheiro com produtos que não funcionam</div>
          </div>

          <div className="highlight-box">
            ✨ Em 10 minutos, você sai pronta pra qualquer situação.
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className="section section-dark">
        <div className="container">
          <h2>📦 O QUE VOCÊ RECEBE</h2>
          <p style={{ marginBottom: '40px' }}>Ao garantir seu acesso, você recebe:</p>

          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>✔️ Portal Interativo Guia da Beleza Express</h3>
              <ul>
                <li>Vídeos curtos e objetivos</li>
                <li>Passo a passo simples</li>
                <li>Acesso pelo celular ou computador</li>
              </ul>
            </div>
            <div className="benefit-card">
              <h3>✔️ Conteúdo prático para o dia a dia</h3>
              <p style={{ textAlign: 'left', fontSize: '16px', color: '#555' }}>
                Assista quando e onde quiser
              </p>
            </div>
          </div>

          <div className="highlight-box" style={{ marginTop: '40px' }}>
            🔓 Acesso vitalício
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS REAIS */}
      <section className="section">
        <div className="container">
          <h2>🌷 BENEFÍCIOS REAIS</h2>
          <p style={{ marginBottom: '20px' }}>(O QUE MUDA NA SUA ROTINA)</p>

          <div className="benefits-list">
            <div className="benefits-list-item">Se sentir bonita sem exagero</div>
            <div className="benefits-list-item">Economizar tempo todos os dias</div>
            <div className="benefits-list-item">Parar de gastar dinheiro à toa</div>
            <div className="benefits-list-item">Olhar no espelho e gostar do que vê</div>
            <div className="benefits-list-item">Make leve que combina com qualquer lugar</div>
          </div>

          <div className="highlight-box" style={{ marginTop: '40px' }}>
            Não é sobre virar maquiadora.<br />
            É sobre se sentir bem do seu jeito.
          </div>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="section section-dark">
        <div className="container">
          <h2>🎁 BÔNUS EXCLUSIVOS</h2>
          <p style={{ marginBottom: '40px' }}>Ao comprar agora, você recebe gratuitamente:</p>

          <div className="bonus-grid">
            <div className="bonus-card">
              <h3>🎁 Bônus 1 — Ouro de Farmácia (PDF)</h3>
              <p>Lista de produtos baratinhos (até R$30) que substituem marcas caras.</p>
            </div>
            <div className="bonus-card">
              <h3>🎁 Bônus 2 — Skincare de 2 Minutos</h3>
              <p>Checklist simples pra preparar a pele e evitar make craquelada.</p>
            </div>
            <div className="bonus-card">
              <h3>🎁 Bônus 3 — Acesso Vitalício</h3>
              <p>Você paga uma vez e pode voltar sempre que quiser.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRÉVIA DO CONTEÚDO */}
      <section className="section">
        <div className="container">
          <h2>👀 PRÉVIA DO CONTEÚDO</h2>
          <p style={{ marginBottom: '40px' }}>Dentro do portal você vai aprender:</p>

          <div className="preview-list">
            <div className="preview-item">Como fazer uma pele bonita em 5 minutos</div>
            <div className="preview-item">O truque do olhar marcante sem usar 10 pincéis</div>
            <div className="preview-item">Make rápida para trabalho, sair ou dia a dia</div>
            <div className="preview-item">O que levar na bolsa pra retocar em segundos</div>
          </div>

          <div className="highlight-box" style={{ marginTop: '40px' }}>
            📱 Tudo direto ao ponto, sem enrolação.
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section className="section section-dark">
        <div className="container">
          <h2>💳 OFERTA ESPECIAL</h2>
          <p style={{ maxWidth: '650px', margin: '0 auto 40px', fontSize: '17px' }}>
            Um curso presencial de automaquiagem pode custar R$ 200 a R$ 300<br />
            e você ainda precisa lembrar de tudo depois.
          </p>

          <div className="offer-card">
            <p style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
              💖 Hoje o Guia da Beleza Express está disponível por:
            </p>
            <div className="current-price">R$ 47,00</div>
            <div className="installments">ou até 5x no cartão</div>

            <a href={checkoutUrl} className="cta-button" style={{ background: 'white', color: '#e91e8c', marginTop: '20px' }}>
              🔘 QUERO MEU ACESSO AGORA
            </a>

            <div className="security">
              <div className="security-item">🔐 Pagamento 100% seguro</div>
              <div className="security-item">📩 Acesso enviado por e-mail imediatamente</div>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="section">
        <div className="container">
          <div className="guarantee-box">
            <h3>🛡️ GARANTIA — RISCO ZERO</h3>
            <p style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px' }}>
              Você tem 7 dias de garantia.
            </p>
            <p>
              Se por qualquer motivo achar que não é pra você,<br />
              é só pedir o reembolso dentro desse prazo.
            </p>
            <p style={{ marginTop: '20px' }}>
              Sem perguntas.<br />
              Sem complicação.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-dark">
        <div className="container">
          <h2>❓ PERGUNTAS FREQUENTES</h2>

          <div className="faq-list">
            <div className="faq-item">
              <h3>❔ Preciso saber me maquiar?</h3>
              <p>Não. O guia é para iniciantes e mulheres comuns, sem experiência.</p>
            </div>
            <div className="faq-item">
              <h3>❔ Funciona pra quem tem pouco tempo?</h3>
              <p>Sim. O método foi feito para quem tem 10 minutos ou menos.</p>
            </div>
            <div className="faq-item">
              <h3>❔ Preciso comprar maquiagem cara?</h3>
              <p>Não. Inclusive indicamos produtos baratos e fáceis de encontrar.</p>
            </div>
            <div className="faq-item">
              <h3>❔ Como vou acessar o conteúdo?</h3>
              <p>Após o pagamento, você recebe o acesso por e-mail.</p>
            </div>
            <div className="faq-item">
              <h3>❔ O acesso expira?</h3>
              <p>Não. O acesso é vitalício.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="final-section">
        <div className="container">
          <h2>🌸 UMA MENSAGEM FINAL PRA VOCÊ</h2>

          <p>
            Posso estar errada, mas quase toda mulher já saiu de casa achando que a maquiagem não ficou boa.
          </p>

          <p>
            Eu achava que precisava de mais tempo e produto caro.<br />
            Era só falta de um passo a passo simples.
          </p>

          <p>
            Hoje faço uma make rápida, leve e bonita — só pra me sentir arrumada no dia a dia.
          </p>

          <p className="highlight">
            Se isso faz sentido pra você, o guia também vai fazer 💖
          </p>

          <a href={checkoutUrl} className="cta-button" style={{ marginTop: '30px' }}>
            🔘 QUERO MEU ACESSO POR R$ 47
          </a>
        </div>
      </section>
    </>
  );
}
