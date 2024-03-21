import { api } from "./config/axiosConfig";
import { defineCancelApiObject } from "./config/axiosUtils";

export const CommonApi = {
  AddCandidate: async (data, cancel = false) => {
    const response = await api.request({
      url: "/candidate",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data,
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },
  GetCandidate: async (params, cancel = false) => {
    const response = await api.request({
      url: "/candidate",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      params,
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },
  UpdateCandidate: async (id, data, cancel = false) => {
    const response = await api.request({
      url: "/candidate/" + id,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      data,
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },
  DashboardStat: async (cancel = false) => {
    const response = await api.request({
      url: "/candidate/data",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },
};

const cancelApiObject = defineCancelApiObject(CommonApi);
