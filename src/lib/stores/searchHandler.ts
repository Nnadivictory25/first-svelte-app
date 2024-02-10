import { SearchStoreModel } from "./search";


export const searchHandler = <T extends Record<PropertyKey, any>>(
    store: SearchStoreModel<T>
) => {
    const searchTerm = store.search.toLowerCase() || "";
    const filteredData = store.data.filter((item) => {
        return item.searchTerms.toLowerCase().includes(searchTerm);
    });

    store.filtered = filteredData;
};
