import React, { forwardRef } from "react";
import MaterialTable from "material-table";

import AddBox from "@material-ui/icons/AddBox";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

import { createUser, updateUser, deleteUser } from "../../context/UserContext";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export default function Material_Table(props) {
  const [state, setState] = React.useState({
    columns: [
      { title: "Username", field: "username", editable: "onAdd" },
      { title: "First Name", field: "first_name" },
      { title: "Last Name", field: "last_name" },
      {
        title: "Gender",
        field: "gender",
        lookup: { 1: "Male", 2: "Female" }
      },
      {
        title: "Role",
        field: "role",
        lookup: { 1: "admin", 2: "pm", 3: "dev" }
      },
      {
        title: "Last Update",
        field: "updated_at",
        type: "date",
        editable: "never"
      },
      {
        title: "password",
        field: "password"
      }
    ],
    data: props.data
  });

  const onRowAdd = async newData => {
    let data = [...state.data];
    if (Object.keys(newData).length !== 0 && newData.password.length > 6)
      data.push(newData);
    await createUser(newData);
    await setState({ ...state, data });
  };

  const onRowUpdate = async (newData, oldData) => {
    if (newData.password.length < 6) return;
    const data = [...state.data];
    data[data.indexOf(oldData)] = newData;
    await updateUser(newData.id, newData);
    await setState({ ...state, data });
  };

  const onRowDelete = async oldData => {
    const data = [...state.data];
    data.splice(data.indexOf(oldData), 1);
    await deleteUser(oldData.id);
    await setState({ ...state, data });
  };

  return (
    <>
      <MaterialTable
        title={props.title}
        columns={state.columns}
        icons={tableIcons}
        data={state.data}
        editable={{
          onRowAdd,
          onRowUpdate,
          onRowDelete
        }}
      />
    </>
  );
}
