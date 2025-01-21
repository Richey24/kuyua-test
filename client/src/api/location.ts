import { LocationApiResult } from "@/types/location";
import axios, { AxiosError } from "axios";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || "https://kuyua-test-backend.vercel.app"
export const fetchLocations = async (query?: string): Promise<{status: number | undefined, data: LocationApiResult | undefined} | undefined> => {
  try {
    const res = await axios.get(`${baseUrl}/locations?${query}`);
    return {
      status: res.status,
      data: res.data,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        status: error?.response?.status,
        data: error?.response?.data?.message,
      };
    } else {
      console.log(error);
    }
  }
};
