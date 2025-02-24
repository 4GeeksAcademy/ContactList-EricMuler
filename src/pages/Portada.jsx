import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Agenda } from "../components/Agenda";
import contactList from "../components/contactList";
import agendaCerrada from "../components/agendaCerrada.jsx";

export const Portada = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<agendaCerrada/>
	);
}; 