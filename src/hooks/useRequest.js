import { useState } from "react";

export const useRequest = (url) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [editId, setEditId] = useState("");
	const [error, setError] = useState(null);

	const getRequest = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(response.status);
			}

			const data = await response.json();
			setData(data);
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	const submitHandler = async (newValue) => {
		setIsLoading(true);
		try {
			await fetch(url, {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(newValue),
			});
			getRequest();
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	const deleteTodo = async (_id) => {
		setIsLoading(true);
		try {
			await fetch(`${url}/${_id}`, {
				method: "DELETE",
			});
			getRequest();
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	const patchRequest = async (data) => {
		setIsLoading(true);
		console.log(data);

		const { id, ...rest } = data;
		try {
			await fetch(`${url}/${id}`, {
				method: "PATCH",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(rest),
			});
			getRequest();
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	return {
		getRequest,
		data,
		submitHandler,
		deleteTodo,
		isLoading,
		patchRequest,
		setEditId,
		editId,
	};
};
