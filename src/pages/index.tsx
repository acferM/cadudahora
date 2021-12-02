import { Carousel } from 'react-responsive-carousel';
import { FiChevronDown } from 'react-icons/fi';

import { Header } from '../components/Header';

import { Container, HomeSection, SliderIndicator } from '../styles/pages/Home';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
  return (
    <Container>
      <Header />

      <HomeSection id="start">
        <main>
          <h1>Juntos vamos realizar o seu projeto mais DaHora!</h1>

          <footer>
            <button type="button">ORÇAMENTO</button>

            <button type="button">
              {' '}
              <FiChevronDown size={20} />
              VER PROJETOS :)
            </button>
          </footer>
        </main>

        <aside>
          <img src="dahora.svg" alt="DAHORA" />

          <Carousel
            axis="horizontal"
            autoPlay
            swipeable
            emulateTouch
            infiniteLoop
            interval={3000}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            renderIndicator={(onClickHandler, isSelected) => (
              <SliderIndicator
                onClick={onClickHandler}
                isSelected={isSelected}
              />
            )}
          >
            <div className="carousel-item">
              <p>teste 1</p>
            </div>

            <div className="carousel-item">
              <p>teste 2</p>
            </div>

            <div className="carousel-item">
              <p>teste 3</p>
            </div>
          </Carousel>
        </aside>
      </HomeSection>
    </Container>
  );
}
