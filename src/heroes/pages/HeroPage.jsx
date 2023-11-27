import {Navigate, useParams} from "react-router-dom";
import {getHeroById} from "../helpers";
import {useMemo} from "react";
import {HeroScreen} from "../components/index.js";

export const HeroPage = () => {

  const {id} = useParams();
  const hero = useMemo(() => getHeroById(id), [id])

  if (!hero) {
    return <Navigate to="/marvel"/>
  }

  return (
    <HeroScreen {...hero} />
  );
};