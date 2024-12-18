import { useState } from "react";
import amarillo from '../assets/img/logo-amarillo.png';
import logo from '../assets/img/Rebien.png';
import morado from  '../assets/img/logo-morado.png';
import azul from '../assets/img/logo-azul.png';
import fucsia from '../assets/img/logo-fucsia.png';
import formIcon from '../assets/img/form-icon.png';
import iconoR from '../assets/img/IconoR.png';

const Form = ({ showForm, setUserName, comprobar1, userName }) => {
    const [formData, setFormData] = useState({
        nombre: userName,
        apellido: "",
        tipoDocumento: "",
        numeroDocumento: "",
        fechaNacimiento: "",
        genero: "",
        nacionalidad: "",
        email: "",
        whatsapp: "",
        ciudad: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const isFormComplete = Object.values(formData).every((value) => value.trim() !== "");

    const today = new Date();
    const maxDate = new Date(today.getFullYear() - 12, today.getMonth(), today.getDate()).toISOString().split("T")[0]; // Hace 12 años
    const minDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate()).toISOString().split("T")[0]; // Hace 120 años
    const [isEmailValid, setIsEmailValid] = useState(true);
    const h = (email) => {
        return /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/.test(email); 
    };

    return (
        <div
            style={{
                position: "fixed",
                right: "30px",
                bottom: "95px",
                width: "310px",
                height: showForm ? "480px" : "auto",
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
            <h2
                style={{
                    color: "#242B56",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <img
                    src={formIcon}
                    alt="Icono Formulario"
                    style={{
                        width: "24px",
                        height: "24px",
                        color: "#242B56",
                        marginRight: "10px",
                    }}
                />
                Datos de Contacto
            </h2>
            <form id="miFormulario">
                {/* Campo Nombre completo */}
                <div style={{ marginBottom: "15px", textAlign: "left", maxWidth: "91%", marginLeft: "0%" }}>
                    <label style={{ color: "black", fontSize: "14px" }}>Nombres</label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={(e) => {
                            if (/^[a-zA-Z\s]*$/.test(e.target.value) && e.target.value.length <= 40) {
                                handleChange(e);
                            }
                        }}
                        placeholder="Nombres"
                        required
                        style={{
                            width: "100%",
                            padding: "12px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
                            backgroundColor: "white",
                            color: "black",
                            transition: "border-color 0.3s",
                        }}
                    />
                </div>
                <div style={{ marginBottom: "15px", textAlign: "left", maxWidth: "91%", marginLeft: "0%" }}>
                    <label style={{ color: "black", fontSize: "14px" }}>Apellidos</label>
                    <input
                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={(e) => {
                            if (/^[a-zA-Z\s]*$/.test(e.target.value) && e.target.value.length <= 30) {
                                handleChange(e);
                            }
                        }}
                        placeholder="Apellidos"
                        required
                        style={{
                            width: "100%",
                            padding: "12px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
                            backgroundColor: "white",
                            color: "black",
                            transition: "border-color 0.3s",
                        }}
                    />
                </div>

                {/* Campo Tipo de documento */}
                <div style={{ marginBottom: "15px", textAlign: "left" }}>
                    <label style={{ color: "black", fontSize: "14px" }}>Tipo de documento</label>
                    <select
                        name="tipoDocumento"
                        value={formData.tipoDocumento}
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "12px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
                            backgroundColor: "white",
                            color: "black",
                            transition: "border-color 0.3s",
                        }}
                    >
                        <option value="">Tipo de documento</option>
                        <option value="cc">Cédula</option>
                        <option value="ti">T.I</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>

                {/* Campo Número de documento */}
                <div style={{ marginBottom: "15px", textAlign: "left", maxWidth: "91%", marginLeft: "0%" }}>
                    <label style={{ color: "black", fontSize: "14px" }}>Número de documento</label>
                    <input
                        type="text"
                        name="numeroDocumento"
                        value={formData.numeroDocumento}
                        onChange={(e) => {
                            if (/^\d*$/.test(e.target.value) && e.target.value.length <= 15) {
                                handleChange(e);
                            }
                        }}
                        placeholder="Nro documento"
                        required
                        style={{
                            width: "100%",
                            padding: "12px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
                            backgroundColor: "white",
                            color: "black",
                            transition: "border-color 0.3s",
                        }}
                    />
                </div>

                {/* Campo Fecha de nacimiento */}
                <div style={{ marginBottom: "15px", textAlign: "left", maxWidth: "91%", marginLeft: "0%", position: "relative" }}>
                    <label style={{ color: "black", fontSize: "14px" }}>Fecha de nacimiento</label>
                    <input
                        type="date"
                        name="fechaNacimiento"
                        value={formData.fechaNacimiento}
                        onChange={(e) => {
                            const inputDate = e.target.value;
                            const inputYear = new Date(inputDate).getFullYear();
                
                            if (inputYear > 2012) {
                                alert("El año de nacimiento no puede ser mayor a 2012.");
                                return;
                            }
                
                            
                            handleChange(e);
                        }}
                        max={maxDate} 
                        required
                        style={{
                            width: "100%",
                            padding: "12px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
                            backgroundColor: "white",
                            color: "black",
                            transition: "border-color 0.3s",
                            appearance: "none",
                        }}

                    />
                    <span style={{
                        position: "absolute",
                        right: "-15px",
                        top: "70%",
                        transform: "translateY(-60%)",
                        pointerEvents: "none",
                        color: "black",
                        fontSize: "18px"
                    }}>📅</span>
                </div>


                {/* Campo Identidad de género */}
                <div style={{ marginBottom: "15px", textAlign: "left" }}>
                    <label style={{ color: "black", fontSize: "14px" }}>Identidad de género</label>
                    <select
                        name="genero"
                        value={formData.genero}
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "12px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
                            backgroundColor: "white",
                            color: "black",
                            transition: "border-color 0.3s",
                        }}
                    >
                        <option value="">Selecciona género</option>
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                        <option value="O">Otro</option>
                    </select>
                </div>

                {/* Campo Nacionalidad */}
                <div style={{ marginBottom: "15px", textAlign: "left", maxWidth: "91%", marginLeft: "0%" }}>
                    <label style={{ color: "black", fontSize: "14px" }}>Nacionalidad</label>
                    <input
                        type="text"
                        name="nacionalidad"
                        value={formData.nacionalidad}
                        onChange={(e) => {
                            if (/^[a-zA-Z\s]*$/.test(e.target.value) && e.target.value.length <= 20) {
                                handleChange(e);
                            }
                        }}
                        placeholder="Nacionalidad"
                        required
                        style={{
                            width: "100%",
                            padding: "12px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
                            backgroundColor: "white",
                            color: "black",
                            transition: "border-color 0.3s",
                        }}
                    />
                </div>

                {/* Campo E-mail */}
                <div style={{ marginBottom: "15px", textAlign: "left", maxWidth: "91%", marginLeft: "0%" }}>
                    <label style={{ color: "black", fontSize: "14px" }}>E-mail</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => {
                            const email = e.target.value;
                            setFormData((prevData) => ({
                                ...prevData,
                                email,
                            }));
                        }}
                        placeholder="Correo electrónico"
                        style={{
                            width: "100%",
                            padding: "12px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
                            backgroundColor: "white",
                            color: "black",
                            transition: "border-color 0.3s",
                        }}
                    />
                </div>


                {/* Campo WhatsApp */}
                <div style={{ marginBottom: "15px", textAlign: "left", maxWidth: "91%", marginLeft: "0%" }}>
                    <label style={{ color: "black", fontSize: "14px" }}>WhatsApp</label>
                    <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={(e) => {
                            if (/^\d*$/.test(e.target.value) && e.target.value.length <= 12) {
                                handleChange(e);
                            }
                        }}
                        placeholder="WhatsApp"
                        required
                        style={{
                            width: "100%",
                            padding: "12px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
                            backgroundColor: "white",
                            color: "black",
                            transition: "border-color 0.3s",
                        }}
                    />
                </div>

                {/* Campo Ciudad de residencia */}
                <div style={{ marginBottom: "15px", textAlign: "left", maxWidth: "91%", marginLeft: "0%" }}>
                    <label style={{ color: "black", fontSize: "14px" }}>Ciudad de residencia</label>
                    <input
                        type="text"
                        name="ciudad"
                        value={formData.ciudad}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (value.length <= 35) {
                                handleChange(e);
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                        }}
                        placeholder="Ciudad de residencia"
                        required
                        style={{
                            width: "100%",
                            padding: "12px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
                            backgroundColor: "white",
                            color: "black",
                            transition: "border-color 0.3s",
                        }}
                    />
                </div>

                {/* Botón Enviar */}
                <button
                    type="button"
                    style={{
                        width: "100%",
                        padding: "12px",
                        backgroundColor: isFormComplete ? "#73B72B" : "#ccc",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        fontSize: "16px",
                        cursor: isFormComplete ? "pointer" : "not-allowed",
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        if (!formData.email.endsWith("@gmail.com")) {
                            alert("Por favor, ingresa una dirección de correo válida que termine en @gmail.com");
                            return;
                        }
                        if (isFormComplete) {
                            comprobar1(e, formData);
                        }
                    }}
                    disabled={!isFormComplete}
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Form;
