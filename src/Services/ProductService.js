
const getarticles = async (pageno,pagesize,category) =>{
    const api = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=c7b880be7eab4091b094141b8dc48de8&page=${pageno}&pageSize=${pagesize}`;
    const result = await fetch(api);
    const news = await result.json();
    // console.log(news);
    return news;
};

const ProductService = {
    getarticles,
}

export default ProductService;