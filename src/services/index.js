const BASE_URL = "https://64c2966eeb7fd5d6ebd01a3c.mockapi.io/api/v1";

export const getResources = async () => {
  try {
    const response = await fetch(`${BASE_URL}/resources`);

    if (!response.ok) {
      throw new Error("Error en la solicitud a la API");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postResources = async (payload) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };

    await fetch(`${BASE_URL}/resources`, requestOptions);

    const response = await getResources();

    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
