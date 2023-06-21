import { useState } from "react";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";

function Calendar(props) {
  const [option, setOption] = useState("week");
  const handleSelect = (e) => {
    setOption(e.target.value);
  };
  // const onChange = (date, dateString) => {
  //   // console.log(date, dateString);
  // };
  return (
    <div className="px-4 py-4 w-[270px] flex items-center gap-[10px] border mt-[10px] ml-[10px] rounded-md">
      <select
        name="datepicker"
        id="datepicker"
        onChange={handleSelect}
        className="border px-2 py-1 rounded-md text-sm h-[32px]"
      >
        <option value="week">Week</option>
        <option value="month">Month</option>
      </select>
      <Space direction="vertical">
        <DatePicker
          defaultValue={dayjs("2023-01-01", "YYYY-MM-DD")}
          // onChange={onChange}
          picker={option === "week" ? "week" : "month"}
        />
      </Space>
    </div>
  );
}

export default Calendar;
