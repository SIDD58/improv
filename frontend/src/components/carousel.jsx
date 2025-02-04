
import '../../public/carousel.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick'


const games = [
    {
      id: 1,
      name: 'Improv Charades',
      rules: 'Players act out a word or phrase for others to guess without speaking.',
      image: '../../public/hero.jpeg', // Replace with your game image URL
    },
    {
      id: 2,
      name: 'Freeze Tag',
      rules: 'One player is "it" and tags others to freeze them in place until they are untagged.',
      image: '../../public/hero.jpeg',
    },
    {
      id: 3,
      name: 'Props Game',
      rules: 'Players use random props to create scenes and characters in a short time.',
      image: '../../public/hero.jpeg',
    },
  ];

export default function Game(){
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };

  return (
    <>
    <section className="game-section">
      <h2>Games</h2>
      <Slider {...settings} className="game-carousel">
        {games.map((game) => (
          <div className="game-card" key={game.id}>
            <img src={game.image} alt={game.name} className="game-image" />
            <h3 className="game-name">{game.name}</h3>
            <p className="game-rules">{game.rules}</p>
          </div>
        ))}
      </Slider>
    </section>
    </>
  );
};


