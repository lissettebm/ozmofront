import { useState } from "react";

const Detail = () => {
  const [user, setUser] = useState<{
    id: string;
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
  }>();

  // TODO: Obtener el detalle del usuario y desplegarlo
  // Endpoint para el detalle "/user/{userId}"

  return (
    <div className="card">
      <div className="card-header">
        <h3>Detalle del usuario</h3>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-12 col-md-6 fw-bold">Nombre</div>
          <div className="col-12 col-md-6">{user?.firstName}</div>
          <div className="col-12 col-md-6 fw-bold">Apellido</div>
          <div className="col-12 col-md-6">{user?.lastName}</div>
          <div className="col-12 col-md-6 fw-bold">Genero</div>
          <div className="col-12 col-md-6">{user?.gender}</div>
          <div className="col-12 col-md-6 fw-bold">Email</div>
          <div className="col-12 col-md-6">{user?.email}</div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
