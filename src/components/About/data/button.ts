import mailAnimation from '../../../assets/lotties/mail-animation.json';
import githubAnimation from '../../../assets/lotties/github-animation.json';
import spotifyAnimation from '../../../assets/lotties/spotify-animation.json';
import whatsappAnimation from '../../../assets/lotties/whatsapp-animation.json';
import instagramAnimation from '../../../assets/lotties/instagram-animation.json';

export const buttons = [
  {
    href: 'mailto:andersonmmdev@gmail.com',
    animationData: mailAnimation,
    ariaLabel: 'Send an email',
  },
  {
    href: 'https://github.com/andersonmmdev',
    animationData: githubAnimation,
    ariaLabel: 'Visit my GitHub',
  },
  {
    href: 'https://www.instagram.com/anderson.mmdev',
    animationData: instagramAnimation,
    ariaLabel: 'Visit my Instagram',
  },
  {
    href: 'https://api.whatsapp.com/send?phone=5554996840236',
    animationData: whatsappAnimation,
    ariaLabel: 'Send a WhatsApp message',
  },
  {
    href: 'https://open.spotify.com/user/andemm-7',
    animationData: spotifyAnimation,
    ariaLabel: 'Listen to my playlist',
  },
];
