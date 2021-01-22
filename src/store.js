import { createStore } from "redux";

const initialState = {
  jugadores: [
    {
      id: 7,
      nombre: "Cristiano Ronaldo",
      foto: "https://www.rankeamos.com/uploads/cristianoronaldo_4352728677.jpg",
    },
    {
      id: 10,
      nombre: "Leo Messi",
      foto:
        "https://assets.laliga.com/squad/2020/t178/p19054/256x256/p19054_t178_2020_1_002_000.jpg",
    },
    {
      id: 25,
      nombre: "Thomas Müller",
      foto:
        "https://pbs.twimg.com/profile_images/634128137085943808/c7j292cR_400x400.jpg",
    },
  ],
  titulares: [],
  suplentes: [],
};

const reducerEntrenador = (state = initialState, action) => {
  if (action.type === "AGREGAR_TITULAR") {
    return {
      ...state,
      titulares: state.titulares.concat(action.jugador),
      jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
    };
  }

  if (action.type === "AGREGAR_SUPLENTE") {
    return {
      ...state,
      suplentes: state.suplentes.concat(action.jugador),
      jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
    };
  }

  if (action.type === "QUITAR_TITULAR") {
    return {
      ...state,
      titulares: state.titulares.filter((j) => j.id !== action.jugador.id),
      jugadores: state.jugadores.concat(action.jugador),
    };
  }

  if (action.type === "QUITAR_SUPLENTE") {
    return {
      ...state,
      suplentes: state.suplentes.filter((j) => j.id !== action.jugador.id),
      jugadores: state.jugadores.concat(action.jugador),
    };
  }

  return state;
};

export default createStore(reducerEntrenador);
// Recibe como parametro la funcion encargada de hacer los cambios en la App
// Se conoce como funcion reductora
