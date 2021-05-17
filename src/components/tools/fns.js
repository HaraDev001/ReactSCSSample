//@flow
import Cookies from 'universal-cookie';

export const percentage = (from: any, to: any) => {
	return `${(from / to) * 100}%`;
};

export const set = (val: any) => (val !== undefined ? val : '');

export const isNotUndefined = (val: any) => val !== undefined;

export const email = (value: any) =>
	value && !/^[a-zA-Z0-9._%+\\-]+@[a-z0-9.\\-]+\.[a-z]{2,10}$/.test(value);

export const number = (value: any) => value && !/^\d+$/.test(value);

const cookies = new Cookies();

export const _getCookie = (key: string) => {
	return cookies.get(key);
};

export const _setCookie = (key: string, value: any, ...options: any) => {
	return cookies.set(key, value, {
		path: '/',
		...options
	});
};

export const hideCardNumber = (nr: any) => {
	return nr ? `${nr.replace(/\d/g, '*').slice(0, -4)} ${nr.substr(nr.length - 4)}` : ""
};

export const checkFileSize = (name: string, file: Object, errors: Object) => {
	let required = '* File is required';
	if (file){
		let fileSize = file.size / 1024 / 1024;
		let maxSize = '* Max size 4.5MB';
		if (fileSize > 5) {
			return errors[name] = maxSize
		}
		return null
	}
	return errors[name] = required
};
