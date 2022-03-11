import Api from '$lib/Api';

const getAllRows = async (row) => {
	let config = {
		endPoint: 'api/v1/categoria',
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const res = await Api(config);
	if (res.status) {
		return res.data;
	} else {
		console.log(res);
	}
};
const getRow = async (id) => {
	let config = {
		endPoint: `api/v1/categoria/${id}`,
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	};

	let res = await Api(config);
	if (res.status) {
		return res.data;
	} else {
		console.log(res);
	}
};
const addRow = async (row) => {
	console.log(row);
};
const updateRow = async () => {
	console.log('updateRow');
};
const deleteRow = async (id) => {
	let config = {
		endPoint: `api/v1/categoria/${id}`,
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		}
	};

	let res = await Api(config);

	if (res.status) {
		return res;
	} else {
		console.log(res);
	}
};

export { getAllRows, getRow, addRow, updateRow, deleteRow };
