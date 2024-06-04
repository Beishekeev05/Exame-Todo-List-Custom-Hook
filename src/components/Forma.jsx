import { TextField, Button, Container, Box, Typography } from "@mui/material";
import styled from "styled-components";

import { useEffect, useState } from "react";

const Forma = ({ data, onSubmit, onClose }) => {
	const [dataValue, setDataValue] = useState("");
	const [dataDate, setDataDate] = useState("");
	const [id, setId] = useState("");

	useEffect(() => {
		if (data) {
			setDataDate(data.date);
			setDataValue(data.title);
			setId(data._id);
		}
	}, [data]);

	const submitTogle = (e) => {
		e.preventDefault();

		const newValue = {
			title: dataValue,
			date: dataDate,
			id: id,
		};

		onSubmit(newValue);
		onClose();
		setDataDate("");
		setDataValue("");
	};
	return (
		<>
			<ContainerStyled>
				<Container
					sx={{
						width: 350,
						borderRadius: 2,
						padding: 3,
						backgroundColor: "#f9f9f9",
					}}>
					<Typography
						variant="h5"
						component="h2"
						sx={{ textAlign: "center", marginBottom: 2 }}>
						Todo List
					</Typography>
					<Box
						component="form"
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 2,
							margin: "20px auto",
						}}
						onSubmit={submitTogle}
						noValidate
						autoComplete="off">
						<TextField
							value={dataValue}
							label="Имя пользователя"
							onChange={(e) => setDataValue(e.target.value)}
							variant="outlined"
							fullWidth
						/>
						<TextField
							value={dataDate}
							label="Дата рождения"
							type="date"
							onChange={(e) => setDataDate(e.target.value)}
							InputLabelProps={{
								shrink: true,
							}}
							variant="outlined"
							fullWidth
						/>
						<Button
							variant="contained"
							color="primary"
							type="submit"
							sx={{ alignSelf: "center", marginTop: 2 }}>
							Создать
						</Button>
					</Box>
				</Container>
			</ContainerStyled>
		</>
	);
};

export default Forma;
const ContainerStyled = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.45);
`;
