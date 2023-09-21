import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQueryFetchUseditem } from "../queries/useQueryFetchUseditem";
import { todayViewState } from "../../stores";

export const useTodayView = (): void => {
  const router = useRouter();
  const [todayView, setTodayView] = useRecoilState(todayViewState);
  const curItemId = router.query.useditemId.toString();

  const { data } = useQueryFetchUseditem({ useditemId: curItemId });
  const viewItem = [
    {
      id: data?.fetchUseditem._id,
      name: data?.fetchUseditem.name,
      image: data?.fetchUseditem.images[0],
      remarks: data?.fetchUseditem.remarks,
      price: data?.fetchUseditem.price,
      pickedCount: data?.fetchUseditem.pickedCount,
      tags: data?.fetchUseditem.tags,
    },
  ];
  useEffect(() => {
    const filteredPrevTodayView = todayView.filter(
      (item) => item.id !== curItemId,
    );
    let tempList = [];
    if (data !== undefined) {
      if (filteredPrevTodayView.length === 0) tempList = [...viewItem];
      else tempList = [...viewItem, ...filteredPrevTodayView];
    }

    setTodayView(tempList.slice(0, 3));
  }, [data]);
};
