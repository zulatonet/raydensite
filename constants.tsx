
import React from 'react';

export const WHATSAPP_NUMBER = "5547999970313"; 

// Link padrão para botões do site
export const WHATSAPP_STANDARD_LINK = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=Olá! Gostaria de saber mais sobre os planos da Raiden Play IPTV.`;

// Link exclusivo para a promoção do modal
export const WHATSAPP_PROMO_LINK = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=Olá! Vim pelo site e quero aproveitar a promoção da Raiden Play!`;

export const IMAGES = {
  // Logo oficial atualizada
  LOGO: "https://i.ibb.co/DDk8nP3W/download-1.png", 
  HERO_RIGHT: "https://temastotal.com.br/wordpress/iptv/IP1010/wp-content/uploads/2024/06/IPTV-MODELO02-B02-1024x1024-1.webp",
  TV_SCREENS: "https://temastotal.com.br/wordpress/iptv/IP1010/wp-content/uploads/2024/06/IPTV-MODELO-B02-1-1024x1024-1.webp",
  BACKGROUND_PATTERN: "https://picsum.photos/1920/1080?grayscale&blur=5"
};

export const TESTIMONIALS = [
  {
    name: "Lilica",
    role: "Estudante",
    image: "https://img.freepik.com/fotos-gratis/adolescente-alegre-retrato-de-rosto-sorridente_53876-145642.jpg?semt=ais_hybrid&w=740&q=80",
    text: "Mano, a Raiden Play é sinistra! Eu assisto meus jogos e as séries que gosto sem um travamento sequer. O preço de estudante encaixa certinho!"
  },
  {
    name: "Carlos Eduardo",
    role: "Empresário",
    image: "https://img.freepik.com/fotos-gratis/close-up-no-jovem-empresario_23-2149153863.jpg?semt=ais_hybrid&w=740&q=80",
    text: "Serviço de extrema qualidade. A estabilidade do sinal me surpreendeu, principalmente nos canais 4K. Recomendo para quem não quer dor de cabeça."
  },
  {
    name: "Roberto Silva",
    role: "Engenheiro",
    image: "https://img.freepik.com/fotos-premium/retrato-de-um-homem-sorridente-de-pe-contra-o-mar-e-o-ceu_1048944-5080076.jpg?semt=ais_hybrid&w=740&q=80",
    text: "Finalmente um IPTV que entrega o que promete. O suporte via WhatsApp foi muito rápido na hora de configurar minha Smart TV."
  },
  {
    name: "Homer J.",
    role: "Inspetor de Segurança",
    image: "https://aventurasnahistoria.com.br/wp-content/uploads/2024/10/homer-capa.jpg",
    text: "Woo-hoo! Agora posso assistir meus canais de esporte favoritos enquanto como meus donuts. Até eu consegui instalar, é muito fácil!"
  },
  {
    name: "Tony S.",
    role: "Gênio, Bilionário...",
    image: "https://preview.redd.it/is-that-tony-stark-or-elon-musk-v0-u1dr92942yb81.jpg?width=640&crop=smart&auto=webp&s=5d51fc7c9f2ac3289306696e6d1baa2307f4a08e",
    text: "Tecnologia de ponta. A infraestrutura de servidores da Raiden Play é o que há de mais avançado no mercado. Aprovado pelo meu selo de qualidade."
  },
  {
    name: "Seu Jorge",
    role: "Caminhoneiro",
    image: "https://img.freepik.com/fotos-premium/retrato-de-um-caminhoneiro-senior_255667-85420.jpg",
    text: "Rodo o Brasil inteiro e assisto no meu tablet na cabine. O sinal é firme mesmo no 4G. Melhor companhia pras minhas viagens."
  }
];
