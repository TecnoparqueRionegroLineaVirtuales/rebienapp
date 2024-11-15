import { useState, useEffect,  useRef } from "react";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyDocument from "./PDF";
import { PDFDownloadLink } from '@react-pdf/renderer'
import { Pie } from 'react-chartjs-2';
import html2canvas from 'html2canvas';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend,ChartDataLabels);

const NewForm = ({ showResultados, userName, manejarResultados, preguntas, answers }) => {
    // Estados para almacenar los valores de los campos
    const [formData, setFormData] = useState({
        ocupacion: "",
        empresa: "",
        area: "",
        cajaCompensacion: ""
    });
    const [porcentajes, setPorcentajes] = useState({})
    const [totalBienes, setTotalBienes] = useState(0)
    const chartRef = useRef(null);
    const [imageData, setImageData] = useState(null);
    const [chartData, setChartData] = useState({});
    const [option, setOption] = useState({});


    useEffect(() => {
        console.log(answers)
        setChartData(calculatePercentages())
        // Espera un segundo para que el gráfico se renderice completamente antes de capturarlo
        setTimeout(() => {
            if (chartRef.current) {
                html2canvas(chartRef.current.canvas).then((canvas) => {
                    setImageData(canvas.toDataURL('image/png'));
                });
            }
        }, 1000);
    }, []);



    // Función para actualizar los valores de los campos
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Verificar si todos los campos están completos
    const isFormComplete = Object.values(formData).every((value) => value.trim() !== "");

    const calculatePercentages = () => {
        // Variables para contar respuestas "Sí" y "No" por cada sección
        let porcentajeSi1 = 0, porcentajeNo1 = 0;
        let porcentajeSi2 = 0, porcentajeNo2 = 0;
        let porcentajeSi3 = 0, porcentajeNo3 = 0;
        let porcentajeSi4 = 0, porcentajeNo4 = 0;

      
        Object.keys(answers).forEach((questionId, index) => {
            const answer = answers[`question${index + 3}`];
            if (index >= 0 && index < 4) { 
                if (answer === "Sí") porcentajeSi1++;
                else porcentajeNo1++;
            } else if (index >= 4 && index < 8) { 
                if (answer === "Sí") porcentajeSi2++;
                else porcentajeNo2++;
            } else if (index >= 8 && index < 12) { 
                if (answer === "Sí") porcentajeSi3++;
                else porcentajeNo3++;
            } else if (index >= 12 && index < 16) {
                if (answer === "Sí") porcentajeSi4++;
                else porcentajeNo4++;
            }
        });

        // Calcular porcentaje por sección
        const totalPreguntasPorSeccion = 4;
        const percentages = {
            porcentajeSi1: (porcentajeSi1 / totalPreguntasPorSeccion) * 100,
            porcentajeNo1: (porcentajeNo1 / totalPreguntasPorSeccion) * 100,
            porcentajeSi2: (porcentajeSi2 / totalPreguntasPorSeccion) * 100,
            porcentajeNo2: (porcentajeNo2 / totalPreguntasPorSeccion) * 100,
            porcentajeSi3: (porcentajeSi3 / totalPreguntasPorSeccion) * 100,
            porcentajeNo3: (porcentajeNo3 / totalPreguntasPorSeccion) * 100,
            porcentajeSi4: (porcentajeSi4 / totalPreguntasPorSeccion) * 100,
            porcentajeNo4: (porcentajeNo4 / totalPreguntasPorSeccion) * 100,
        };

        const totalPorcentajes = percentages.porcentajeNo1 + percentages.porcentajeNo2 + percentages.porcentajeNo3 + percentages.porcentajeNo4
        const totalBienestar = totalPorcentajes / 4

        setTotalBienes(totalBienestar)
        setPorcentajes(percentages)
        return {
            labels: ['Actividad Física & Nutrición', 'Salud Mental & Bienestar', 'Cultura & Entretenimiento', 'Belleza & Autocuidado'],
            datasets: [
              {
                data: [percentages.porcentajeNo1, percentages.porcentajeNo2, percentages.porcentajeNo3, percentages.porcentajeNo4],
                backgroundColor: ['#F8B133', '#242B56', '#4CBBC0', '#D3398D'],
              },
            ],
        }
    };

    const options = {
        plugins: {
            datalabels: {
                color: 'white',
                font: {
                    weight: 'bold',
                    size: 14,
                },
                formatter: (value) => `${value}%`,
                anchor: 'center',
                align: 'center',
            },
            legend: {
                // display: true,
                // position: 'top',
                display: false
            },
        },
    }

    return (
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
            {chartData?.labels && (<div style={{position: "absolute", top: "-10000px", left: "-10000px" }}>
                <Pie ref={chartRef} data={chartData} options={options} />
            </div>)}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                }}
            >
                <img
                    src="../public/img/Rebien.png"
                    alt="Rebien"
                    style={{
                        width: "80px",
                        height: "50px",
                        marginRight: "10px",
                    }}
                />
                <span style={{ color: "black", fontWeight: "bold" }}>
                    {`Listo, ${userName}!`}
                </span>
            </div>

            <h2 style={{ color: "#242B56", margin: "10px 0" }}>
                ¡Generamos tus resultados!
            </h2>
            <p style={{ color: "black", margin: "25px 0" }}>
                <strong>
                    Antes de finalizar, cuéntanos un poco más sobre ti:
                </strong>
            </p>
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                }}
            >
                {/* Campo Ocupación */}
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <label style={{ color: "#242B56", fontSize: "16px" }}>Ocupación:</label>
                    <input
                        type="text"
                        name="ocupacion"
                        value={formData.ocupacion}
                        onChange={handleChange}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                        }}
                        style={{
                            width: "90%",
                            margin: "0 auto",
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            backgroundColor: "#fff",
                            color: "black",
                            fontSize: "14px",
                            transition: "border-color 0.3s",
                        }}
                        placeholder="Escribe tu ocupación"
                    />
                </div>

                {/* Campo Empresa/Institución */}
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <label style={{ color: "#242B56", fontSize: "16px" }}>Empresa/Institución:</label>
                    <input
                        type="text"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                        }}
                        style={{
                            width: "90%",
                            margin: "0 auto",
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            backgroundColor: "#fff",
                            color: "black",
                            fontSize: "14px",
                            transition: "border-color 0.3s",
                        }}
                        placeholder="Nombre de la empresa o institución"
                    />
                </div>

                {/* Campo Área */}
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <label style={{ color: "#242B56", fontSize: "16px" }}>Área:</label>
                    <input
                        type="text"
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                        }}
                        style={{
                            width: "90%",
                            margin: "0 auto",
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            backgroundColor: "#fff",
                            color: "black",
                            fontSize: "14px",
                            transition: "border-color 0.3s",
                        }}
                        placeholder="Área de trabajo"
                    />
                </div>

                {/* Campo Caja de Compensación */}
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <label style={{ color: "#242B56", fontSize: "16px" }}>Caja de Compensación:</label>
                    <input
                        type="text"
                        name="cajaCompensacion"
                        value={formData.cajaCompensacion}
                        onChange={handleChange}
                        style={{
                            width: "90%",
                            margin: "0 auto",
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            backgroundColor: "#fff",
                            color: "black",
                            fontSize: "14px",
                            transition: "border-color 0.3s",
                        }}
                        placeholder="Nombre de la caja de compensación"
                    />
                </div>

                {/* Botón Continuar */}
                <button
                    type="button"
                    style={{
                        backgroundColor: isFormComplete ? "#73B72B" : "#ccc",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        padding: "12px",
                        cursor: isFormComplete ? "pointer" : "not-allowed",
                        marginTop: "15px",
                        fontSize: "16px",
                        transition: "background-color 0.3s, transform 0.2s",
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        if (isFormComplete) manejarResultados(e);
                    }}
                    disabled={!isFormComplete}
                >
                    Continuar
                </button>
            </form>

            {showResultados && (
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
                        overflowY: "auto",
                        overflowX: "hidden",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "10px",
                        }}
                    >
                        <img
                            src="../public/img/Rebien.png"
                            alt="Rebien"
                            style={{
                                width: "80px",
                                height: "50px",
                                marginRight: "10px",
                            }}
                        />
                        <span style={{ color: "black", fontWeight: "bold" }}>
                            {` ${userName}!`}
                        </span>
                    </div>
                    <h2 style={{ margin: "10px 0" }}>
                        <span style={{ color: "#73B72B" }}>
                            ¡Felicitaciones!
                        </span>
                        <span style={{ color: "#555", marginLeft: "5px" }}>
                            Aquí está el informe de tu nivel de bienestar:
                            {imageData && <PDFDownloadLink
                                document={
                                    <MyDocument
                                        nombre={"Juan Jose Ospina"}
                                        edad="18"
                                        empresa={"Zona Franca"}
                                        Ocupacion="Empleado"
                                        preguntas={preguntas}
                                        answers={answers}
                                        percentages={porcentajes}
                                        totalBienestar={totalBienes}
                                        imageData={imageData}
                                    />
                                }
                                fileName="mi_nivel_de_bienestar.pdf"
                            >
                                {({ loading }) => (
                                    <span
                                        style={{
                                            color: "#73B72B",
                                            textDecoration: "underline",
                                            cursor: "pointer",
                                        }}
                                    >
                                        {loading ? "Generando PDF..." : "LinkBienestar"}
                                    </span>
                                )}
                            </PDFDownloadLink>}
                        </span>
                        {/* <img src={imageData} alt={"imagen"}></img> */}
                    </h2>
                    <p
                        style={{
                            color: "#555",
                            textAlign: "center",
                            marginTop: "50px",
                        }}
                    >
                        Tenemos una sorpresa para ti, para que cada semana de
                        tu vida, esté llena de amor propio y buenos hábitos:
                        <a
                            href="https://drive.google.com/file/d/107rqCVcpu3EJUBMLq52d93F_zsn8ye5E/view?usp=drivesdk"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: "#73B72B",
                                textDecoration: "underline",
                            }}
                        >
                            Link agenda de Bienestar
                        </a>
                    </p>
                    <div style={{ textAlign: "center", marginTop: "30px" }}>
                        <p style={{ color: "#555" }}>
                            Síguenos en las redes sociales:
                        </p>
                        <a
                            href="https://www.instagram.com/rebien.co"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ marginRight: "15px" }}
                        >
                            <FontAwesomeIcon
                                icon={faInstagram}
                                style={{ fontSize: "24px", color: "#73B72B" }}
                            />
                        </a>
                        <a
                            href="https://www.facebook.com/Rebien.co?mibextid=ZbWKwL"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faFacebook}
                                style={{ fontSize: "24px", color: "#73B72B" }}
                            />
                        </a>
                    </div>

                    <p
                        style={{
                            textAlign: "center",
                            color: "#555",
                            marginTop: "20px",
                        }}
                    >
                        ¿Quieres hablar con nosotros? Contáctanos:{" "}
                        <strong>
                            <a
                                href="https://wa.me/573053456299"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: "#73B72B",
                                    textDecoration: "underline",
                                }}
                            >
                                https://wa.me/573053456299
                            </a>
                        </strong>
                    </p>
                </div>
            )}
        </div>
    )
}

export default NewForm;