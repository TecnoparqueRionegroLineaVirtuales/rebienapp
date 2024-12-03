import { useState, useEffect, useRef } from "react";
import ChatBot from "react-simple-chatbot";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import "./assets/App.css";
import Form from "./components/Form";
import NewForm from "./components/Formtwo";
import ShowNextEmpresas from "./components/Empresa";
import amarillo from './assets/img/logo-amarillo.png';
import logo from './assets/img/Rebien.png';
import morado from  './assets/img/logo-morado.png';
import azul from './assets/img/logo-azul.png';
import fucsia from './assets/img/logo-fucsia.png';
import formIcon from './assets/img/form-icon.png';
import iconoR from './assets/img/IconoR.png';


function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showChatBot, setShowChatBot] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showConsent, setShowConsent] = useState(false);
  const [showNextEmpresa, setShowNextEmpresa] = useState(false);
  const [userType, setUserType] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [userName, setUserName] = useState("");
  const [showNewForm, setShowNewForm] = useState(false);
  const [showResultados, setShowResultados] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [visibleEmpresaMessages, setVisibleEmpresaMessages] = useState([]);
  const [loadingEmpresa, setLoadingEmpresa] = useState(false);
  const [selectedDocumentType, setSelectedDocumentType] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [documentNumber, setDocumentNumber] = useState("");
  const [showDocumentInput, setShowDocumentInput] = useState(false);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [fixedDocumentMessage, setFixedDocumentMessage] = useState(null);
  const [showCompanyNameInput, setShowCompanyNameInput] = useState(false);
  const [isCompanyNameFixed, setIsCompanyNameFixed] = useState(false);
  const [showVerificationMessage, setShowVerificationMessage] = useState(false);
  const [showCompanyContinueButton, setShowCompanyContinueButton] = useState(false);
  const [companyNameFixed, setCompanyNameFixed] = useState("");
  const [documentNumberFixed, setDocumentNumberFixed] = useState("");
  const [showButtons, setShowButtons] = useState(false);
  const [showCorrectContainer, setShowCorrectContainer] = useState(false);
  const [documentTypeLabel, setDocumentTypeLabel] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [showHelpMessage, setShowHelpMessage] = useState(false);
  const [visibleConfirmationMessages, setVisibleConfirmationMessages] = useState([]);
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [data1, setData1] = useState([]);
  const [answers, setAnswers] = useState({});
  const [datosEnviar, setDatosEnviar] = useState({});
  const [datosPdf, setDatosPdf] = useState({});
  const messagesEndRef = useRef(null);

  const messages = [
    {
      id: 1,
      text: "Estamos list@s para evaluar cómo están tus hábitos en cuatro ámbitos humanos:",
      img: logo,
    },
    {
      id: 2,
      component: (
        <div>
          <div style={{ display: "flex", alignItems: "center", margin: "5px 0" }}>
            <img
              src= {amarillo}
              alt="Actividad Física & Nutrición"
              style={{ width: "20px", height: "20px", marginRight: "5px" }}
            />
            <p style={{ color: "#000", margin: "0" }}>Actividad Física & Nutrición</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", margin: "5px 0" }}>
            <img
              src={morado}
              alt="Salud Mental & Bienestar"
              style={{ width: "20px", height: "20px", marginRight: "5px" }}
            />
            <p style={{ color: "#000", margin: "0" }}>Salud Mental & Bienestar</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", margin: "5px 0" }}>
            <img
              src={azul}
              alt="Cultura & Entretenimiento"
              style={{ width: "20px", height: "20px", marginRight: "5px" }}
            />
            <p style={{ color: "#000", margin: "0" }}>Cultura & Entretenimiento</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", margin: "5px 0" }}>
            <img
              src={fucsia}
              alt="Belleza & Autocuidado"
              style={{ width: "20px", height: "20px", marginRight: "5px" }}
            />
            <p style={{ color: "#000", margin: "0" }}>Belleza & Autocuidado</p>
          </div>
        </div>
      ),
      img: logo,
    },
    {
      id: 3,
      text: "Primero, regálanos tus datos de contacto:",
      img: logo,
    },
    {
      id: 4,
      component: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            marginTop: "10px",
            width: "100%"
          }}
        >
          <button
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "none",
              backgroundColor: "#73B72B",
              color: "white",
              cursor: "pointer",
              marginTop: "0",
            }}
            onClick={(e) => comprobar(e)}
          >
            Formulario
          </button>
        </div>
      ),
      img: logo,
    },
  ];

  useEffect(() => {
    if (showGreeting) {
      const timeoutIds = [];

      const displayMessages = async () => {

        setVisibleMessages([messages[0]]);


        for (let i = 1; i < messages.length; i++) {
          const message = messages[i];


          setLoading(true);


          await new Promise((resolve) => setTimeout(resolve, 0));


          setLoading(false);


          const timeoutId = setTimeout(() => {
            setVisibleMessages((prev) => [...prev, message]);
          }, i * 1000);
          timeoutIds.push(timeoutId);
        }
      };

      displayMessages();



      return () => {
        timeoutIds.forEach(clearTimeout);
      };
    }
  }, [showGreeting]);

  const empresaMessages = [
    {
      id: 1,
      text: "Selecciona tu tipo de Documento",
      img: logo,
    },
    {
      id: 2,
      text: "Tipo Documento:",
      img: logo,
    },
    {
      id: 3,
      text: "Ahora escribe el numero de documento de tu empresa",
      img: logo,
    },

  ];

  useEffect(() => {
    if (showNextEmpresa) {
      const timeoutIds = [];

      const displayEmpresaMessages = async () => {

        setVisibleEmpresaMessages([empresaMessages[0]]);


        for (let i = 1; i < empresaMessages.length - 1; i++) {
          const message = empresaMessages[i];


          setLoadingEmpresa(true);


          await new Promise((resolve) => setTimeout(resolve, 0));


          setLoadingEmpresa(false);


          const timeoutId = setTimeout(() => {
            setVisibleEmpresaMessages((prev) => [...prev, message]);
          }, i * 900);
          timeoutIds.push(timeoutId);
        }
      };

      displayEmpresaMessages();

      return () => {
        timeoutIds.forEach(clearTimeout);
      };
    }
  }, [showNextEmpresa]);

  const confirmationMessages = [
    {
      id: 1,
      text: `${companyNameFixed} ¿Cómo puedo acompañarte hoy?`,
      img: logo,
    },
    {
      id: 2,
      text: `Déjanos un mensaje y en breve me comunicaré con tu empresa.`,
      img: logo,
    },
    {
      id: 3,
      text: `Siguenos en las redes sociales.`,
      img: logo,
    },

  ];

  useEffect(() => {
    if (showCorrectContainer) {
      setVisibleConfirmationMessages([]);

      const timeoutIds = [];
      let delay = 1000; // 

      const displayConfirmationMessages = () => {
        confirmationMessages.forEach((message, index) => {
          const timeoutId = setTimeout(() => {
            setVisibleConfirmationMessages((prevMessages) => [...prevMessages, message]);
            console.log(`Mostrando mensaje: ${message.text}`);


            if (index === confirmationMessages.length - 1) {
              setShowCorrectContainer(true);
            }
          }, delay);
          timeoutIds.push(timeoutId);
          delay += 1400;
        });
      };

      displayConfirmationMessages();

      return () => {
        timeoutIds.forEach(clearTimeout);
      };
    }
  }, [showCorrectContainer]);


  const handleDocumentTypeChange = (e) => {
    const selectedType = e.target.value;
    setSelectedDocumentType(selectedType);

    if (selectedType) {
      setVisibleEmpresaMessages((prev) => [
        ...prev,
        empresaMessages[2],
      ]);
      setShowDocumentInput(true);
    }
  };

  const handleDocumentNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); 
    if (value.length <= 20) { 
        setDocumentNumber(value);
    }

    if (!isEditingMode) {
        setShowContinueButton(value.length > 0); 
    } else {
        setShowContinueButton(false);
    }
};

  const handleContinueClick = () => {
    setDocumentNumberFixed(documentNumber);
    setShowContinueButton(false);

    const newMessage = {
      id: visibleEmpresaMessages.length + 1,
      text: "Por favor ingresa el Nombre de la empresa",
      img: logo,
      hasInput: true
    };

    setVisibleEmpresaMessages((prevMessages) => [...prevMessages, newMessage]);
    setShowCompanyNameInput(true);
  };

  const handleCompanyNameInputChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, ""); 
    if (value.length <= 50) {
        setCompanyName(value);
    }
    setShowCompanyContinueButton(true); 
};

  const handleCompanyNameSubmit = () => {
    setCompanyNameFixed(companyName);
    setDocumentNumberFixed(documentNumber);
    setIsCompanyNameFixed(true);
    setIsEditingMode(false);

    const documentTypeLabel =
      selectedDocumentType === "cedula_ciudadania"
        ? "Cédula de Ciudadanía"
        : selectedDocumentType === "cedula_extranjeria"
          ? "Cédula de Extranjería"
          : "Pasaporte";


    const verificationMessage = {
      id: visibleEmpresaMessages.length + 1,
      text: (
        <>
          <p style={{ marginBottom: "15px" }}>
            <strong>Por favor verifica si los datos están correctos:</strong>
          </p>
          <p style={{ marginBottom: "10px" }}>
            <strong>Tipo de documento:</strong><br />
            {documentTypeLabel}
          </p>
          <p style={{ marginBottom: "10px" }}>
            <strong>Número de documento:</strong><br />
            {documentNumber}
          </p>
          <p style={{ marginBottom: "10px" }}>
            <strong>Nombre de la empresa:</strong><br />
            {companyName}
          </p>
          <div style={{ marginTop: '15px', textAlign: 'center' }}>
            <button
              onClick={handleCorrectClick}
              style={{
                padding: '10px 20px',
                borderRadius: '5px',
                backgroundColor: '#73B72B',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                flex: '1',
                marginRight: '5px',
                maxWidth: '100px',
              }}
            >
              Correcto
            </button>
            <button
              onClick={handleModifyClick}
              style={{
                padding: '10px 20px',
                borderRadius: '5px',
                backgroundColor: '#242B56',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                flex: '1',
                maxWidth: '100px',
              }}
            >
              Modificar
            </button>
          </div>
        </>
      ),
      img: logo,
    };

    setVisibleEmpresaMessages((prevMessages) => [
      ...prevMessages,
      verificationMessage,
    ]);

    setShowContinueButton(false);
    setShowCompanyContinueButton(false);
  };

  const handleCorrectClick = () => {
  
    setIsCompanyNameFixed(true);
    setDocumentNumberFixed(documentNumber);
    setShowCorrectContainer(true);
    setShowCompanyNameInput(true);
  };

  const handleModifyClick = () => {
    setIsEditingMode(true);
    setIsCompanyNameFixed(false);
    setDocumentNumberFixed(false);

    setShowCompanyContinueButton(true);
    setShowContinueButton(false);

    setVisibleEmpresaMessages((prevMessages) =>
      prevMessages.filter((message) => message.id !== prevMessages.length)
    );

    setShowDocumentInput(true);
    setShowCompanyNameInput(true);
  };

  const handleCompanyNameSubmitInEditMode = () => {
    setDocumentNumberFixed(documentNumber);
    setCompanyNameFixed(companyName);

    const verificationMessage = {
      id: visibleEmpresaMessages.length + 1,
      text: (
        <>
          <p style={{ marginBottom: "15px" }}>
            <strong>Por favor verifica si los datos están correctos:</strong>
          </p>
          <p style={{ marginBottom: "10px" }}>
            <strong>Tipo de documento:</strong><br />
            {selectedDocumentType}
          </p>
          <p style={{ marginBottom: "10px" }}>
            <strong>Número de documento:</strong><br />
            {documentNumber}
          </p>
          <p style={{ marginBottom: "10px" }}>
            <strong>Nombre de la empresa:</strong><br />
            {companyName}
          </p>
        </>
      ),
      img: logo,
    };

    setVisibleEmpresaMessages((prevMessages) => [
      ...prevMessages,
      verificationMessage,
    ]);

    setIsEditingMode(false);
    setShowContinueButton(false);
  };





  useEffect(() => {
    fetchData();
  }, []);

  const comprobar = (e) => {
    e.preventDefault();
    setShowGreeting(false);
    setShowForm(true);
  };
  const comprobar1 = async (e, formData) => {
    e.preventDefault();
    setDatosEnviar(formData)
    setShowGreeting(false);
    setShowForm(false);
  }

  const manejarNuevoFormulario = (e) => {
    e.preventDefault();
    SetShowForm(false);
    setShowChatBot(true);
  };

  const manejarResultados = async (e, formData) => {
    e.preventDefault();
    const data = {
      name: datosEnviar.nombre,
      last_name: datosEnviar.apellido,
      phone: datosEnviar.whatsapp,
      email: datosEnviar.email,
      company: formData.empresa,
      birthdate: datosEnviar.fechaNacimiento,
      occupation: formData.ocupacion,
      city: datosEnviar.ciudad,
      gender: datosEnviar.genero,
      type_doc: datosEnviar.tipoDocumento,
      identity: datosEnviar.numeroDocumento,
      work_area: formData.area,
      compensation_box: formData.cajaCompensacion,
      type_account_id: 1
    }
    setDatosPdf({
      name: datosEnviar.nombre,
      last_name: datosEnviar.apellido,
      company: formData.empresa,
      occupation: formData.ocupacion,
      age: datosEnviar.fechaNacimiento
    })
    let respuesta1 = await axios.post("https://api.somosrebien.co/api/accounts/", data);
    if (respuesta1.data) {
      console.log(respuesta1.data)
      let data1, answer
      Object.keys(answers).forEach(async (questionId, index) => {
        answer = answers[`question${index + 3}`];
        data1 = {
          response: answer,
          account: respuesta1.data?.id,
          question: index + 1
        }
        const respuesta = await axios.post("https://api.somosrebien.co/api/responses/", data1);
      });
      setShowResultados(true)
    }
  };

  const handleAnswer = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const fetchData = async () => {
    try {
      const questionsResponse = await axios.get("https://api.somosrebien.co/api/questions/");
      console.log(questionsResponse)
      if (questionsResponse.data) {
        const questions = questionsResponse.data;
        setData1(questionsResponse.data)
        // Mensajes de introducción para cada grupo de preguntas
        const sectionMessages = [
          "1. Actividad Física & Nutrición",
          "2. Salud Mental & Bienestar",
          "3. Cultura & Entretenimiento",
          "4. Belleza & Autocuidado"
        ];

        const questionsSteps = [];
        const responseSteps = [];

        questions.forEach((item, index) => {

          if (index % 4 === 0) {
            const sectionIndex = Math.floor(index / 4);
            if (sectionMessages[sectionIndex]) {
              const sectionId = `section${sectionIndex + 1}`;
              questionsSteps.push({
                id: sectionId,
                message: sectionMessages[sectionIndex],
                trigger: `question${index + 3}`
              });
            }
          }


          questionsSteps.push({
            id: `question${index + 3}`,
            message: item.name,
            trigger: `response${index + 3}`
          });

          responseSteps.push({
            id: `response${index + 3}`,
            options: [
              {
                value: "Sí",
                label: "Sí",
                trigger: () => {
                  handleAnswer(`question${index + 3}`, "Sí");
                  return `question${index + 4}`;
                },
              },
              {
                value: "No",
                label: "No",
                trigger: () => {
                  handleAnswer(`question${index + 3}`, "No");
                  return `question${index + 4}`;
                },
              },
            ]
          });


          if ((index + 1) % 4 === 0 && index < questions.length - 1) {
            responseSteps[responseSteps.length - 1].options = [
              {
                value: "Sí",
                label: "Sí",
                trigger: () => {
                  handleAnswer(`question${index + 3}`, "Sí");
                  return `section${Math.floor((index + 1) / 4) + 1}`;
                },
              },
              {
                value: "No",
                label: "No",
                trigger: () => {
                  handleAnswer(`question${index + 3}`, "No");
                  return `section${Math.floor((index + 1) / 4) + 1}`;
                },
              },
            ];
          }
        });


        const finalStep = {
          id: `question${questions.length + 3}`,
          message: "Eso sería todo, muchas gracias por responder.",
          trigger: "endButton",
        };


        const endButtonStep = {
          id: "endButton",
          component: (
            <div>
              <button
                style={{
                  backgroundColor: "#73B72B",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  padding: "10px 20px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
                onClick={() => {
                  setShowChatBot(true);
                  setShowNewForm(true);
                }}
              >
                Continuar
              </button>
            </div>
          ),
          end: true,
        };

        // Guardar todos los pasos en el estado
        setData([...questionsSteps, ...responseSteps, finalStep, endButtonStep]);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error al traer las preguntas.", error);
    }
  };


  const handleEnd = () => {
    console.log("Respuestas del usuario:", answers);
  };

  const initialSteps = [
    {
      id: "1",
      message: `Hola, ${userName}!`,
      trigger: "2",
    },
    {
      id: "2",
      component: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            style={{ width: "40px", height: "40px", marginRight: "10px" }}
            alt="Rebien"
          />
          <strong style={{ color: "#000", margin: 0 }}>
            Vamos a comenzar con un ámbito humano a la vez. Por favor responde{" "}
            <span style={{ fontWeight: "bold" }}>Sí</span> o{" "}
            <span style={{ fontWeight: "bold" }}>No</span> a cada pregunta dada.
            Son solo 4 preguntas en cada categoría.
          </strong>
        </div>
      ),
      trigger: "section1",
    },
    ...data,
  ];

  useEffect(() => {
    const scrollToBottom = () => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    scrollToBottom();

  }, [initialSteps]);


  const resetChatBot = () => {
    setShowConsent(false);
    setShowChatBot(false);
    setShowWelcome(true);
    setLoading(false);
  };

  return (
    <div>
      <img src={`${logo}`} style={{display: "flex", justifyContent: "center", width: "100%", height: "100%"}} />
      <button
        style={{
          position: "fixed",
          right: "40px",
          bottom: "20px",
          width: "70px",
          height: "70px",
          padding: "0px",
          fontSize: "24px",
          cursor: "pointer",
          borderRadius: "8px",
          backgroundColor: "#fff",
          color: "#fff",
          border: "none",
        }}
        onClick={() => setShowChatBot(!showChatBot)}
      >
        <img
          src={logo}
          alt="Icono ChatBot"
          style={{ width: "100%", height: "100%" }}
        />
      </button>

      {showChatBot && (
        <div
          style={{
            position: "fixed",
            right: "30px",
            bottom: "95px",
            width: "310px",
            height: "480px",
            zIndex: 1000,
          }}
        >
          {showWelcome ? (
            <div
              style={{
                position: "fixed",
                right: "30px",
                bottom: "95px",
                width: "310px",
                height: "480px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                padding: "20px",
                boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
                textAlign: "center",
                zIndex: 1000,
                fontFamily: "Arial, sans-serif",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                overflowY: "auto",
                overflowX: "hidden",
              }}
            >
              <div
                style={{
                  width: "100%",
                  backgroundColor: "#fff",
                  color: "white",
                  padding: "0",
                  margin: "0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "60px",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                <img
                  src={logo}
                  alt="Rebien"
                  style={{
                    width: "80px",
                    height: "50px",
                    marginRight: "10px",
                  }}
                />
                <span style={{ textAlign: "left", color: "#242B56" }}>
                  RED DE BIENESTAR
                </span>
              </div>
              <p
                style={{
                  marginTop: "50px",
                  color: "black",
                  fontSize: "20px",
                  lineHeight: "1.4",
                  textAlign: "center",
                  flexGrow: 1,
                  padding: "0 20px",
                }}
              >
                ¡Hola! Soy ReBién tu asistente virtual. Estoy aquí para
                acompañarte en la medición y gestión de tu nivel de bienestar.
                Para brindarte una atención más personalizada, te solicitaré
                algunos datos. Cuéntame <br />
                <strong>¿Quién eres?</strong>
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "20px",
                }}
              >
                <button
                  style={{
                    backgroundColor: "#73B72B",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    padding: "10px 0",
                    cursor: "pointer",
                    width: "100px",
                    fontSize: "16px",
                  }}
                  onClick={() => {
                    setShowWelcome(false);
                    setUserType("persona");
                    setShowConsent(true);
                  }}
                >
                  Persona
                </button>
                <button
                  style={{
                    backgroundColor: "#242B56",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    padding: "10px 0",
                    cursor: "pointer",
                    width: "100px",
                    fontSize: "16px",
                  }}
                  onClick={() => {
                    setShowWelcome(false);
                    setUserType("empresa");
                    setShowConsent(true);
                  }}
                >
                  Empresa
                </button>
              </div>
            </div>
          ) : showConsent ? (
            <div
              style={{
                position: "fixed",
                right: "30px",
                bottom: "95px",
                width: "310px",
                height: "480px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                padding: "20px",
                boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
                textAlign: "center",
                zIndex: 1000,
                fontFamily: "Arial, sans-serif",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                overflowY: "auto",
                overflowX: "hidden",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  style={{
                    fontSize: "30px",
                    color: "#242B56",
                    cursor: "pointer",
                    marginRight: "10px",
                    marginLeft: "-10px"
                  }}
                  onClick={() => {
                    setShowWelcome(true);
                    setShowConsent(false);
                  }}
                />
                <img
                  src={logo}
                  alt="Icono"
                  style={{
                    width: "60px",
                    height: "50px",
                    marginRight: "5px",
                  }}
                />
                <span style={{ textAlign: "left", color: "#242B56", fontSize: "18px", fontWeight: "bold" }}>
                  ¡ESPERO ESTES REBIEN!
                </span>
              </div>
              <div style={{ flexGrow: 1 }}>
                <p
                  style={{
                    color: "#000",
                    textAlign: "center",
                    margin: "65px 0 20px 0",
                    fontSize: "20px",
                    lineHeight: "1.4",
                  }}
                >
                  Para continuar es necesario tu autorización para el
                  tratamiento de tus datos. Te invito a consultar nuestras
                  condiciones y políticas de tratamiento de datos en el
                  siguiente enlace:
                  <a href="https://">Condiciones y Políticas</a>
                  <br />
                  <strong>¿Estás de acuerdo?</strong>
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <button
                  style={{
                    backgroundColor: "#73B72B",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    padding: "10px 20px",
                    cursor: "pointer",
                    width: "100px",
                  }}
                  onClick={() => {
                    if (userType === "persona") {
                      setShowGreeting(true);
                      setShowConsent(false);
                    } else {
                      setShowNextEmpresa(true);
                      setShowConsent(true);
                    }
                  }}
                >
                  Sí
                </button>
                <button
                  style={{
                    backgroundColor: "#242B56",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    padding: "10px 20px",
                    cursor: "pointer",
                    width: "100px",
                  }}
                  onClick={resetChatBot}
                >
                  No
                </button>
              </div>
              {showNextEmpresa && (
                <ShowNextEmpresas
                  visibleEmpresaMessages={visibleEmpresaMessages}
                  setVisibleEmpresaMessages={setVisibleEmpresaMessages}
                  selectedDocumentType={selectedDocumentType}
                  showDropdown={showDropdown}
                  companyName={companyName}
                  setShowNextEmpresa={setShowNextEmpresa}
                  showCompanyContinueButton={showCompanyContinueButton}
                  setCompanyName={setCompanyName}
                  setShowCompanyContinueButton={setShowCompanyContinueButton}
                  showCompanyNameInput={showCompanyNameInput}
                  handleDocumentTypeChange={handleDocumentTypeChange}
                  showDocumentInput={showDocumentInput}
                  setShowDropdown={setShowDropdown}
                  setShowConsent={setShowConsent}
                  setShowDocumentInput={setShowDocumentInput}
                  setShowCompanyNameInput={setShowCompanyNameInput}
                  documentNumber={documentNumber}
                  handleCompanyNameInputChange={handleCompanyNameInputChange}
                  setDocumentNumber={setDocumentNumber}
                  documentNumberFixed={documentNumberFixed}
                  setDocumentNumberFixed={setDocumentNumberFixed}
                  handleDocumentNumberChange={handleDocumentNumberChange}
                  showContinueButton={showContinueButton}
                  showButtons={showButtons}
                  visibleConfirmationMessages={visibleConfirmationMessages}
                  setVisibleConfirmationMessages={setVisibleConfirmationMessages}
                  showMessage={showMessage}
                  showHelpMessage={showHelpMessage}
                  setShowHelpMessage={setShowHelpMessage}
                  setShowMessage={setShowMessage}
                  showCorrectContainer={showCorrectContainer}
                  setShowCorrectContainer={setShowCorrectContainer}
                  setShowButtons={setShowButtons}
                  confirmationMessage={confirmationMessage}
                  setConfirmationMessage={setConfirmationMessage}
                  documentTypeLabel={documentTypeLabel}
                  isCompanyNameFixed={isCompanyNameFixed}
                  companyNameFixed={companyNameFixed}
                  isEditingMode={isEditingMode}
                  setIsEditingMode={setIsEditingMode}
                  setCompanyNameFixed={setCompanyNameFixed}
                  handleCorrectClick={handleCorrectClick}
                  setIsCompanyNameFixed={setIsCompanyNameFixed}
                  handleCompanyNameSubmit={handleCompanyNameSubmit}
                  setShowContinueButton={setShowContinueButton}
                  setDocumentTypeLabel={setDocumentTypeLabel}
                  handleContinueClick={handleContinueClick}
                />)}
            </div>
          ) : showForm ? (
            <Form
              showForm={showForm}
              setUserName={setUserName}
              comprobar1={comprobar1}
              userName={userName}
            />
          ) : showGreeting ? (
            <div
              style={{
                position: "fixed",
                right: "30px",
                bottom: "95px",
                width: "310px",
                height: "480px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                padding: "20px",
                boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
                textAlign: "center",
                zIndex: 1000,
                fontFamily: "Arial, sans-serif",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                overflowY: "auto",
                overflowX: "hidden",
              }}
            >

              {visibleMessages.map((message) => (
                <div key={message.id} style={{ display: "flex", alignItems: "flex-start", marginTop: "20px", position: "relative" }}>

                  {message.id === 1 && (
                    <FontAwesomeIcon
                      icon={faAngleLeft}
                      style={{
                        position: "absolute",
                        top: "-30px",
                        left: "-5px",
                        fontSize: "30px",
                        color: "#242B56",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setShowNextEmpresa(false);
                        setShowConsent(true);
                      }}
                    />
                  )}

                  <img
                    src={message.img}
                    alt="Rebien"
                    style={{
                      width: "60px",
                      height: "40px",
                      marginRight: "10px",
                      marginBottom: "40px",
                    }}
                  />

                  <div
                    style={{
                      backgroundColor: message.id === 4 ? "0px 0px 15px rgba(0, 0, 0, 0.3)" : "#f1f1f1",
                      borderRadius: "10px",
                      padding: "10px",
                      color: message.id === 4 ? "#fff" : "#000",
                      flex: 1,
                    }}
                  >
                    {message.component ? message.component : <span>{message.text}</span>}
                  </div>
                </div>
              ))}
            </div>

          ) : (
            !loading && showChatBot &&
              data.length > 0 ? (
              <>
                <div
                  style={{
                    position: "fixed",
                    right: "30px",
                    bottom: "95px",
                    width: "350px",
                    height: showForm ? "480px" : "auto",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
                    textAlign: "center",
                    zIndex: 1000,
                    fontFamily: "Arial, sans-serif",
                    overflowY: "auto",
                    overflowX: "hidden",
                  }}
                >
                  <ChatBot
                    steps={[...initialSteps]}
                    handleEnd={handleEnd}
                    headerTitle={
                      <div
                        style={{
                          textAlign: "left",
                          display: "flex",
                          alignItems: "center",
                          fontWeight: "bold",
                          justifyContent: "flex-start",
                          width: "100%",
                          color: "#242B56",
                          paddingLeft: "10px"
                        }}
                      >
                        <img
                          src={logo}
                          alt="Rebien"
                          style={{
                            width: "50px",
                            height: "50px",
                            marginRight: "30px"
                          }}
                        />
                        Soy tu Asistente Virtual
                      </div>
                    }
                    enableSmoothScroll={true}
                    userBubbleStyle={{ display: "none" }}
                    botBubbleStyle={{ display: "none" }}
                    inputStyle={{ display: "none" }}
                    headerStyle={{
                      backgroundColor: "transparent",
                      color: "#fff",
                    }}
                    botAvatar={logo}
                    style={{
                      width: "100%",
                      height: "100%",
                      overflow: "auto",
                    }}
                  />
                  <div ref={messagesEndRef} />
                </div>
                {showNewForm && (
                  <NewForm
                    showResultados={showResultados}
                    userName={userName}
                    manejarResultados={manejarResultados}
                    preguntas={data1}
                    answers={answers}
                    datos={datosPdf}
                  />
                )}

              </>
            ) : (
              <NewForm
                showResultados={showResultados}
                userName={userName}
                manejarResultados={manejarResultados}

              />
            )
          )}
        </div>
      )}
    </div>
  );
}

export default App;