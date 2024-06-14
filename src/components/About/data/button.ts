import mailAnimation from '../../../assets/lotties/mail-animation.json';
import githubAnimation from '../../../assets/lotties/github-animation.json';
import spotifyAnimation from '../../../assets/lotties/spotify-animation.json';
import whatsappAnimation from '../../../assets/lotties/whatsapp-animation.json';
import instagramAnimation from '../../../assets/lotties/instagram-animation.json';

export const buttons = [
  {
    href: 'mailto:andersonmmdev@gmail.com',
    animationData: mailAnimation,
  },
  {
    href: 'https://github.com/Andersonmdev',
    animationData: githubAnimation,
  },
  {
    href: 'https://www.instagram.com/anderson.mmdev',
    animationData: instagramAnimation,
  },
  {
    href: 'https://api.whatsapp.com/send?phone=5554996840236',
    animationData: whatsappAnimation,
  },
  {
    href: 'https://open.spotify.com/user/andemm-7',
    animationData: spotifyAnimation,
  },
];
