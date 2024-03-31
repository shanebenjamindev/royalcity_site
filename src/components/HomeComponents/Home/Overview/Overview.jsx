import React from "react";
import "./style.css";

export default function Overview() {
  const projectInfo = {
    "Tên thương mại": "The Diamond City",
    "Tên pháp lý": "KDC Quốc Linh",
    "Vị trí phát triển":
      "Mặt tiền Vành đai 4 (DT 830)- Xã Hựu Thạnh, huyện Đức Hoà và Xã Lương Bình, huyện Bến Lức, tỉnh Long An.",
    "Chủ đầu tư": "Công ty TNHH BĐS DIAMONDLAND L.A",
    "Đơn vị thiết kế": "Công ty TNHH DV&XD Hoàng Phúc",
    "Đơn vị phát triển": "Thắng Lợi Group",
    "Tổng diện tích quy hoạch": "10 ha",
    "Tổng số lượng sản phẩm": "Khoảng 800 sản phẩm",
    "Loại hình sản phẩm": "Đất nền nhà phố – biệt thự.",
    "Tiện ích nội khu":
      "Trung tâm thương mại, trung tâm văn hóa, sân thể thao cộng đồng, công viên, trường học, sân Tennis,..",
    "Pháp lý dự án":
      "Dự án đã có quy hoạch 1/500 và sổ từng nền. Hạ tầng đã hoàn thiện 100%. Sở hữu vĩnh viễn",
    "Giá bán dự kiến": "22 Triệu/m2",
  };

  return (
    <section id="section__Overview">
      <div className="section__Background"></div>
      <div className="d-md-flex">
        <img className="col-md-6" width={"100%"} src="/img/vitri.jpg" />
        <div className="col-md-6 overview__Form">
          <h2 className="text-center main__Title">TỔNG QUAN DỰ ÁN</h2>
          <table>
            <tbody>
              {Object.entries(projectInfo).map(([key, value]) => (
                <tr key={key}>
                  <td>
                    <strong>{key}:</strong>
                  </td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
