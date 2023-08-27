import type { IQuery } from "../../../../commons/types/generated/types";

export interface IItemFormProps {
  name: string;
  remarks: string;
  contents: string;
  price: string;
  tags: string;
  useditemAddress: {
    address: string;
    addressDetail: string;
    lat: number;
    lng: number;
  };
}
export interface IMarketNewProps {
  isEdit?: boolean;
  data: Pick<IQuery, "fetchUseditem">;
}
