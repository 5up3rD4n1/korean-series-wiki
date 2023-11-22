import client from "@/lib/api";
import { createAppAsyncThunk } from "../../createAppAsyncThunk";

export enum ActionType {
  GET_SERIES = "series/getSeries",
  GET_SERIE_BY_ID = "series/getSerieById",
}

// {
//   type: 'series/getSeries',
//   payload: [{}]
// }

export const getSeriesAsync = createAppAsyncThunk(ActionType.GET_SERIES, () => {
  return client.getSeries();
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

export const getSerieByIdAsync = createAppAsyncThunk(
  ActionType.GET_SERIE_BY_ID,
  (id: string) => {
    return client.getSerie(id);
  }
);
