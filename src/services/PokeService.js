import axios from "axios";


class PokemonService {

    getList(season)
    {
        return axios.get("list/?gen=" + season)
    }

    getPokebyId(id)
    {
        return axios.get("/?id=" + id)
    }
}

export default new PokemonService();