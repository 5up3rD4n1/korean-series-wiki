import client from "@/lib/api";
import { createAppAsyncThunk } from "../../createAppAsyncThunk";
import { CreateActorRequestDTO } from "@/lib/api/dtos/create-actor-request.dto";

enum ActionType {
  GET_ACTORS = "actors/getActors",
  GET_ACTOR_BY_ID = "actors/getActorById",
  CREATE_ACTOR = "actors/createActor",
}

// {
//   type: 'series/getSeries',
//   payload: [{}]
// }

export const getActorsAsync = createAppAsyncThunk(ActionType.GET_ACTORS, () => {
  return client.getActors();
});

// {
//   type: 'series/getSerieById/[pending | rejected | fulfilled]',
//   payload: {
//     id: 'UUID',
//     ...
//   }
// }

// sync - cosas que pasan en linea -> una despues de la otra
// async - cosas que pasan al mismo tiempo -> hay que esperar una respuesta

export const getActorsByIdAsync = createAppAsyncThunk(
  ActionType.GET_ACTOR_BY_ID,
  (id: string) => {
    return client.getActor(id);
  }
);

export const createActorAsync = createAppAsyncThunk(
  ActionType.CREATE_ACTOR,
  (data: CreateActorRequestDTO) => {
    return client.createActor(data);
  }
);
