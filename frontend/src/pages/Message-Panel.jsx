import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { MainLayout } from "../layouts/MainLayout";

// Agregamos la tipografía directamente en el componente
const addFontLink = () => {
  const link = document.createElement("link");
  link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
};
addFontLink();

export const MessagePanel = () => {
  const [selectedPatient, setSelectedPatient] = useState("Paciente 1");
  const [messages, setMessages] = useState({
    "Paciente 1": [
      { sender: "Paciente", content: "Mensaje del paciente 1" },
      { sender: "Nutriólogo", content: "Respuesta del nutriólogo" },
    ],
    "Paciente 2": [
      { sender: "Paciente", content: "Mensaje del paciente 2" },
      { sender: "Nutriólogo", content: "Respuesta del nutriólogo" },
    ],
    "Paciente 3": [
      { sender: "Paciente", content: "Mensaje del paciente 3" },
      { sender: "Nutriólogo", content: "Respuesta del nutriólogo" },
    ],
    "Paciente 4": [
      { sender: "Paciente", content: "Mensaje del paciente 4" },
      { sender: "Nutriólogo", content: "Respuesta del nutriólogo" },
    ],
  });
  const [inputMessage, setInputMessage] = useState("");
  const [unreadMessages, setUnreadMessages] = useState({
    "Paciente 1": false,
    "Paciente 2": false,
    "Paciente 3": false,
    "Paciente 4": false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const randomPatient = `Paciente ${Math.ceil(Math.random() * 4)}`;
      setMessages((prevMessages) => ({
        ...prevMessages,
        [randomPatient]: [
          ...prevMessages[randomPatient],
          { sender: "Paciente", content: "Nuevo mensaje del paciente" },
        ],
      }));
      setUnreadMessages((prev) => ({ ...prev, [randomPatient]: true }));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      setMessages({
        ...messages,
        [selectedPatient]: [
          ...messages[selectedPatient],
          { sender: "Nutriólogo", content: inputMessage },
        ],
      });
      setInputMessage("");
    }
  };

  const handleSelectPatient = (paciente) => {
    setSelectedPatient(paciente);
    setUnreadMessages((prev) => ({ ...prev, [paciente]: false }));
  };

  return (
    <MainLayout>
      <div className="container-fluid vh-100 d-flex flex-column bg-light mt-4">
        <div className="row flex-grow-1 shadow-lg rounded" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <div className="col-12 col-md-3 border-end p-3 bg-white" style={{ minHeight: "100vh" }}>
            <h4 className="text-center text-primary mb-4" style={{ fontWeight: "bold", paddingTop: "15px" }}>
              Pacientes
            </h4>
            <ul className="list-unstyled mt-4">
              {Object.keys(messages).map((paciente, index) => (
                <li
                  key={index}
                  className={`d-flex align-items-center mb-3 p-3 rounded ${selectedPatient === paciente ? "bg-primary text-white" : "bg-light border"} fw-semibold position-relative`}
                  onClick={() => handleSelectPatient(paciente)}
                  style={{
                    cursor: "pointer",
                    transition: "background 0.3s, transform 0.2s",
                    wordBreak: "break-word",
                  }}
                >
                  <div className="me-2">
                    <span className="badge rounded-circle bg-secondary">
                      <i className="bi bi-person"></i>
                    </span>
                  </div>
                  <span>{paciente}</span>
                  {unreadMessages[paciente] && (
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                      style={{ fontSize: "0.6rem", width: "15px", height: "15px" }}
                    >
                      {" "}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-md-9 d-flex flex-column bg-white">
            <div className="flex-grow-1 p-3 overflow-auto" style={{ background: "#f8f9fa", borderRadius: "8px", maxHeight: "70vh" }}>
              {messages[selectedPatient].map((msg, index) => (
                <div
                  key={index}
                  className={`d-flex ${msg.sender === "Nutriólogo" ? "justify-content-end" : "justify-content-start"} mb-3`}
                >
                  <div
                    className={`p-3 rounded shadow ${msg.sender === "Nutriólogo" ? "bg-primary text-white" : "bg-light border"}`}
                    style={{ maxWidth: "70%", fontSize: "1rem", transition: "transform 0.2s", wordBreak: "break-word" }}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="p-3 border-top bg-light">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Escribir mensaje..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  style={{
                    borderTopLeftRadius: "15px",
                    borderBottomLeftRadius: "15px",
                    fontSize: "1rem",
                  }}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    borderTopRightRadius: "15px",
                    borderBottomRightRadius: "15px",
                    fontWeight: "bold",
                  }}
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MessagePanel;
