import React, { useState } from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Create from "./Create";
import TodoList from "./TodoList";
import Update from "./Update";
import Spinner from "./Spinner";

const Wrapper = ({
	data,
	editId,
	setEditId,
	patchRequest,
	isLoading,
	deleteTodo,
	submitHandler,
}) => {
	const [open, setOpen] = useState(false);
	const [openEdit, setOpenEdit] = useState(false);

	const onClose = () => {
		setOpen((prev) => !prev);
	};

	const onCloseEdit = (id) => {
		const update = data.find((item) => item._id === id);
		setEditId(update);
		setOpenEdit((prev) => !prev);
	};

	console.log(openEdit);

	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				<div>
					<StyledButton>
						<Button variant="contained" onClick={onClose}>
							{open ? "Close" : "Create"}
						</Button>
					</StyledButton>

					{open && <Create onClose={onClose} submitHandler={submitHandler} />}

					{openEdit && (
						<Update patchRequest={patchRequest} editingData={editId} />
					)}

					{data ? (
						<TodoList
							data={data}
							deleteTodo={deleteTodo}
							onCloseEdit={onCloseEdit}
						/>
					) : (
						<StyledText> Пока Зодач нет</StyledText>
					)}
				</div>
			)}
		</>
	);
};

export default Wrapper;
const StyledButton = styled.div`
	position: absolute;
	top: 20px;
	right: 20px;
`;

const StyledText = styled.p`
	position: absolute;
	top: 25%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
