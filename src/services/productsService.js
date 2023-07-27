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
};

export default productsService;
