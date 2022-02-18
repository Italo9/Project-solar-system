import React from 'react';
import PropType from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <div>
        <h2>{headline}</h2>
      </div>
    );
  }
}
Title.propTypes = {
  headline: PropType.string.isRequired,
};

export default Title;
