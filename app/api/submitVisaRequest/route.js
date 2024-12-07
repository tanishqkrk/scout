// app/api/submitVisaRequest/route.js
import axios from "axios";

export async function POST(req) {
  const { fromCity, countryTo, purpose } = await req.json();

  try {
    const response = await axios.post(
      "https://oapis.getintelekt.ai/v1/api/external-api/knowledge-visa",
      {
        countryTo,
        purpose,
        fromCity,
      },
      {
        headers: {
          "api-key":
            "rNTlDLleWYzoC52l6GDGGFgYRNrvxNefDN39egeeR1O7bayp9wHThT2ahGHxRugC",
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response?.data);
    return Response.json(response.data);
  } catch (error) {
    console.error(
      "Error details:",
      error.response ? error.response.data : error.message
    );
    return Response.json(
      { error: error.response?.data || error.message },
      { status: error.response?.status || 500 }
    );
  }
}
