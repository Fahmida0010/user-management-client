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
    <>
      {/* Desktop & Laptop */}
      <div className="d-none d-md-block">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>
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
      </div>

      {/* Mobile */}
      <div className="d-md-none">
        {users.map((u: any) => (
          <div key={u.id} className="card mb-3 shadow-sm">
            <div className="card-body">
              <div className="mb-2">
                <input
                  type="checkbox"
                  checked={selected.includes(u.id)}
                  onChange={() => toggleOne(u.id)}
                />
              </div>

              <p className="mb-1">
                <strong>Name:</strong> {u.name}
              </p>

              <p className="mb-1 text-break">
                <strong>Email:</strong> {u.email}
              </p>

              <p className="mb-1">
                <strong>Last Login:</strong> {u.lastLogin}
              </p>

              <p className="mb-0">
                <strong>Status:</strong> {u.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserTable;