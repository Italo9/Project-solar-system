import React from 'react';
import PropType from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name } = this.props;
    const { year } = this.props;
    const { country } = this.props;
    const { destination } = this.props;
    return (
      <section>
        <div data-testid="mission-card" className="mission-card">
          <p data-testid="mission-name" key={ name }>{name}</p>
          <p data-testid="mission-year" key={ name }>{year}</p>
          <p data-testid="mission-country" key={ name }>{country}</p>
          <p data-testid="mission-destination" key={ name }>{destination}</p>
        </div>
      </section>
    );
  }
}
MissionCard.propTypes = {
  name: PropType.string.isRequired,
  year: PropType.string.isRequired,
  country: PropType.string.isRequired,
  destination: PropType.string.isRequired,
};

export default MissionCard;
