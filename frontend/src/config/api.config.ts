import envConfig from "app/config";

const BASE_URL = envConfig.NEXT_PUBLIC_API_ENDPOINT;
const API_KEY = envConfig.NEXT_PUBLIC_API_TOKEN;

interface FetchOptions extends RequestInit {
  body?: string;
}

const fetchFromAPI = async (endpoint: string, option: FetchOptions = {}) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      headers: {
        Authorzization: `Bearer ${API_KEY}`,
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

export const postData = async (url: string, data: object) => {
  return await fetchFromAPI(url, {
    method: "POST",
    body: JSON.stringify({ data }),
  });
};
