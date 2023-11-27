import {useNavigate} from "react-router-dom";

export const HeroScreen = ({id, superhero, publisher, alter_ego, first_appearance, characters}) => {

  const navigate = useNavigate();

  const onNavigateBack = () => {
    const publisher = id.split("-")[0];
    navigate(`/${publisher}`)
  }

  return (
    <div className="row mt-5">
      <div className="col-4 animate__animated animate__slideInLeft">
        <img
          src={`/heroes/${id}.jpg`}
          alt={superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8 animate__animated animate__slideInRight">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Alter-ego:</strong> {alter_ego}
          </li>
          <li className="list-group-item">
            <strong>Publisher:</strong> {publisher}
          </li>
          <li className="list-group-item">
            <strong>First Appearance:</strong> {first_appearance}
          </li>
          <li className="list-group-item">
            <h5>Characters:</h5>
            {characters.split(",").map(character => (
              <div key={character} className="badge bg-success me-2">{character}</div>
            ))}
          </li>
        </ul>
        <hr/>
        <button
          onClick={onNavigateBack}
          className="btn btn-secondary btn-sm"
        >
          Volver atrás
        </button>
      </div>
    </div>
  );
};