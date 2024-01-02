import api from "./index";

export const getManagers = async () => {
  try {
    const response = await api.get("/managers/getManagers");
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
export const deleteManager = async (managerId) => {
  try {
    const response = await api.delete(`/managers/deleteManager/${managerId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
