// components/Body.jsx

import Card from "./Card";
import { db } from "../Datos/db";

function Body() {
  return (
    <main className="container-xl mt-5">

      <h2 className="text-center">
        Nuestra Colección
      </h2>

      <div className="row mt-5">

        {db.map((guitarra) => (
          <Card
            key={guitarra.id}
            nombre={guitarra.name}
            precio={guitarra.price}
            descripcion={guitarra.description}
            imagen={`/img/${guitarra.image}.jpg`}
          />
        ))}

      </div>

    </main>
  );
}

export default Body;