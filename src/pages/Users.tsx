import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import Toolbar from "../components/Toolbar";
import UserTable from "../components/UserTable";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState<number[]>([]);

  const fetchUsers = async () => {
    const res = await api.get("/users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const block = async () => {
    await api.post("/users/block", { ids: selected });
    fetchUsers();
  };

  const unblock = async () => {
    await api.post("/users/unblock", { ids: selected });
    fetchUsers();
  };

  const remove = async () => {
    await api.post("/users/delete", { ids: selected });
    fetchUsers();
  };

  const deleteUnverified = async () => {
    await api.post("/users/delete-unverified");
    fetchUsers();
  };

  return (
    <div>
      <Navbar />

      <div className="container mt-3">

        {/* TOOLBAR (IMPORTANT REQUIREMENT) */}
        <Toolbar
          onBlock={block}
          onUnblock={unblock}
          onDelete={remove}
          onDeleteUnverified={deleteUnverified}
        />

        {/* TABLE */}
        <UserTable
          users={users}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </div>
  );
};

export default Users;