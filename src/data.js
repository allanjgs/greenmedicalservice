// import images
import LogoImg from '../src/assets/img/logo.svg';
import HeroImg from '../src/assets/img/bg-hero.png';
import WhatsappImg from '../src/assets/img/whatsappTexto.svg';
import LinkedInImg from '../src/assets/img/linkedinTexto.svg';
import InstagramImg from '../src/assets/img/instagramTexto.svg';
import ArrowRightImg from '../src/assets/img/arrow-right.svg';
import FacebookIcon from '../src/assets/img/facebookIco.svg';
import InstagramIcon from '../src/assets/img/instagramIco.svg';
import LinkedinIcon from '../src/assets/img/linkedinIco.svg';
import ServiceSlideImage1 from './assets/img/card-lab.png';
import ServiceSlideImage2 from './assets/img/card-servico.png';

export const header = {
  logo: LogoImg,
  btnText: 'FALE CONOSCO',
};

export const nav = [
  { name: 'HOME', href: '#Home' },
  { name: 'SOBRE', href: '#Sobre' },
  { name: 'SERVIÇOS', href: '#Services' },
  { name: 'CONTATO', href: '#Contato' },
];

export const hero = {
  title: 'MANUTENÇÃO EM M.R.I',
  subtitle: 'PRESERVAMOS VIDAS COM MANUTENÇÃO PRECISA',
  btnText: 'O QUE OFERECEMOS',
  compText: '- Web, iOS and Android',
  image: HeroImg,
};

export const overview = {
  brands: [
    {
      image: LinkedInImg,
      link: 'https://www.linkedin.com/company/green-medical-service/about/',
    },
    {
      image: WhatsappImg,
      link: 'https://api.whatsapp.com/send?phone=5519993437507&text=Ol%C3%A1%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Green%20Medical%20Service.',
    },
    {
      image: InstagramImg,
      link: 'https://www.instagram.com/greenmedicalservice/',
    },
  ],
};

export const footer = {
  logo: LogoImg,
  links: [
    { name: 'Home', href: '#Home' },
    { name: 'Sobre', href: '#Sobre' },
    { name: 'Serviços', href: '#Services' },
    { name: 'Contato', href: '#Contato' },
  ],
  legal: [
    { name: 'Terms of use', href: '/' },
    { name: 'Terms of conditions', href: '/' },
    { name: 'Privacy policy', href: '/' },
    { name: 'Cookie policy', href: '/' },
  ],
  newsletter: {
    title: '',
    subtitle: 'Receba atualizações.',
  },
  form: {
    placeholder: 'Enter your email',
    btnText: 'Inscrever',
    smallText: 'Não vendemos seu e-mail e spam',
  },
};

export const copyright = {
  link1: {
    name: 'Privacy & Terms',
    href: '/',
  },
  link2: {
    name: 'Contact us',
    href: 'https://mocatech.com.br',
  },
  copyText: 'Copyright @ 2024 Mocatech',
  social: [
    { icon: FacebookIcon, href: 'https://www.facebook.com/mocatech1' },
    { icon: InstagramIcon, href: 'https://www.instagram.com/mocatech_/' },
    { icon: LinkedinIcon, href: 'https://www.linkedin.com/company/mocatech/' },
  ],
};


export const serviceSlider = [
  {
    id: 1,
    title: 'Laboratório Especializados',
    image: <ServiceSlideImage1 />,
    subtitle: [
      { name: 'Bobinas' },
      { name: 'Placas Eletronicas' },
      { name: 'Módulos de Potência' },
    ],
    link: 'https://api.whatsapp.com/send?phone=5519993437507&text=Ol%C3%A1%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Green%20Medical%20Service.',
    btnLink: 'Saiba Mais',
    btnIcon: ArrowRightImg,
  },
  {
    id: 2,
    title: 'Serviços Especializados',
    image: <ServiceSlideImage2 />,
    subtitle: [
      { name: 'Manutenção preventivas e corretivas' },
      { name: 'Diagnósticos' },
      { name: 'Montagem e desmontagem' },
      { name: 'Consultoria' },
      { name: 'Peças em geral' }
    ],
    link: 'https://api.whatsapp.com/send?phone=5519993437507&text=Ol%C3%A1%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Green%20Medical%20Service.',
    btnLink: 'Saiba Mais',
    btnIcon: ArrowRightImg,
  },
];
