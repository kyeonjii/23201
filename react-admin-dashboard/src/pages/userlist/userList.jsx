import React from "react";
import { Link } from "react-router-dom";
import "./userList.css";

import { userRows } from "../../dummyData";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "no", headerName: "No", width: 70 },
  { field: "name", headerName: "이름", width: 130 },
  { field: "id", headerName: "아이디", width: 130 },
  {
    field: "action",
    headerName: "상세페이지",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <Link to={"/user/" + params.row.id}>
            <button className="userListEdit">상세페이지</button>
          </Link>
        </>
      );
    },
  },
];

export default function userList() {
  return (
    <div className="userList">
      <div className="userList">
        <div className="userListContainer">
          <h1 className="userlistTitle">회원 관리</h1>
        </div>
      </div>
      <DataGrid
        rows={userRows}
        disableSelectonOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
