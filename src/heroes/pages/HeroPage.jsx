import {Navigate, useNavigate, useParams} from "react-router-dom";
import {getHeroById} from "../helpers";
import {useMemo} from "react";

export const HeroPage = () => {

  const navigate = useNavigate();
  const {id} = useParams();
  const hero = useMemo(() => getHeroById(id), [id])

  const onNavigateBack = () => {
    const publisher = hero.id.split("-")[0];
    navigate(`/${publisher}`)
  }

  if (!hero) {
    return <Navigate to="/marvel"/>
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={`/heroes/${hero.id}.jpg`} alt={hero.superhero} className="img-thumbnail"/>
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Alter-ego:</strong> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <strong>Publisher:</strong> {hero.publisher}
          </li>
          <li className="list-group-item">
            <strong>First Appearance:</strong> {hero.first_appearance}
          </li>
          <li className="list-group-item">
            <h5>Characters:</h5>
            {hero.characters.split(",").map(character => (
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