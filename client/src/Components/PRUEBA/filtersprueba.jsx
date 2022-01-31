// alfabetical
//case SORT_BY_ABC:
      const allPokemons3 = state.pokemonsBack;
      const allP = state.pokemons
      let sorted =
        action.payload === "ASC"
          ? allP.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              // a must be equal to b
              return 0;
            })
          : allP.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (a.name < b.name) {
                return 1;
              }
              // a must be equal to b
              return 0;
            });

      return {
        ...state,
        pokemons: action.payload === 'NONE' ? allPokemons3 : sorted,
      };

// fuerza
// case SORT_BY_STRENGTH:
      const all = [...state.pokemonsBack];
      let sortSTR =
        action.payload === "none" 
        ? all
        : action.payload === 'asc'
          ? state.pokemons.sort((a, b) => a.attack - b.attack)
          : state.pokemons.sort((a, b) => b.attack - a.attack);
      return {
        ...state,
        pokemons: sortSTR,
      };

// origen
//case FILTER_BY_ORIGIN:
      const allPokemons = state.pokemonsBack;
      const constFilter =
        action.payload === "database"
          ? allPokemons.filter((el) => el.createdInDb)
          : allPokemons.filter((el) => !el.createdInDb);
      return {
        ...state,
        pokemons: constFilter,
      };

// tipo

//case FILTER_BY_TYPE:
      const allPokemons2 = state.pokemonsBack;
      const typeFilter =
        action.payload === "all"
          ? allPokemons2
          : allPokemons2.filter((el) =>
              el.type
                ? el.type[0] === action.payload || el.type[1] === action.payload
                : el.types[0].name === action.payload || el.types[1].name === action.payload
            );
      return {
        ...state,
        pokemons: typeFilter,
      };