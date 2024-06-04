import React, { useEffect } from "react";
import { useRequest } from "../hooks/useRequest";
import { BASE_URL } from "../utils/constants";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Button,
} from "@mui/material";
import styled from "styled-components";

const TodoList = ({ onCloseEdit, deleteTodo ,data}) => {
	const { getRequest } = useRequest(BASE_URL);

	const deleteHandler = (id) => {
		deleteTodo(id);
	};

	useEffect(() => {
		getRequest();
	}, []);

	return (
		<StyledCOntainer>
			<TableContainer
				component={Paper}
				sx={{ maxWidth: 800, margin: "20px auto", boxShadow: 3 }}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Index</TableCell>
							<TableCell>Name</TableCell>
							<TableCell>Date</TableCell>
							<TableCell align="center">Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((item, index) => (
							<TableRow key={item._id}>
								<TableCell>{index + 1}</TableCell>
								<TableCell>{item.title}</TableCell>
								<TableCell>{item.date}</TableCell>
								<TableCell align="center">
									<Button
										onClick={() => onCloseEdit(item._id)}
										variant="contained"
										color="primary"
										sx={{ mr: 1 }}>
										Edit
									</Button>
									<Button
										onClick={() => deleteHandler(item._id)}
										variant="contained"
										color="secondary">
										Delete
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</StyledCOntainer>
	);
};

export default TodoList;
const StyledCOntainer = styled.div`
	margin-top: 100px;
`;
