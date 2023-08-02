import httpRequest from "~/utils/httpRequest";
const productsService = {
  async getAll(params) {
    try {
      const url = "/products";
      const res = await httpRequest.get(url, { params });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
  async getById(id) {
    try {
      const res = await httpRequest.get(`products/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default productsService;
