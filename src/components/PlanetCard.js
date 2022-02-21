import React from 'react';
import PropType from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    return (
      <section className="planetas ">
        <div data-testid="planet-card" className="planets ">
          <p data-testid="planet-name">{planetName}</p>
          <img
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
            className={ planetName }
          />
        </div>
      </section>
    );
  }
}
PlanetCard.propTypes = {
  planetName: PropType.string.isRequired,
  planetImage: PropType.string.isRequired,
};

export default PlanetCard;
