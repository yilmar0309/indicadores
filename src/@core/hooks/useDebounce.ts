import _ from '../@lodash/@lodash';
import { useRef } from 'react';

function useDebounce(func: any, wait: any, options?: any) {
	return useRef(_.debounce(func, wait, options)).current;
}

export default useDebounce;
