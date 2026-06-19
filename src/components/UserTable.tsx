const UserTable = ({ users, selected, setSelected }: any) => {
  const toggleAll = (e: any) => {
    if (e.target.checked) {
      setSelected(users.map((u: any) => u.id));
    } else {
      setSelected([]);
    }
  };

  const toggleOne = (id: number) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((i: number) => i !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            {/* IMPORTANT: select all checkbox */}
            <input type="checkbox" onChange={toggleAll} />
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Last Login</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {users.map((u: any) => (
          <tr key={u.id}>
            <td>
              <input
                type="checkbox"
                checked={selected.includes(u.id)}
                onChange={() => toggleOne(u.id)}
              />
            </td>

            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>{u.lastLogin}</td>
            <td>{u.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;