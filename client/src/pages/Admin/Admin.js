import React from "react";
import Table from "../../components/Table";

import PageTitle from "../../components/PageTitle/PageTitle";
import { useUserState } from "../../context/UserContext";

export default function AdminPage() {
  const { users } = useUserState();
  return (
    <>
      <PageTitle title="Users" />
      <Table title="Users Data" data={users} />
    </>
  );
}
