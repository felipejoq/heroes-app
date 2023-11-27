import {useForm} from "../../hooks/useForm.js";
import {useSearchParams} from "react-router-dom";
import {getHeroesByName} from "../helpers";
import {HeroCard} from "../components";

export const SearchPage = () => {

  let [searchParams, setSearchParams] = useSearchParams();

  const {searchText, onInputChange} = useForm({searchText: ''});

  const q = searchParams.get('q') || '';
  const heroesFind = getHeroesByName(q);

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;
    setSearchParams({q: searchText});
  }

  return (
    <>
      <h1>Search</h1>
      <hr/>
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr/>
          <form onSubmit={onSearchSubmit}>
            <input
              onChange={onInputChange}
              value={searchText}
              type="text"
              placeholder="buscar un héroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
            />
            <button className="btn btn-primary my-2">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr/>
          <div className="alert alert-info">Buscar un héroe...</div>
          <div className="alert alert-warning">No hay resultados <strong>{q}</strong>...</div>
          {
            heroesFind.map(hero => (
              <div key={hero.id} className="mt-2">
                <HeroCard {...hero}/>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};