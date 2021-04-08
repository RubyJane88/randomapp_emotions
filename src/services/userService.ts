import api from "../api/axios";
import {userResponseModel} from "../models/userResponseModel";


export async function getUserAxios() {
    return await api.get<userResponseModel>("api/?results=10");
}
