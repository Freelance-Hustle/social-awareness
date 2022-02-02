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
		if (path === 'get') {
			const res = await axiosFetch[path](url, config);

			if (res.data.status !== 200) {
				throw Error(res.data?.message || 'Something went wrong!');
			}

			return res.data;
		} else {
			const res = await axiosFetch[path](url, data, config);

			if (res.data.status !== 200) {
				throw Error(res.data?.message || 'Something went wrong!');
			}

			return res.data;
		}
	} catch (err: any) {
		throw Error(err.message);
	}
};

export const config = (token: string | null): AxiosRequestConfig => {
	return {
		headers: {
			Authorization: `Bearer ${token ?? ''}`,
		},
	};
};

export default axiosFetch;
