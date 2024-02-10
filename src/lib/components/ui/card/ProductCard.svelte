<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	type Product = {
		title: string;
		description: string;
		brand: string;
		category: string;
        thumbnail: string;
		price: string;
	};

    export let data: Product
	
    const {title, category, description, brand, thumbnail, price} = data
</script>

<Card.Root class="bg-gray-900 !text-white border-blue-500">
	<Card.Header>
		<Card.Title class="capitalize pb-2">{title}</Card.Title>
		<div class="w-[200px] h-[200px] mx-auto overflow-hidden">
			<img width="300" height="300" src={thumbnail} alt={title} class="w-full">
		</div>
		<Card.Description class="text-gray-200">{description}</Card.Description>
	</Card.Header>
	<Card.Content class="font-bold">
		<p>Price: {price}$</p>
	</Card.Content>
	<Card.Footer class="flex flex-col gap-2 font-semibold capitalize">
		<p>Category: {category}</p>
		<p>Brand: {brand}</p>
	</Card.Footer>
</Card.Root>
