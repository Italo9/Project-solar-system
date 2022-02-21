import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div>
        <div data-testid="missions">
          <Title headline="Missões" />
        </div>
        <section className="mission">
          {missions.map((missionPosicao) => (
            <MissionCard
              key={ missionPosicao.name }
              name={ missionPosicao.name }
              year={ missionPosicao.year }
              country={ missionPosicao.country }
              destination={ missionPosicao.destination }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Missions;
