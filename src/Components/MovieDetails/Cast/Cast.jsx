import React from 'react';
import PropTypes from 'prop-types';
import './Cast.scss';

const Cast = ({ actors }) => (
  <>
    <ul className="cast-list">
      {actors.map(({ id, profile_path, name, character }) => (
        <li key={id}>
          <div className="cast-list__img">
            {profile_path !== null ? (
              <img
                src={`https://image.tmdb.org/t/p/w138_and_h175_face${profile_path}`}
                alt={name}
              />
            ) : (
              <div className="img-change">
                <p>?</p>
              </div>
            )}
          </div>
          <div>
            <p>{name}</p>
            <p>Character: {character}</p>
          </div>
        </li>
      ))}
    </ul>
  </>
);
Cast.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string,
      character: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default Cast;
