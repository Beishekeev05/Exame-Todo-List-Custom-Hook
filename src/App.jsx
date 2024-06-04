import React, { useEffect } from "react";
import Wrapper from "./components/Wrapper";
import { useRequest } from "./hooks/useRequest";
import { BASE_URL } from "./utils/constants";

const App = () => {
	const {
		getRequest,
		data,
		submitHandler,
		deleteTodo,
		isLoading,
		patchRequest,
		setEditId,
		editId,
	} = useRequest(BASE_URL);

	useEffect(() => {
		getRequest();
	}, []);

	return (
		<Wrapper
			editId={editId}
			setEditId={setEditId}
			patchRequest={patchRequest}
			isLoading={isLoading}
			deleteTodo={deleteTodo}
			submitHandler={submitHandler}
			data={data}
		/>
	);
};

export default App;
