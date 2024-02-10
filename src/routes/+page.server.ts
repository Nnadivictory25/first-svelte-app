import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async ({ params }) => {
    async function getProducts() {
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()
		return data.products
    }

	return {
		products: await getProducts(),
	};
};

