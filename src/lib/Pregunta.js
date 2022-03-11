
import Api from '$lib/Api';

const getAllRows = async () => {
	let config = {
		endPoint: 'api/v1/banco-pregunta',
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
const getRow = async (id) => {
	let config = {
		endPoint: `api/v1/banco-pregunta/${id}`,
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
	let config = {
		endPoint: `api/v1/banco-pregunta/`,
		method: 'POST',
		body: JSON.stringify(row),
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

const updateRow = async (id, row) => {
	let config = {
		endPoint: `api/v1/banco-pregunta/${id}`,
		method: 'PUT',
		body: JSON.stringify(row),
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

const deleteRow = async (id) => {
	let config = {
		endPoint: `api/v1/banco-pregunta/${id}`,
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