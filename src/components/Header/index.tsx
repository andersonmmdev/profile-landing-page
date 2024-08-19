import { HeaderMobileMenu } from './HeaderMobileMenu';
import { HeaderNavigation } from './HeaderNavigation';

export default function Header() {
  return (
    <header className="h-8 sm:h-12 xl:h-16">
      <HeaderMobileMenu />
      <HeaderNavigation />
    </header>
  );
}
