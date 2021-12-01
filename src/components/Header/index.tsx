import { useRouter } from 'next/router';
import Link from 'next/link';
import { Container } from './styles';

export function Header() {
  const { asPath } = useRouter();

  return (
    <Container>
      <img src="logo.svg" alt="Dahora logo" />

      <nav>
        <Link href="#start">
          <a className={asPath === '/' || asPath === '/#start' ? 'active' : ''}>
            INÍCIO
          </a>
        </Link>

        <Link href="#whoami">
          <a className={asPath === '/#whoami' ? 'active' : ''}>QUEM SOU EU ?</a>
        </Link>

        <Link href="#portfolio">
          <a className={asPath === '/#portfolio' ? 'active' : ''}>PORTFÓLIO</a>
        </Link>

        <Link href="#contact">
          <a className={asPath === '/#contact' ? 'active' : ''}>CONTATO</a>
        </Link>

        <Link href="#pricing">
          <a className={asPath === '/#pricing' ? 'active' : ''}>ORÇAMENTO</a>
        </Link>
      </nav>
    </Container>
  );
}
