/**
 * ==========================================================
 * ARQUIVO DE CONFIGURAÇÃO DA PÁGINA
 * ==========================================================
 *
 * Este é o ÚNICO arquivo que você precisa editar no dia a dia.
 *
 * Aqui você troca: nome do filme, ano, gênero, duração, nota,
 * idioma, qualidade, preço, sinopse, link de checkout e o ID
 * do Meta Pixel.
 *
 * Depois de editar, salve o arquivo (Ctrl + S) e a página vai
 * atualizar sozinha com as novas informações.
 *
 * Veja o README.md para o passo a passo completo.
 * ==========================================================
 */

const PAGE_CONFIG = {
  // Nome do filme (aparece em destaque no topo da página)
  movieTitle: "O Drama",

  // Ano de lançamento
  movieYear: "2026",

  // Gênero(s), separados por "•"
  movieGenre: "Drama • Romance",

  // Duração do filme
  movieDuration: "1h 45min",

  // Nota do filme (exibida ao lado da estrela ★)
  movieRating: "7,5/10",

  // Idiomas disponíveis
  movieLanguage: "🇧🇷 Dublado + Legendado",

  // Qualidade do vídeo
  movieQuality: "Full HD",

  // Preço exibido para o visitante (texto, com "R$")
  price: "R$ 5,99",

  // Preço em formato numérico, usado nos eventos do Meta Pixel
  // Use ponto (.) como separador decimal, exemplo: 9.90
  priceValue: 9.9,

  // Sinopse curta (recomendado: no máximo 3 linhas de texto)
  synopsis: "Dias antes do casamento, Emma e Charlie vivem o que deveria ser a semana mais feliz de suas vidas. Mas uma revelação inesperada coloca o relacionamento em risco, obrigando os dois a confrontarem segredos, confiança e tudo o que acreditavam saber um sobre o outro. Entre momentos de tensão, humor e romance, a história mostra até onde um casal consegue ir antes de dizer sim",

  // Link do checkout / página de pagamento
  // Troque "COLE_AQUI_O_LINK_DO_CHECKOUT" pelo link real
  checkoutUrl: "https://pay.cakto.com.br/h8ewn8f_982096",

  // ID do Meta Pixel (números, encontrado no Gerenciador de Eventos)
  // Troque "COLE_AQUI_O_ID_DO_PIXEL" pelo ID real
  metaPixelId: "4065695820159646",

  // Quando "true", mostra mensagens no console do navegador
  // avisando quando cada evento do Pixel é enviado.
  // Deixe "true" enquanto estiver testando e "false" quando publicar.
  debugMode: true,
};
