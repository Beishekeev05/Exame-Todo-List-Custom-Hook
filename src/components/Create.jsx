import React from "react";
import Forma from "./Forma";

const Create = ({ submitHandler,onClose }) => {
	const addHandler = (dats) => {
		submitHandler(dats);
	};
	return (
		<div>
			<Forma onClose={onClose} onSubmit={addHandler} />
		</div>
	);
};

export default Create;
