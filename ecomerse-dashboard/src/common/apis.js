import axios from "axios";
import StorageUtils from "../utils/storage_utils";
// import CONSTANTS from "./constant";


const HEADERS = {headers: {"content-type": "application/json"}}; 

let API_BASE_URL = "http://localhost:8080"

const getHeadersWithToken = () => {
    HEADERS.headers['x-auth-token'] = StorageUtils.getAPIToken();
    return HEADERS; 

}; 
// let API = module.exports; 


// API.loginUser = async(payload) => {
//     return await axios.post(`${CONSTANTS.API_BASE_URL}/api/v1/login`, payload); 
// } 
let API = {}

export default  API = {
    loginUser: async(payload) => {
      return await axios.post(`${API_BASE_URL}/api/v1/login`, payload);
    },
  };
