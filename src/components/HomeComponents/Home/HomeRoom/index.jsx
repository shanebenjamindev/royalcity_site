import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actHomeListRoom } from "../../../../redux/actions/actRoom";
import Room from "./Room";

export default function HomeRoom() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actHomeListRoom());
  }, [dispatch]);

  const { loading, data, error } = useSelector((state) => state.roomReducer);
  const listRoom = data;

  const renderListRoom = () => {
    if (loading && error) {
      return null;
    }

    return listRoom?.data?.map((item, index) => (
      <div key={index} className="col-lg-2 col-sm-6 my-2">
        <Room room={item} />
      </div>
    ));
  };

  return (
    <div
      className="section__Item-primary"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <div className="text-center ">
        <div>
          <h2 className="main__Title">
            TÌM NĂNG ĐẾN TỪ SỰ PHÁT TRIỂN VƯỢT TRỘI HẠ TẦNG XUYÊN KHU VỰC
          </h2>
          <div className="outline"></div>
        </div>
      </div>
      <div>
        <p className="room-p text-center container">
          Các dự án do Thắng lợi phát triển mở ra những không gian sống mới,
          điều mà không nhiều dự án BĐS nào khác có thể làm được.
        </p>
      </div>
      <div className="my-4">
        <div className="row">{renderListRoom()}</div>
      </div>
    </div>
  );
}
