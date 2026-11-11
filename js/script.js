// Doce Natal - todos os recursos (cada um só roda se o elemento existir na página)
const $ = (s) => document.querySelector(s);
const preco = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// 4. Cards dinâmicos: map() transforma cada objeto em HTML
function criarCard(p) {
  return `<article class="card"><img src="${p.imagem}" alt="${p.nome}" loading="lazy">
  <h3>${p.nome}</h3><p>${p.descricao}</p><strong>${preco(p.preco)}</strong>
  <button class="btn-comprar" data-id="${p.id}">Adicionar ao carrinho</button></article>`;
}
function mostrar(lista, id = "lista-produtos") {
  const a = document.getElementById(id);
  if (a) a.innerHTML = lista.length ? lista.map(criarCard).join("") : '<p class="vazio">🎄 Nenhum produto encontrado</p>';
}
mostrar(produtos.filter((p) => p.destaque), "destaques");

// 5. Filtro e busca
const campoBusca = $("#busca"), seletor = $("#categoria"), contador = $("#contador");
if (campoBusca) {
  [...new Set(produtos.map((p) => p.categoria))].forEach((c) => seletor.add(new Option(c, c)));
  const filtrar = () => {
    const t = campoBusca.value.toLowerCase();
    const r = produtos.filter((p) => p.nome.toLowerCase().includes(t) && (seletor.value === "todas" || p.categoria === seletor.value));
    mostrar(r);
    contador.textContent = `Mostrando ${r.length} de ${produtos.length} produtos`;
  };
  campoBusca.addEventListener("input", filtrar);
  seletor.addEventListener("change", filtrar);
  filtrar();
}

// 1. Slideshow
const slides = document.querySelectorAll(".slide");
if (slides.length) {
  let atual = 0;
  const pontos = $("#pontos");
  slides.forEach((_, i) => { const b = document.createElement("button"); b.setAttribute("aria-label", "Slide " + (i + 1)); b.onclick = () => ir(i); pontos.appendChild(b); });
  function ir(i) {
    slides.forEach((s) => s.classList.remove("ativo"));
    atual = (i + slides.length) % slides.length;
    slides[atual].classList.add("ativo");
    [...pontos.children].forEach((b, k) => b.classList.toggle("ativo", k === atual));
  }
  $("#proximo").onclick = () => ir(atual + 1);
  $("#anterior").onclick = () => ir(atual - 1);
  setInterval(() => ir(atual + 1), 5000);
  ir(0);
}

// 2. Parallax: cada camada anda uma fração do scroll
const camadas = document.querySelectorAll("[data-velocidade]");
window.addEventListener("scroll", () => {
  camadas.forEach((c) => (c.style.transform = `translateY(${window.scrollY * c.dataset.velocidade}px)`));
  $("#topo").style.display = window.scrollY > 400 ? "block" : "none"; // 14. voltar ao topo
});
$("#topo").onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// 3. Sons: música só começa após clique, volume baixo
const musica = new Audio("audio/musica-natal.wav");
musica.loop = true; musica.volume = 0.3;
$("#btn-musica").onclick = function () {
  if (musica.paused) { musica.play(); this.textContent = "Pausar música"; }
  else { musica.pause(); this.textContent = "Tocar música"; }
};
function tocarSino() { const s = new Audio("audio/sino.wav"); s.volume = 0.5; s.play(); }

// 6. Carrinho (delegação de evento + localStorage)
let carrinho = [];
try { carrinho = JSON.parse(localStorage.getItem("carrinho")) || []; } catch (e) {}
function atualizarCarrinho() {
  $("#qtd-carrinho").textContent = carrinho.length;
  $("#total-carrinho").textContent = preco(carrinho.reduce((s, p) => s + p.preco, 0));
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-comprar")) {
    carrinho.push(produtos.find((p) => p.id === Number(e.target.dataset.id)));
    atualizarCarrinho(); tocarSino();
  }
});
$("#limpar").onclick = () => { carrinho = []; atualizarCarrinho(); };
atualizarCarrinho();

// 7. Contagem regressiva até o Natal
const cont = $("#contagem");
function contagem() {
  const agora = new Date();
  let natal = new Date(agora.getFullYear(), 11, 25); // mês 11 = dezembro
  if (agora > natal) natal = new Date(agora.getFullYear() + 1, 11, 25);
  const f = natal - agora;
  cont.textContent = `🎅 Faltam ${Math.floor(f / 864e5)}d ${Math.floor(f / 36e5) % 24}h ${Math.floor(f / 6e4) % 60}min ${Math.floor(f / 1e3) % 60}s para o Natal`;
}
if (cont) { contagem(); setInterval(contagem, 1000); }

// 8. Validação do formulário
const form = $("#form-contato");
if (form) form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const msg = $("#mensagem-form"), v = (id) => document.getElementById(id).value.trim();
  if (!v("nome")) msg.textContent = "Por favor, digite seu nome.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email"))) msg.textContent = "Digite um e-mail válido, como nome@exemplo.com.";
  else if (!v("assunto")) msg.textContent = "Digite o assunto.";
  else if (!v("msg")) msg.textContent = "Escreva sua mensagem.";
  else { msg.textContent = `🎄 Obrigado, ${v("nome")}! Sua mensagem foi enviada.`; form.reset(); }
});

// 9. Menu hambúrguer
$(".btn-menu").onclick = () => $(".menu").classList.toggle("aberto");

// 10. Lightbox da galeria
const gal = $("#galeria");
if (gal) {
  gal.innerHTML = produtos.slice(0, 12).map((p) => `<img src="${p.imagem}" alt="${p.nome}" loading="lazy">`).join("");
  gal.onclick = (e) => { if (e.target.tagName === "IMG") { $("#lb-img").src = e.target.src; $("#lb-img").alt = e.target.alt; $("#lb-leg").textContent = e.target.alt; $("#lightbox").hidden = false; } };
  $("#lightbox").onclick = () => ($("#lightbox").hidden = true);
}

// 11. Neve em DOM
for (let i = 0; i < 25; i++) {
  const f = document.createElement("span");
  f.className = "floco"; f.textContent = "❄";
  f.style.left = Math.random() * 100 + "vw";
  f.style.animationDuration = 6 + Math.random() * 8 + "s";
  f.style.animationDelay = -Math.random() * 10 + "s";
  f.style.fontSize = 10 + Math.random() * 16 + "px";
  document.body.appendChild(f);
}

// 13. Animação ao rolar
const obs = new IntersectionObserver((es) => es.forEach((en) => en.isIntersecting && en.target.classList.add("visivel")));
document.querySelectorAll(".revelar").forEach((el) => obs.observe(el));