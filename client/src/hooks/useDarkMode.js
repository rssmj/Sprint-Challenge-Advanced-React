import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage.js';

export const useDarkMode = initialValue => {
	const [deluminate, setDeluminate] = useLocalStorage(initialValue);

	useEffect(() => {
		if (deluminate === true) {
			return document.querySelector('body').classList.add('darkness');
		} else {
			return document.querySelector('body').classList.remove('darkness');
		}
	}, [deluminate]);

	return [deluminate, setDeluminate];
};
