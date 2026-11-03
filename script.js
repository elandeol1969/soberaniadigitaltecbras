(function () {
  'use strict';

  const MODALS = {
    'parc-serpro': ['Serpro e Dataprev', 'Compartilhamento e suporte técnico inicial de infraestrutura de armazenamento, autenticação segura (via Gov.br) e processamento em nuvem pública soberana.'],
    'parc-adm': ['Órgãos e entidades da administração pública direta e indireta', 'Integração de soluções com as áreas de tecnologia da informação e comunicação dos três poderes, a fim de potencializar a padronização, o desenvolvimento, implantação e uso do aparato físico e lógico disponível, onde houver viabilidade.'],
    'parc-univ': ['Universidades, Institutos Federais (IFs), Centros de Pesquisa e ICTs Públicas', 'Articulação e orquestração do processo de cooperação, pesquisa, desenvolvimento e produção acadêmica e científica para geração de soluções tecnológicas soberanas, com a criação de centros de competência matriciais, por domínio de temas acadêmicos ou por áreas de conhecimento científico.'],
    'parc-iti': ['ITI – Instituto Nacional de Tecnologia da Informação', 'Implementação de padrões avançados de certificação digital e criptografia de ponta a ponta nacional (ICP-Brasil).'],
    'parc-anpd': ['ANPD', 'Controle e supervisão contínua para garantia do mais elevado padrão global de privacidade e proteção de dados.'],

    'pub-1': ['1. Cidadãos Brasileiros', 'Acesso a plataformas de redes sociais, redes profissionais, aplicativos de comunicação e serviços públicos com garantia de privacidade, livre de manipulação abusiva e proteção contra o vazamento de dados para governos ou corporações estrangeiras.'],
    'pub-2': ['2. Administração Pública Direta e Indireta (Federal, Estadual e Municipal)', 'Ambientes seguros e soberanos para comunicação oficial, prestação de serviços ao cidadão, transmissão de sessões públicas e armazenamento de ativos de dados de governança e segurança pública.'],
    'pub-3': ['3. Empresas Privadas Nacionais', 'Para empresas de todos os ramos de atividade (urbanas e rurais) que ofertam produtos e serviços, trata-se de alternativa viável e competitiva para veiculação de publicidade digital, ecossistema de comércio eletrônico, soluções digitais e ferramentas corporativas de colaboração, retendo o valor econômico do mercado publicitário no ambiente financeiro doméstico.'],
    'pub-4': ['4. Empresas Nacionais de TIC e Startups de Tecnologia', 'Poderão contar com infraestrutura completa de serviços de armazenamento em nuvem, big data, plataformas de Inteligência Artificial, IaaS, PaaS, SaaS, computação distribuída, comunicação, cibersegurança e demais soluções digitais que permitam a manutenção e o processamento de dados seguro em território nacional.'],

    'fin-fndct': ['FNDCT', 'Fundo Nacional de Desenvolvimento Científico e Tecnológico – fonte de recursos do aporte inicial de capital do Governo Federal.'],
    'fin-fust': ['Fust', 'Fundo de Universalização dos Serviços de Telecomunicações – fonte de recursos do aporte inicial de capital do Governo Federal.'],
    'fin-funttel': ['Funttel', 'Fundo para o Desenvolvimento Tecnológico das Telecomunicações – fonte de recursos do aporte inicial de capital do Governo Federal.'],
    'fin-bndes': ['BNDES', 'Banco Nacional de Desenvolvimento Econômico e Social – fonte de recursos do aporte inicial de capital.'],
    'fin-brics': ['Banco dos BRICS', 'Fonte de recursos prevista para o financiamento do aporte inicial de capital.'],
    'fin-deb': ['Debêntures incentivadas', 'A emissão de debêntures incentivadas é uma das fontes de recursos previstas para o aporte inicial de capital.']
  };

  const TERMS = {
    bigdata: ['Big Data', 'Big Data refere-se a conjuntos de dados extremamente grandes, complexos e em rápido crescimento que as ferramentas tradicionais (como planilhas ou bancos de dados comuns) não conseguem armazenar, gerenciar ou analisar.'],
    tic: ['TIC', 'TIC significa Tecnologia da Informação e Comunicação.'],
    bigtechs: ['Big Techs', 'As Big Techs (ou tech giants) são as maiores e mais influentes empresas de tecnologia do mundo, com forte domínio de mercado, escala global e grande capacidade de influenciar a economia, a cultura e o cotidiano da sociedade.'],
    vigilancia: ['Capitalismo de Vigilância', 'Capitalismo de Vigilância é um modelo econômico em que a experiência humana e os dados comportamentais são extraídos, processados e monetizados por grandes empresas de tecnologia.'],
    iaas: ['IaaS', 'IaaS – Infraestrutura como Serviço.'],
    paas: ['PaaS', 'PaaS – Plataforma como Serviço.'],
    saas: ['SaaS', 'SaaS – Software como Serviço.']
  };

  const PHASES = [
    ['Fase 1: Marco Legal e Estruturação', 'Meses 1 a 6', 'Tramitação do Projeto de Lei ou Medida Provisória, promulgação da Lei de Criação, elaboração do Estatuto Social e constituição da diretoria provisória.'],
    ['Fase 2: Infraestrutura e Integração', 'Meses 7 a 18', 'Contratação de infraestrutura técnica (PPP ou Concessão Comum) e integração inicial de estruturas atualmente disponíveis.'],
    ['Fase 3: Lançamento Piloto e Beta Público', 'Meses 19 a 24', 'Lançamento das plataformas de IA e mídias sociais para órgãos do Governo Federal e testes abertos à população.'],
    ['Fase 4: Expansão Mercadológica e IPO', 'Meses 25 a 36', 'Operação comercial plena, abertura de capital na B3 e campanhas de adesão nacional de cidadãos e empresas.']
  ];

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ---------- Menu hambúrguer ---------- */
  const burger = $('#hamburger');
  const menu = $('#menu');
  function setMenu(open) {
    menu.classList.toggle('open', open);
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  }
  burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  $$('a', menu).forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('click', e => {
    if (!e.target.closest('#navbar')) setMenu(false);
  });

  /* ---------- Scroll: progresso, link ativo, voltar ao topo ---------- */
  const progress = $('#progress');
  const toTop = $('#to-top');
  const sections = $$('main section[id]');
  const links = $$('a', menu);
  function onScroll() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    progress.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    toTop.classList.toggle('show', h.scrollTop > 600);
    let current = sections[0].id;
    sections.forEach(s => { if (s.getBoundingClientRect().top <= 120) current = s.id; });
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => { if (innerWidth > 860) setMenu(false); });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  onScroll();

  /* ---------- Accordion ---------- */
  function toggleItem(item, open) {
    item.classList.toggle('open', open);
    $('.acc-btn', item).setAttribute('aria-expanded', open);
  }
  $$('.accordion').forEach(acc => {
    const single = acc.dataset.single === 'true';
    $$(':scope > .acc-item', acc).forEach(item => {
      $('.acc-btn', item).addEventListener('click', () => {
        const willOpen = !item.classList.contains('open');
        if (single && willOpen) {
          $$(':scope > .acc-item', acc).forEach(o => o !== item && toggleItem(o, false));
        }
        toggleItem(item, willOpen);
      });
    });
  });
  const lawItems = () => $$('.law-acc > .acc-item');
  $('#law-expand').addEventListener('click', () => lawItems().forEach(i => toggleItem(i, true)));
  $('#law-collapse').addEventListener('click', () => lawItems().forEach(i => toggleItem(i, false)));

  /* ---------- Cartões expansíveis ---------- */
  $$('.flip-card').forEach(card => {
    const toggle = () => card.setAttribute('aria-pressed', card.classList.toggle('open'));
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });

  /* ---------- Abas ---------- */
  const tabBtns = $$('.tab-btn');
  function selectTab(btn) {
    tabBtns.forEach(b => {
      const on = b === btn;
      b.setAttribute('aria-selected', on);
      b.tabIndex = on ? 0 : -1;
      $('#' + b.dataset.tab).classList.toggle('active', on);
    });
  }
  tabBtns.forEach((b, i) => {
    b.addEventListener('click', () => selectTab(b));
    b.addEventListener('keydown', e => {
      let n = null;
      if (e.key === 'ArrowRight') n = tabBtns[(i + 1) % tabBtns.length];
      if (e.key === 'ArrowLeft') n = tabBtns[(i - 1 + tabBtns.length) % tabBtns.length];
      if (n) { selectTab(n); n.focus(); }
    });
  });

  /* ---------- Linha do tempo ---------- */
  const detail = $('#phase-detail');
  $$('.phase').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.phase').forEach(b => b.classList.toggle('active', b === btn));
      const [t, m, d] = PHASES[btn.dataset.phase];
      const h = document.createElement('h4');
      h.append(t + ' ');
      const em = document.createElement('em');
      em.textContent = '(' + m + ')';
      h.appendChild(em);
      const p = document.createElement('p');
      p.textContent = d;
      detail.replaceChildren(h, p);
    });
  });

  /* ---------- Modal ---------- */
  const modal = $('#modal');
  const box = $('.modal-box', modal);
  const mTitle = $('#modal-title');
  const mBody = $('#modal-body');
  let lastFocus = null;

  function openModal(title, text, imgSrc) {
    lastFocus = document.activeElement;
    mTitle.textContent = title;
    box.classList.toggle('wide', !!imgSrc);
    if (imgSrc) {
      const img = document.createElement('img');
      img.src = imgSrc;
      img.alt = title;
      mBody.replaceChildren(img);
    } else {
      const p = document.createElement('p');
      p.textContent = text;
      mBody.replaceChildren(p);
    }
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    $('.modal-close', modal).focus();
  }
  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }
  modal.addEventListener('click', e => { if (e.target.closest('[data-close]')) closeModal(); });
  document.addEventListener('keydown', e => {
    if (modal.hidden) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'Tab') { e.preventDefault(); $('.modal-close', modal).focus(); }
  });

  document.addEventListener('click', e => {
    const m = e.target.closest('[data-modal]');
    if (m && MODALS[m.dataset.modal]) {
      openModal(...MODALS[m.dataset.modal]);
      return;
    }
    const term = e.target.closest('[data-term]');
    if (term && TERMS[term.dataset.term]) {
      openModal(...TERMS[term.dataset.term]);
      return;
    }
    const img = e.target.closest('[data-modal-img]');
    if (img) openModal('Funcionograma TecBras', '', img.dataset.modalImg);
  });
})();
