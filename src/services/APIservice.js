import axios from "axios";
import PropTypes from "prop-types";
import { BASE_URL } from "helpers/constants";

async function fetchData(pathParams) {
  const axiosInstance = axios.create({
    baseURL: `${BASE_URL}${pathParams}`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,OPTIONS",
      "Access-Control-Expose-Headers": "Content-Range",
    },
  });

  return await axiosInstance.post();
}

fetchData.propTypes = {
  pathParams: PropTypes.string.isRequired,
};

export { fetchData };
