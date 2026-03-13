import { MOCK_SUBJECTS } from "@/constants/mock-data";
import { BaseRecord, DataProvider, GetListParams, GetListResponse } from "@refinedev/core";

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
    resource,
  }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== "subjects") return { data: [] as TData[], total: 0 };

    return { data: MOCK_SUBJECTS as unknown as TData[], total: MOCK_SUBJECTS.length };
  },
  getOne: async () => {
    throw new Error("This function is not presentin mock");
  },
  create: async () => {
    throw new Error("This function is not presentin mock");
  },
  update: async () => {
    throw new Error("This function is not presentin mock");
  },
  deleteOne: async () => {
    throw new Error("This function is not presentin mock");
  },
  getApiUrl: () => "",
};
