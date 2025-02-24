import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Agenda } from "../components/Agenda.jsx";
import contactList from "../components/contactList.jsx";
import React, { useContext } from 'react';
import { UserContext } from "../components/UserContext.jsx";
import contactGenerator from "../components/contactGenerator.jsx";

export const Agendas = () => {

  const {store, dispatch} =useGlobalReducer()
  const user = useContext(UserContext);

	return (
		<Agenda leftContent={<contactGenerator/>} rightContent={<contactList/>}/>
	);
}; 