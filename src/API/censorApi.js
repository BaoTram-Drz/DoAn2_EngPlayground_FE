import api from "./index";
export const createNewCourseToCensor = async (courseData) => {
  try {
    const response = await api.post("/censor/createCourse", courseData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getCourseCensors = async () => {
  try {
    const response = await api.get("/censor/getCourseCensors");
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getVocabularyCensors = async (topicName) => {
  try {
    const response = await api.get("/censor/getVocabularyCensors", topicName);
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const addVocabToCensor = async (saveData) => {
  try {
    const response = await api.post("/censor/addVocabularyCensors", saveData);

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
export const saveCourseApprove = async (topicName) => {
  try {
    const author = JSON.parse(localStorage.getItem("user")).name;
    console.log("Thêm được khóa rồi nè. ");
    const response = await api.post("/censor/saveCourseApprove", {
      topicName,
      author,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
export const saveVocabularyApprove = async (topicName) => {
  try {
    const author = JSON.parse(localStorage.getItem("user")).name;
    console.log("Thêm được từ rồi nè. ");
    const response = await api.post("/censor/saveVocabularyApprove", {
      topicName,
      author,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
