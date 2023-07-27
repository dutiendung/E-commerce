import httpRequest from "~/utils/httpRequest";
const categoriesService = {
  async getAll() {
    try {
      const res = await httpRequest.get("products/categories");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
};
export default categoriesService;
