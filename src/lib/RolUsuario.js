import Api from '$lib/Api';

const getAllRows = async () => {
	let config = {
		endPoint: 'api/v1/rol-usuario',
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
const getRow = async () => { };
const addRow = (row) => {
	console.log(row);
};
const updateRow = () => {
	console.log('updateRow');
};
const deleteRow = () => {
	console.log('deleteRow');
};

export { getAllRows, getRow, addRow, updateRow, deleteRow };
