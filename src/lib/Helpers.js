/*
 * Get a specific cookie by name
 */
export function getCookie(name) {
	return document.cookie.split('; ').find((row) => row.startsWith(name));
}

/*
 * Get the value of a specific cookie by name
 */
export function getCookieValue(name) {
	const cookiesPresent = getCookie(name);
	if (cookiesPresent) {
		return cookiesPresent.split('=')[1];
	}
	return false;
}


export async function deleteAllCookies() {
    let cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}