import httpRequest from "~/utils/httpRequest";
const productsService = {
  async getAll() {
    try {
      const res = await httpRequest.get("products");
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
