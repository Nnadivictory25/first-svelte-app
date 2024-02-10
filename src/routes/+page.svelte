<script lang="ts">
	import ProductCard from '$lib/components/ui/card/ProductCard.svelte';
	import type { PageServerData } from './$types';
	export let data: PageServerData;

	type Product = {
		title: string;
		description: string;
		brand: string;
		category: string;
		searchTerms: string;
		thumbnail: string;
		price: string;
	};

	let filters = ['apple', 'oppo', 'samsung', 'infinix'];

	const searchProducts: Product[] = data.products.map((product: Product) => ({
		...product,
		searchTerms: `${product.title} ${product.description} ${product.brand} ${product.category}`
	}));

	let searchTerm = '';
	let currentFilter = ""

	$: filteredProducts = searchProducts.filter((product) => {
		return currentFilter ? product.searchTerms.toLowerCase().includes(currentFilter.toLowerCase()) : product.searchTerms.toLowerCase().includes(searchTerm.toLowerCase())
	});

	const handleFilter = (filter: string) => {
		searchTerm = ""
		currentFilter = filter
	}

</script>

<div class="text-center">
	<h1 class="text-2xl font-bold">Svelte Products Store</h1>
	<p>Dummy products store to learn about Sveltekit</p>

	<div class="mt-10 w-[95%] max-w-sm mx-auto">
		<input
			bind:value={searchTerm}
			on:input={() => currentFilter = ""}
			type="search"
			class="p-2 px-4 rounded-md w-full mb-5 outline-none border focus:border-blue-500 text-black"
			placeholder="Search Product"
		/>
		<p class="text-xl pb-2">Filter</p> 
		<div class="flex items-center gap-5 justify-center pb-1">
			{#each filters as filter (filter)}
				<button on:click={() => handleFilter(filter)} class={`${currentFilter === filter && "bg-black text-white"} uppercase bg-white text-black px-2 py-1 rounded-md `}>{filter}</button>
			{/each}
		</div>
	</div>

	<div class="grid-ctn">
		{#each filteredProducts as product (product.title)}
			<ProductCard data={product} />
		{/each}
	</div>
</div>
