import axios from "axios";


class PokemonService {

    getList(season)
    {
        return axios.get("list/" + season)
    }

    getPokebyId(id)
    {
        return axios.get(id)
    }
}

export default new PokemonService;