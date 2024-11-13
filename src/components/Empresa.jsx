import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const ShowNextEmpresas = ({ visibleEmpresaMessages, setVisibleEmpresaMessages, showDropdown, setShowDropdown,
    selectedDocumentType, setSelectedDocumentType,
    handleDocumentTypeChange, companyName, handleCompanyNameInputChange, setCompanyName,
    showDocumentInput, setShowDocumentInput, documentNumber, setDocumentNumber,
    handleDocumentNumberChange, handleCompanyNameSubmit, showCompanyNameInput,
    setShowCompanyNameInput, showHelpMessage, setShowHelpMessage, companyNameFixed, setCompanyNameFixed, isCompanyNameFixed, setIsCompanyNameFixed, showContinueButton, setShowContinueButton, handleContinueClick,
    showCompanyContinueButton, setShowConsent, setShowNextEmpresa, isEditingMode, setIsEditingMode, visibleConfirmationMessages, setVisibleConfirmationMessages, confirmationMessage, setConfirmationMessage, showMessage, setShowMessage, handleCorrectClick, documentTypeLabel, showButtons, setShowButtons, showCorrectContainer, setShowCorrectContainer, documentNumberFixed, setDocumentNumberFixed, setShowCompanyContinueButton,
}) => {

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
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <FontAwesomeIcon
                    icon={faAngleLeft}
                    style={{
                        fontSize: "25px",
                        color: "#242B56",
                        cursor: "pointer",
                        marginRight: "10px",
                        marginLeft: "1px",
                        marginTop: "-5px"
                    }}
                    onClick={() => {
                        setShowNextEmpresa(false);
                        setShowConsent(true);
                    }}
                />
            </div>
            {visibleEmpresaMessages.map((message) => (
                <div key={message.id} style={{ display: 'flex', alignItems: 'flex-start', marginTop: '10px' }}>
                    <img
                        src={message.img}
                        alt="Empresa"
                        style={{ width: '60px', height: '40px', margin: '-5px', marginRight: '10px' }}
                    />
                    <div
                        style={{
                            backgroundColor: '#f1f1f1',
                            borderRadius: '10px',
                            padding: '10px',
                            color: '#000',
                            flex: 1,
                        }}
                    >
                        {message.id === 2 ? (
                            <div
                                style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                                onClick={() => setShowDropdown((prev) => !prev)}
                            >
                                <span style={{ flex: 1 }}>{message.text}</span>
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    style={{ width: '20px', height: '20px', marginRight: '15px' }}
                                />
                            </div>
                        ) : (
                            <span>{message.text}</span>
                        )}

                        {message.id === 2 && showDropdown && (
                            <div style={{ marginTop: '10px' }}>
                                {!selectedDocumentType ? (
                                    <select
                                        value={selectedDocumentType}
                                        onChange={handleDocumentTypeChange}
                                        style={{
                                            padding: '10px',
                                            borderRadius: '5px',
                                            width: '100%',
                                            border: '1px solid #ccc',
                                            backgroundColor: '#242B56',
                                            color: '#fff',
                                            fontSize: '16px',
                                            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                                            cursor: 'pointer',
                                        }}
                                        onFocus={(e) => (e.target.style.boxShadow = '0 0 5px rgba(0, 123, 255, 0.5)')}
                                        onBlur={(e) => (e.target.style.boxShadow = 'none')}
                                    >
                                        <option value="">Selecciona un Documento</option>
                                        <option value="cedula_ciudadania">Cédula de Ciudadanía</option>
                                        <option value="cedula_extranjeria">Cédula de Extranjería</option>
                                        <option value="pasaporte">Pasaporte</option>
                                    </select>
                                ) : (
                                    <div
                                        style={{
                                            marginTop: '10px',
                                            padding: '10px',
                                            borderRadius: '5px',
                                            backgroundColor: '#242B56',
                                            color: '#fff',
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                        }}
                                    >
                                        {selectedDocumentType === 'cedula_ciudadania' && 'Cédula de Ciudadanía'}
                                        {selectedDocumentType === 'cedula_extranjeria' && 'Cédula de Extranjería'}
                                        {selectedDocumentType === 'pasaporte' && 'Pasaporte'}
                                    </div>
                                )}
                            </div>
                        )}

                        {message.id === 3 && showDocumentInput && (
                            <div style={{ marginTop: '10px' }}>
                                {documentNumberFixed ? (
                                    <div
                                        style={{
                                            backgroundColor: '#242B56',
                                            borderRadius: '3px',
                                            border: '1px solid #ccc',
                                            color: '#fff',
                                            padding: '10px',
                                            width: '90%', 
                                            maxWidth: '190px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <p style={{ margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                            <strong>{documentNumberFixed}</strong>
                                        </p>
                                    </div>
                                ) : (
                                    <input
                                        type="text"
                                        value={documentNumber}
                                        onChange={handleDocumentNumberChange}
                                        placeholder="Escribe el número de documento"
                                        style={{
                                            padding: '10px',
                                            borderRadius: '5px',
                                            width: '90%', 
                                            maxWidth: '200px', 
                                            border: '1px solid #ccc',
                                            backgroundColor: '#f9f9f9',
                                            color: '#000',
                                            fontSize: '16px',
                                        }}
                                    />
                                )}
                                {showContinueButton && !documentNumberFixed && (
                                    <div style={{ marginTop: '10px' }}>
                                        <button
                                            onClick={handleContinueClick}
                                            style={{
                                                padding: '10px 20px',
                                                borderRadius: '5px',
                                                backgroundColor: '#73B72B',
                                                color: '#fff',
                                                border: 'none',
                                                cursor: 'pointer',
                                                fontSize: '16px',
                                                width: '100%', 
                                                maxWidth: '250px', 
                                            }}
                                        >
                                            Continuar
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Campo para el nombre de la empresa */}
                        {message.hasInput && showCompanyNameInput && (
                            <div style={{ marginTop: '5px' }}>
                                {isCompanyNameFixed ? (
                                    <div
                                        style={{
                                            backgroundColor: '#242B56',
                                            borderRadius: '5px',
                                            border: '1px solid #ccc',
                                            color: '#fff',
                                            padding: '10px',
                                            width: '90%', 
                                            maxWidth: '190px', 
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <p style={{ margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                            <strong>{companyNameFixed}</strong>
                                        </p>
                                    </div>
                                ) : (
                                    <input
                                        type="text"
                                        value={companyName}
                                        onChange={handleCompanyNameInputChange}
                                        placeholder="Escribe el nombre de tu empresa"
                                        style={{
                                            padding: '10px',
                                            borderRadius: '5px',
                                            width: '90%', 
                                            maxWidth: '200px', 
                                            border: '1px solid #ccc',
                                            backgroundColor: '#f9f9f9',
                                            color: '#000',
                                            fontSize: '16px',
                                        }}
                                    />
                                )}

                                {showCompanyContinueButton && !isCompanyNameFixed && (
                                    <button
                                        onClick={handleCompanyNameSubmit}
                                        style={{
                                            marginTop: '10px',
                                            padding: '10px 20px',
                                            borderRadius: '5px',
                                            border: 'none',
                                            backgroundColor: '#73B72B',
                                            color: '#fff',
                                            fontSize: '16px',
                                            cursor: 'pointer',
                                            width: '100%',
                                        }}
                                    >
                                        Continuar
                                    </button>
                                )}
                            </div>
                        )}

                        {showButtons && (
                            <div style={{
                                marginTop: '15px',
                                textAlign: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '10px', 
                            }}>
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
                                        backgroundColor: '#f44336',
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
                        )}

                    </div>
                </div>
            ))}

            {/* Nuevo contenedor para mostrar los datos confirmados */}
            {showCorrectContainer && (
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
                                fontSize: "25px",
                                color: "#242B56",
                                cursor: "pointer",
                                marginRight: "10px",
                                marginLeft: "10px",
                                marginTop: "5px"
                            }}
                            onClick={() => {
                                setShowNextEmpresa(true);
                                setShowCorrectContainer(false);
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <img src="./public/img/Rebien.png" alt="ReBien Logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                        <div>
                            <h2 style={{ margin: 0, color: '#242B56' }}>¡ReBien!</h2>
                            <p style={{ margin: 0, color: '#000' }}>Ya estás registrado</p>
                        </div>
                    </div>

                    {/* Imagen del logo para el mensaje de confirmación */}
                    {visibleConfirmationMessages.map((message) => (
                        <div
                            key={message.id}
                            style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}
                        >
                            <img src={message.img} alt="ReBien Logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                            <div
                                style={{
                                    padding: '10px',
                                    backgroundColor: '#f1f1f1',
                                    borderRadius: '5px',
                                    color: '#000',
                                    fontWeight: 'bold',
                                }}
                            >
                                <p style={{ margin: 0 }}>{message.text}</p>
                                {message.id === 3 && (
                                    <div style={{ textAlign: "center", marginTop: "30px" }}>
                                        <a
                                            href="https://www.instagram.com/rebien.co"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ marginRight: "15px" }}
                                        >
                                            <FontAwesomeIcon
                                                icon={faInstagram}
                                                style={{ fontSize: "24px", color: "#242B56" }}
                                            />
                                        </a>
                                        <a
                                            href="https://www.facebook.com/Rebien.co?mibextid=ZbWKwL"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FontAwesomeIcon
                                                icon={faFacebook}
                                                style={{ fontSize: "24px", color: "#242B56" }}
                                            />
                                        </a>
                                    </div>
                                )}
                                {message.id === 2 && (
                                    <p
                                        style={{
                                            textAlign: "center",
                                            color: "#555",
                                            marginTop: "10px",
                                        }}
                                    >
                                        <strong>
                                            <a
                                                href="https://wa.me/573053456299"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    color: "#242B56",
                                                    textDecoration: "underline",
                                                }}
                                            >
                                                https://wa.me/573053456299
                                            </a>
                                        </strong>
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ShowNextEmpresas;