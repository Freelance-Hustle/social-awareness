import axios, { AxiosRequestConfig } from 'axios';

const baseURL = 'http://localhost:5000/api/v1';

const axiosFetch = axios.create({ baseURL });

export const handleFetch = async (
	url: string,
	path: 'get' | 'post' | 'patch' | 'put',
	data?: any,
	config?: AxiosRequestConfig<{}>
): Promise<any> => {
	try {
		const res = await axiosFetch[path](url, data, config);

		// console.log('res', res);

		if (res.data.status !== 200) {
			throw Error(res.data?.message || 'Something went wrong!');
		}

		return res.data;
	} catch (err: any) {
		throw Error(err.message);
	}
};

export default axiosFetch;
