import { getCookie, getCookieValue } from '$lib/Helpers';
export default async function Api({ endPoint, method = 'get', body, headers = {} }) {
	let urlBase = 'http://192.168.100.23:8081/';
	let url = `${urlBase}${endPoint}`;
	try {
		let header = { ...headers, 'access-token': getCookieValue('JWT')};
		const response = await fetch(url, { method, body, headers: header });
		return response.json();
	} catch (error) {
		Promise.reject(error);
	}
}
