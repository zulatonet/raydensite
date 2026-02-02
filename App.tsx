
import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  CreditCard, 
  Headset, 
  Database, 
  CheckCircle2, 
  ChevronRight, 
  ChevronDown,
  Smartphone,
  Trophy,
  Theater,
  Star,
  X,
  Clock,
  Users
} from 'lucide-react';
import { WHATSAPP_STANDARD_LINK, WHATSAPP_PROMO_LINK, IMAGES, TESTIMONIALS } from './constants';
import { FAQItem, PricingPlan } from './types';

const App: React.FC = () => {
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPromo(true);
    }, 60000); // 1 minuto
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-600 selection:text-white">
      <Hero />
      <DeviceSection />
      <FeaturesGrid />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <SEOTextSection />
      <Footer />
      
      {showPromo && <PromoModal onClose={() => setShowPromo(false)} />}

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_STANDARD_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      >
        <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
};

const SEOTextSection: React.FC = () => {
  return (
    <section className="py-12 bg-black/50 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl text-center text-gray-500 text-sm">
        <h2 className="text-xl font-semibold mb-6 text-gray-300">Raiden Play IPTV - Canais Ao Vivo, Filmes e Séries em HD</h2>
        
        <p className="mb-4">
          Assista a centenas de canais IPTV ao vivo, incluindo esportes, filmes, séries, notícias, infantis e canais internacionais 24 horas por dia. Acesso instantâneo a conteúdos em Full HD e 4K, com atualizações diárias de listas M3U e Xtream Codes. 
        </p>
        
        <p className="mb-4">
          Plataforma compatível com Smart TVs, Android, Firestick, VLC, IPTV Smarters, GSE Smart IPTV, Perfect Player e mais. Tudo sem travamentos, com servidor estável e alta qualidade de streaming.
        </p>
        
        <p className="mb-4">
          <strong>Principais categorias:</strong> Canais ao vivo Brasil, Canais 24h, Filmes e Séries Netflix, HBO, Disney+, Prime Video, Premiere, Combate, Esporte Interativo, ESPN, BeIN Sports, Canais adultos, documentários, infantis e internacionais.
        </p>

        <p className="mt-8 text-gray-600 font-medium">
          Raiden Play IPTV © 2026 | Serviço de streaming IPTV legal e atualizado diariamente. 
          Experimente a melhor experiência de TV online gratuita ou premium.
        </p>
      </div>
    </section>
  );
};

const PromoModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutos em segundos
  const [spots, setSpots] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const spotTimer = setInterval(() => {
      setSpots(prev => (prev > 1 ? prev - (Math.random() > 0.8 ? 1 : 0) : 1));
    }, 25000); // Vagas diminuem lentamente
    return () => clearInterval(spotTimer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-gradient-to-br from-[#111] to-[#000] border-2 border-raiden-blue rounded-3xl p-8 overflow-hidden shadow-[0_0_50px_rgba(0,163,255,0.3)]">
        <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white"><X /></button>
        
        <div className="text-center">
          <div className="inline-block bg-raiden-blue text-white font-black text-xs uppercase py-1 px-4 rounded-full mb-4 animate-pulse">
            Promoção Relâmpago
          </div>
          <h3 className="text-3xl lg:text-4xl font-black mb-4 italic uppercase">
            DESCONTO <span className="text-raiden-blue">LIBERADO!</span>
          </h3>
          <p className="text-white/70 mb-6 font-medium">
            O administrador liberou uma oferta especial para os próximos minutos:
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="text-2xl line-through text-white/30 font-bold">R$ 25,00</div>
            <div className="text-5xl font-black text-raiden-blue animate-bounce">R$ 22,00</div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
              <div className="flex items-center justify-center gap-2 text-raiden-blue mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">Expira em</span>
              </div>
              <div className="text-2xl font-black text-white">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </div>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
              <div className="flex items-center justify-center gap-2 text-raiden-blue mb-1">
                <Users className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">Vagas Restantes</span>
              </div>
              <div className="text-2xl font-black text-white">Apenas {spots}</div>
            </div>
          </div>

          <a 
            href={WHATSAPP_PROMO_LINK} 
            target="_blank"
            className="block w-full bg-cta-orange hover:bg-orange-600 text-white font-black py-5 rounded-2xl text-xl transition-all transform hover:scale-105 shadow-[0_10px_20px_rgba(255,60,0,0.3)] uppercase italic"
          >
            EU QUERO O DESCONTO!
          </a>
          <p className="mt-4 text-xs text-white/40 font-bold uppercase tracking-widest">
            Promoção válida apenas para novas adesões agora
          </p>
        </div>
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-12 lg:pt-32 lg:pb-32 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1920')] bg-cover bg-center opacity-20 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black z-10"></div>
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start gap-4 mb-8">
              <img src={IMAGES.LOGO} alt="Raiden Play Logo" className="h-32 lg:h-48 drop-shadow-[0_0_20px_rgba(0,163,255,0.7)] object-contain" />
              <h2 className="text-raiden-blue font-extrabold uppercase tracking-[0.3em] text-sm lg:text-xl mt-4">
                RAIDEN PLAY
              </h2>
            </div>
            
            <h1 className="text-4xl lg:text-7xl font-black leading-none mb-6 italic uppercase">
              O PODER DO <br />
              <span className="text-raiden-blue">ENTRETENIMENTO</span> <br />
              NA SUA MÃO
            </h1>
            
            <p className="text-white/70 text-lg lg:text-xl mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Canais, filmes e séries sem travamentos. A estabilidade que você procura com a tecnologia Raiden Play.
            </p>
            
            <a 
              href={WHATSAPP_STANDARD_LINK} 
              target="_blank" 
              className="bg-cta-orange hover:bg-orange-600 text-white font-black py-5 px-10 rounded-lg text-lg lg:text-2xl transition-all duration-300 transform hover:scale-105 inline-block accent-shadow uppercase italic tracking-tighter"
            >
              LIBERAR MEU ACESSO AGORA
            </a>
          </div>
          
          <div className="flex-1 relative animate-[float_6s_ease-in-out_infinite]">
            <img 
              src={IMAGES.HERO_RIGHT} 
              alt="Conteúdo Raiden Play" 
              className="w-full h-auto drop-shadow-[0_0_60px_rgba(0,163,255,0.4)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const DeviceSection: React.FC = () => {
  const benefits = [
    {
      icon: <Trophy className="w-10 h-10 text-raiden-blue" />,
      title: "+100 Mil Conteúdos",
      desc: "Um catálogo completo com os lançamentos mais recentes do cinema."
    },
    {
      icon: <Theater className="w-10 h-10 text-raiden-blue" />,
      title: "Séries Completas",
      desc: "Todas as temporadas das suas séries favoritas organizadas e prontas."
    },
    {
      icon: <Smartphone className="w-10 h-10 text-raiden-blue" />,
      title: "Grade de Canais Premium",
      desc: "Esportes, documentários e infantis em alta definição sem quedas."
    }
  ];

  return (
    <section className="py-20 bg-[#080808]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 uppercase italic">
              ASSISTA EM <span className="text-raiden-blue">QUALQUER LUGAR</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              A Raiden Play oferece compatibilidade total. Use em sua Smart TV, Celular, Tablet ou TV Box com máxima performance.
            </p>
            
            <div className="space-y-8">
              {benefits.map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start text-left bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-colors border border-white/5">
                  <div className="bg-black p-3 rounded-full border border-raiden-blue/30">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-raiden-blue">{item.title}</h3>
                    <p className="text-white/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1">
            <img 
              src={IMAGES.TV_SCREENS} 
              alt="Dispositivos Raiden Play" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-12 h-12" />,
      title: "Segurança Blindada",
      desc: "Tecnologia anti-bloqueio para garantir que seu sinal nunca caia."
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "Ativação Instantânea",
      desc: "Pagou, liberou. Nosso sistema automatizado garante seu acesso em minutos."
    },
    {
      icon: <Headset className="w-12 h-12" />,
      title: "Suporte Raiden Play",
      desc: "Equipe especializada pronta para te ajudar via WhatsApp a qualquer momento."
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Servidores High-End",
      desc: "Nossa infraestrutura é própria, garantindo o menor delay do mercado."
    }
  ];

  return (
    <section className="py-24 bg-black relative">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="uppercase font-bold text-white/40 tracking-[0.5em] mb-4">EXCLUSIVIDADE</p>
          <h2 className="text-5xl lg:text-7xl font-black text-white uppercase leading-none italic">RAIDEN <span className="text-raiden-blue">PLAY</span></h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-[#111] p-10 rounded-3xl border border-white/5 hover:border-raiden-blue/50 transition-all text-center group cursor-default">
              <div className="inline-block p-4 rounded-2xl bg-raiden-blue/10 text-raiden-blue mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{f.title}</h3>
              <p className="text-white/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href={WHATSAPP_STANDARD_LINK} 
            target="_blank" 
            className="bg-raiden-blue hover:bg-blue-600 text-white font-black py-5 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 inline-block accent-shadow uppercase italic tracking-tighter"
          >
            SOLICITAR TESTE DE 6 HORAS
          </a>
        </div>
      </div>
    </section>
  );
};

const PricingSection: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      id: 'mensal',
      name: 'Plano Mensal',
      price: 'R$25,00',
      features: ['1 Tela Simultânea', '+100.000 Conteúdos', 'Qualidade 4K/Full HD', 'EPG Atualizado', 'Apps Exclusivos', 'Sem Fidelidade']
    },
    {
      id: 'semestral',
      name: 'Plano Semestral',
      price: 'R$130,00',
      recommended: true,
      features: ['1 Tela Simultânea', '+100.000 Conteúdos', 'Qualidade 4K/Full HD', 'EPG Atualizado', 'Apps Exclusivos', 'Suporte Prioritário', 'Economia Garantida']
    },
    {
      id: 'anual',
      name: 'Plano Anual',
      price: 'R$240,00',
      features: ['1 Tela Simultânea', '+100.000 Conteúdos', 'Qualidade 4K/Full HD', 'EPG Atualizado', 'Melhor Custo Benefício', 'Acesso VIP Raiden Play']
    }
  ];

  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black uppercase mb-4 italic">
            ESCOLHA SEU <span className="text-raiden-blue">PLANO</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Planos flexíveis para todos os perfis. Sem contratos abusivos, pague e use.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((p) => (
            <div 
              key={p.id} 
              className={`pricing-card relative flex flex-col p-10 rounded-3xl border-2 transition-all duration-300 ${p.recommended ? 'border-raiden-blue bg-[#111] scale-105 shadow-[0_0_40px_rgba(0,163,255,0.15)]' : 'border-white/10 bg-[#0c0c0c]'}`}
            >
              {p.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-raiden-blue text-white text-xs font-black uppercase py-2 px-6 rounded-full tracking-widest">
                  Mais Popular
                </div>
              )}
              
              <h3 className="text-2xl font-black mb-2 text-center uppercase italic">{p.name}</h3>
              <div className="text-5xl font-black text-raiden-blue text-center mb-10 drop-shadow-[0_0_10px_rgba(0,163,255,0.3)]">
                {p.price}
              </div>
              
              <ul className="flex-1 space-y-4 mb-10">
                {p.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-raiden-blue shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href={WHATSAPP_STANDARD_LINK} 
                target="_blank" 
                className={`flex items-center justify-center gap-3 font-black py-5 px-6 rounded-xl transition-all duration-300 uppercase italic tracking-tighter ${p.recommended ? 'bg-cta-orange hover:bg-orange-600 text-white accent-shadow' : 'bg-white/5 hover:bg-white/10 text-white border border-white/20'}`}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                SOLICITE SEU TESTE
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % (TESTIMONIALS.length / 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-black text-center mb-16 uppercase italic">
          CLIENTES <span className="text-raiden-blue">SATISFEITOS</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.slice(index * 3, (index * 3) + 3).map((t, i) => (
            <div key={i} className="bg-[#111] p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center animate-in slide-in-from-right duration-500">
              <div className="relative mb-6">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-24 h-24 rounded-full object-cover border-4 border-raiden-blue shadow-[0_0_20px_rgba(0,163,255,0.3)]"
                />
                <div className="absolute -bottom-2 -right-2 bg-cta-orange p-2 rounded-full">
                  <Star className="w-3 h-3 text-white fill-current" />
                </div>
              </div>
              <h4 className="text-xl font-black mb-1 uppercase text-raiden-blue">{t.name}</h4>
              <p className="text-white/30 text-xs font-bold uppercase mb-6">{t.role}</p>
              <p className="text-white/70 italic leading-relaxed">
                "{t.text}"
              </p>
              <div className="mt-6 flex gap-1">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-raiden-blue fill-current" />)}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-2 mt-12">
          {[...Array(TESTIMONIALS.length / 3)].map((_, i) => (
            <button 
              key={i} 
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${index === i ? 'w-8 bg-raiden-blue' : 'w-2 bg-white/10'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqs: FAQItem[] = [
    {
      id: '2',
      question: "Quais dispositivos podem ser usados para IPTV?",
      answer: "Nossos serviços são acessíveis em todos os dispositivos Smart TV (Samsung, LG, Android TV), Smartphones (Android/iOS), Computadores, TV Box, FireStick e Chromecast."
    },
    {
      id: '3',
      question: "Qual a velocidade de internet recomendada?",
      answer: "Para uma experiência estável em 4K, recomendamos pelo menos 30 Mbps. Para canais HD, 15 Mbps já são suficientes."
    },
    {
      id: '4',
      question: "Quais canais estão inclusos?",
      answer: "Você terá acesso a todos os canais abertos e fechados do Brasil, além de pacotes internacionais premium, Premiere, Combate, HBO, Telecine e muito mais."
    },
    {
      id: '5',
      question: "Quantas conexões posso usar simultaneamente?",
      answer: "Nossos planos padrão permitem 1 conexão simultânea. Caso precise de mais telas, consulte nossa equipe via WhatsApp para pacotes multi-telas."
    },
    {
      id: '6',
      question: "Como posso testar o serviço Raiden Play?",
      answer: "Oferecemos um teste gratuito de 6 horas para você conhecer toda a nossa grade de canais, filmes e séries antes de assinar qualquer plano."
    }
  ];

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-black text-center mb-16 uppercase italic">DÚVIDAS <span className="text-raiden-blue">FREQUENTES</span></h2>
        
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.id} className="border-b border-white/10">
              <button 
                onClick={() => toggle(f.id)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className={`text-xl font-bold transition-colors ${openId === f.id ? 'text-raiden-blue' : 'text-white'}`}>
                  {f.question}
                </span>
                {openId === f.id ? (
                  <ChevronDown className="w-6 h-6 text-raiden-blue" />
                ) : (
                  <ChevronRight className="w-6 h-6 text-white/40 group-hover:text-white" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${openId === f.id ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-white/50 leading-relaxed text-lg">
                  {f.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href={WHATSAPP_STANDARD_LINK} 
            target="_blank" 
            className="bg-raiden-blue hover:bg-blue-600 text-white font-black py-5 px-10 rounded-full text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 inline-block accent-shadow uppercase italic"
          >
            FALAR COM ATENDENTE
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center gap-6">
          <img src={IMAGES.LOGO} alt="Raiden Play" className="h-20 opacity-90" />
          <p className="text-white/40 font-bold uppercase tracking-[0.2em] text-xs lg:text-sm">
            RAIDEN PLAY IPTV - TODOS OS DIREITOS RESERVADOS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default App;
