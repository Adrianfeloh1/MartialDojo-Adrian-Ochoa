import { useState } from "react";
import { Link } from "react-router-dom";
import { collection, getFirestore, addDoc } from "firebase/firestore";

const SendOrder = () => {
  const [orderId, serOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState([]);
  const [message, setMessage] = useState("");  

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!nombre || !email) {
      alert("Por favor complete todos los campos");
      return;
    }

    alert("Formulario enviado");

    addDoc(ordersCollection, order).then(({ id }) => serOrderId(id));
  };

  const order = {
    name,
    email,
    tel,
    message,
  };

  const ordersCollection = collection(db, "SendOrder");

  return (
    <>
      <div className="conteiner-form">
        <h2 className="contactanos"> Contáctanos</h2>

        <div className="container-two-parts">
          <div className="container-contact">
            <form onSubmit={handleSubmit}>
              <p>
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  onChange={(e) => setName(e.target.value)}
                />
              </p>
              <p>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </p>
              <p>
                <label htmlFor="tel">Teléfono</label>
                <input
                  type="tel"
                  name="Teléfono"
                  id="tel"
                  onChange={(e) => setTel(e.target.value)}
                />
              </p>
              <p className="btn-message">
                <label htmlFor="mensaje">Escribenos algo</label>
                <textarea
                  name="mensaje"
                  id="mensaje"
                  cols="50"
                  rows="5"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </p>
              <p className="btn-message">
                <button type="submit">Enviar</button>
              </p>
            </form>
          </div>
          <div className="container-info">
            <h3>Más información</h3>
            <ul>
              <li>
                <span className="more-info material-symbols-outlined">
                  signpost
                </span>
                <span className="direccion">
                  {" "}
                  Calle 38A # 52 - 28 Medellín - Colombia
                </span>
              </li>
              <li>
                <span className="more-info material-symbols-outlined">
                  {" "}
                  mark_email_read
                </span>
                <span className="email"> martialdojo@gmail.com</span>
              </li>
              <li>
                <span className="more-info material-symbols-outlined">
                  {" "}
                  support_agent
                </span>
                <span> +57 315 775 55 55</span>
              </li>
            </ul>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rem
              suscipit natus soluta ullam inventore veritatis deleniti, adipisci
              a ipsa.
            </p>

            <h4>
              <Link to={"/"}>martialdojo.com</Link>
            </h4>

            <h3>Id de la petición: {orderId}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendOrder;
