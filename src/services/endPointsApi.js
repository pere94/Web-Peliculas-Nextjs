const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPointsApi = {
    trending: {
        all: `${API}/${VERSION}/trending/all/day`,
        movie: `${API}/${VERSION}/trending/movie/day`,
        tv: `${API}/${VERSION}/trending/tv/day`,
        person: `${API}/${VERSION}/trending/person/day`,
    },
    products: {
        getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
        getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
        getAllProducts: () => `${API}/api/${VERSION}/products`,
        addProducts: () => `${API}/api/${VERSION}/products`,
        updateProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
        deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    },
    categories: {
        getCategoriesList: (limit) => `${API}/api/${VERSION}/categories?limit=${limit}`,
        addCategory: () => `${API}/api/${VERSION}/categories`,
        getCategoryItems: (id, limit, offset) => `${API}/api/${VERSION}/categories/${id}/products?limit=${limit}&offset=${offset}`,
        updateCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    },
    files: {
        addImage: () => `${API}/api/${VERSION}/files/upload`,
    },
};

export  {endPointsApi};