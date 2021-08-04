import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { requestUsers } from "../api/requests";

const List = () => {
  const [users, setUsers] = useState<
    { id: string; firstName: string; lastName: string; email: string }[]
  >([]);
  // Para mantener la página actual
  const [page, setPage] = useState(1);

  const getUsers = async () => {
    try {
      const res = await requestUsers();
      setUsers(res.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <h3>Listado de usuarios</h3>
      </div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Ver detalle</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>
                  <button>Ver detalle</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* TODO: Agregar paginación local (5 registros por página) */}
      </div>
    </div>
  );
};

export default List;
