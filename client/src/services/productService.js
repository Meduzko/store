import _ from 'lodash';

const PRODUCTS_URL = 'http://localhost:5000/data/users';

class ProductService {

    async getDefaultProducts() {
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

        return _.map(data, (item) => {
           _.extend(item, { isChecked: false });
            return item;
        });
    }
}

export default new ProductService();