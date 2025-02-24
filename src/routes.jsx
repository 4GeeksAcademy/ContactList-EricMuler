

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Agendas } from "./pages/Agendas";
import { Single } from "./pages/Portada";
import { Demo } from "./pages/Demo";
import { Portada } from "./pages/Portada";

export const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

      
      <Route path= "/" element={<Portada />} />
      <Route path= "/agendas" element={<Agendas />} />
    </Route>
  )
);