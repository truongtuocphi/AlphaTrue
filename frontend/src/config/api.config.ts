import envConfig from "app/config";

const BASE_URL = envConfig.NEXT_PUBLIC_API_ENDPOINT;

const fetchFromAPI = async (endpoint: string, option = {}) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
      ...option,
    });
    if (!response.ok) {
      // throw new Error(`HTTP error! status: ${response.status}`);
      console.log(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
};

export const getData = async (url: string) => {
  return await fetchFromAPI(url);
};

export const getDataById = async (url: string, id: string) => {
  return await fetchFromAPI(`${url}/${id}`);
};

export const postData = async (url: string, data: object) => {
  return await fetchFromAPI(url, {
    method: "POST",
    body: JSON.stringify({ data }),
  });
};
