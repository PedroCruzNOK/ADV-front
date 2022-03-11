import Api from '$lib/Api';

const getAllRows = async () => {
	let config = {
		endPoint: 'api/v1/notificacion/usuario/get',
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
		endPoint: `api/v1/notificacion/usuario/get/${id}`,
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

const addRow = (notificacion) => {
	console.log(notificacion);
};
const updateRow = () => {
	console.log('updateRow');
};
const deleteRow =  async (id) => {
	let config = {
		endPoint: `api/v1/notificacion/usuario/delete/${id}`,
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const res = await Api(config);
	if (res.status) {
		return res;
	} else {
		console.log(res);
	}
};

export { getAllRows, getRow, addRow, updateRow, deleteRow };
