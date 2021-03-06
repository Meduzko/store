// const PRODUCTS_URL = 'https://jsonplaceholder.typicode.com/albums/1/photos';
const PRODUCTS_URL = 'http://localhost:5000/products';

class PlaceholderService {

    async getDefaultPlaceholder() {
        const response = await fetch(PRODUCTS_URL, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`ProductService getDefaultProducts failed, HTTP status ${response.status}`);
        }

       let data = await response.json();

       return data.slice(0, 50);
    }
}

export default new PlaceholderService();