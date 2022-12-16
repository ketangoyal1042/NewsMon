
const getarticles = async (pageno,pagesize,category,apikey) =>{
    const api = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apikey}&page=${pageno}&pageSize=${pagesize}`;
    const result = await fetch(api);
    const news = await result.json();
    // console.log(news);
    return news;
};

const ProductService = {
    getarticles,
}

export default ProductService;