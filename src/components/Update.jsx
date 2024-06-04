import Forma from "./Forma";

const Update = ({ editingData, patchRequest }) => {
	const patchRequestValue = (value) => {
		patchRequest(value);
	};

	return (
		<div>
			<Forma onSubmit={patchRequestValue} data={editingData} />
		</div>
	);
};

export default Update;
