import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div data-testid="solar-system" />
          <Title headline="Planetas" />
        </div>
        <section>
          {planets.map((planetCard) => (
            <PlanetCard
              key={ planetCard.name }
              planetName={ planetCard.name }
              planetImage={ planetCard.image }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default SolarSystem;
