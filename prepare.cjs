const isDev = process.env.NODE_ENV !== 'production';
if (isDev) {
	require('husky').install();
}
