
import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, Image } from '@react-pdf/renderer';
import imagen1 from "../../public/img/Rebien.png"
import imagen2 from "../../public/img/logo-amarillo.png"
import imagen3 from "../../public/img/logo-morado.png"
import imagen4 from "../../public/img/logo-azul.png"
import imagen5 from "../../public/img/logo-fucsia.png"



const styles = StyleSheet.create({
  page: {
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'hidden',
  },
  container: {
    paddingLeft: 30,
    paddingTop: 10,
    fontSize: 10,
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#73B72B',
    padding: 8,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 10,
    alignSelf: 'flex-end',
    width: '85%',
  },
  infoSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    marginBottom: 8,
    alignSelf: 'flex-end',
    width: '85%',
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  field: {
    fontSize: 12,
    width: '40%',
  },

  barrasVerdesPorcentaje: {
    marginLeft: 90,
    textAlign: 'center',
  },
  Resultados: {
    marginLeft: 30,
  },

  categoryContainer: {
    marginVertical: 10,
    position: 'relative',
  },

  categoryHeader: {
    padding: 5,
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },

  questionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#000',
    fontSize: 10,
  },
  answerOptions: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
  answerBox: {
    width: '12%',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#000',
    padding: 3,
  },
  mensajePreventivo: {
    alignSelf: 'flex-start',
    marginLeft: 70,
    marginTop: 20,
    fontWeight: 'bold',
    width: '100%',
  },
  barrasVerdes: {
    height: 20,
    backgroundColor: '#73B72B',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#000',
    marginLeft: 38,
  },
  resultsContainer: {
    marginTop: 15,
    padding: 5,
    fontSize: 10,
    borderTopWidth: 1,
    borderColor: '#000',
  },

  imcContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 3,
    marginBottom: 8,
    alignSelf: 'flex-end',
    width: '85%',
  },

  imcTable: {
    flexDirection: 'row',
    width: '45%',
    alignSelf: 'flex-end',
    marginTop: -10,
  },

  imcCell: {
    flex: 1,
    paddingVertical: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },


  wideCell: {
    flex: 3,
    backgroundColor: '#A0A7B4',
  },

  imcRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },


  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableColHeader: {
    flex: 1,
    borderBottom: '1px solid #000',
    padding: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableCol: {
    flex: 1,
    borderBottom: '1px solid #000',
    padding: 5,
    textAlign: 'center',
  },
  image: {
    width: 45,
    height: 45,
    marginRight: 5,
  },
  imageOutsideHeader: {
    width: 80,
    height: 70,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  imageOutsideTable: {
    width: 60,
    height: 60,
    position: 'absolute',
    left: -60,
    top: 20,
  },
  // esto es lo nuevo
  legendContainer1: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  column1: {
    flexDirection: 'column',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  leftColumn1: {
    textAlign: 'right',
  },
  rightColumn1: {
    textAlign: 'left',
  },
  legendItem1: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  yellowText1: {
    color: '#FFCE56',
    fontSize: 14
  },
  blueText1: {
    color: '#4BC0C0',
    fontSize: 14
  },
  navyText1: {
    color: '#242B56',
    fontSize: 14
  },
  pinkText1: {
    color: '#FF6384',
    fontSize: 14
  },

});

const MyDocument = ({ nombre, edad, empresa, Ocupacion, preguntas, answers, percentages, totalBienestar, imageData }) => {
  const pieChartData = [
    { value: 25, color: '#F8B133' },
    { value: 25, color: '#242B56' },
    { value: 25, color: '#4CBBC0' },
    { value: 25, color: '#D3398D' },
  ];
  return (
    <Document>
      <Page size="A4" style={styles.container}>
        {/* Imagen a la izquierda, fuera del encabezado */}
        <Image src={imagen1} style={styles.imageOutsideHeader} />

        {/* Encabezado */}
        <View style={styles.header}>
          <Text>Mi Nivel de Bienestar</Text>
        </View>

        {/* Información del usuario */}
        <View style={styles.infoSection}>
          <Text style={styles.label}>Nombre:</Text>
          <Text style={styles.field}>{nombre}</Text>
          <Text style={styles.label}>Edad:</Text>
          <Text style={styles.field}>{edad}</Text>
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.label}>Empresa:</Text>
          <Text style={styles.field}>{empresa}</Text>
          <Text style={styles.label}>Ocupacion:</Text>
          <Text style={styles.field}>{Ocupacion}</Text>
        </View>


        <View style={styles.imcContainer}>
          <View style={styles.imcRow}>
            <Text style={styles.label}>IMC:</Text>
          </View>

          {/* Tabla de IMC alineada horizontalmente debajo de "Ocupación" */}
          <View style={styles.imcTable}>
            <View style={[styles.imcCell, { borderColor: '#000', borderWidth: 1, backgroundColor: '#FFFFFF' }]}>
              <Text style={{ textAlign: 'center', color: '#000' }}>#¡DIV/0!</Text>
            </View>
            <View style={[styles.imcCell, styles.wideCell, { borderColor: '#000', borderWidth: 1, backgroundColor: '#A0A7B4' }]}>
              <Text style={{ textAlign: 'center', color: 'red' }}>#¡DIV/0!</Text>
            </View>
          </View>
        </View>


        <View style={{ width: '85%', alignSelf: 'center', marginVertical: 10, marginTop: 1 }}>
          {/* Actividad Física & Nutrición */}
          <View style={[styles.tableRow, { borderBottomWidth: 1, borderColor: '#000' }]}>
            <Image src={imagen2} style={[styles.imageOutsideTable, { top: 35 }]} />
            <Text style={[{ flex: 0.5, borderColor: '#000', paddingVertical: 5 }]}></Text>
            <Text style={[{ textAlign: "center", flex: 6, backgroundColor: '#F8B133', color: '#fff', fontWeight: 'bold', paddingVertical: 6, borderRightWidth: 1, borderColor: '#000' }]}>
              Actividad Física & Nutrición
            </Text>
            <Text style={[{ flex: 1, backgroundColor: '#B5B5B5', paddingVertical: 5, borderRightWidth: 1, borderColor: '#000', textAlign: 'center' }]}>
              Sí
            </Text>
            <Text style={[{ flex: 1, backgroundColor: '#B5B5B5', paddingVertical: 5, textAlign: 'center', borderRightWidth: 1, borderColor: '#000' }]}>
              No
            </Text>
          </View>

          {preguntas.slice(0, 4).map((data, index) => (
            <View key={index} style={[styles.tableRow, { borderBottomWidth: 1, borderColor: '#000' }]}>
              <Text style={[{ textAlign: "center", flex: 0.5, borderRightWidth: 1, borderLeftWidth: 1, borderColor: '#000', paddingVertical: 5 }]}>
                {index + 1}
              </Text>
              <Text style={[{ textAlign: "center", flex: 6, borderRightWidth: 1, borderColor: '#000', paddingVertical: 5 }]}>
                {data.name}
              </Text>
              <Text style={[{ flex: 1, borderRightWidth: 1, borderColor: '#000', paddingVertical: 8, textAlign: 'center' }]}>
                {answers[`question${index + 3}`] == "Sí" ? "x" : ""}
              </Text>
              <Text style={[{ flex: 1, paddingVertical: 5, textAlign: 'center', borderColor: '#000', borderRightWidth: 1 }]}>
                {answers[`question${index + 3}`] == "No" ? "x" : ""}
              </Text>
            </View>
          ))}

          <View style={[styles.tableRow, { borderBottomWidth: 0, borderColor: '#000' }]}>
            <Text style={[{ flex: 1, paddingLeft: 9, fontWeight: 'bold', textAlign: 'center', flex: 0.5, borderColor: '#000', paddingVertical: 5 }]}></Text>
            <Text style={[styles.tableColHeader, { flex: 7, backgroundColor: '#73B72B', color: '#000', fontWeight: 'bold', paddingVertical: 5, borderRightWidth: 1, borderColor: '#000' }]}></Text>
            <Text style={[styles.tableColHeader, { flex: 1, paddingVertical: 5, borderRightWidth: 1, borderColor: '#000', textAlign: 'center', backgroundColor: '#73B72B' }]}>
              {percentages.porcentajeSi1}%
            </Text>
            <Text style={[styles.tableColHeader, { flex: 1, paddingVertical: 5, textAlign: 'center', borderColor: '#000', backgroundColor: '#73B72B', borderRightWidth: 1 }]}>
              {percentages.porcentajeNo1}%
            </Text>
          </View>
        </View>


        <View style={{ width: '85%', alignSelf: 'center', marginVertical: 10, marginTop: 0 }}>
          {/* Salud Mental & Bienestar */}
          <View style={[styles.tableRow, { borderBottomWidth: 1, borderColor: '#000' }]}>
            <Image src={imagen3} style={[styles.imageOutsideTable, { top: 35 }]} />
            <Text style={[{ flex: 0.5, borderColor: '#000', paddingVertical: 5 }]}></Text>
            <Text style={[{ flex: 6, backgroundColor: '#242B56', color: '#fff', fontWeight: 'bold', paddingVertical: 6, borderRightWidth: 1, borderColor: '#000', textAlign: "center" }]}>
              Salud Mental & Bienestar
            </Text>
            <Text style={[{ flex: 1, backgroundColor: '#B5B5B5', paddingVertical: 5, borderRightWidth: 1, borderColor: '#000', textAlign: 'center' }]}>Sí</Text>
            <Text style={[{ flex: 1, backgroundColor: '#B5B5B5', paddingVertical: 5, textAlign: 'center', borderRightWidth: 1, borderColor: '#000' }]}>No</Text>
          </View>
          {preguntas.slice(4, 8).map((data, index) => (
            <View key={index} style={[styles.tableRow, { borderBottomWidth: 1, borderColor: '#000' }]}>
              <Text style={[{ textAlign: "center", flex: 0.5, borderRightWidth: 1, borderLeftWidth: 1, borderColor: '#000', paddingVertical: 5 }]}>{index + 5}</Text>
              <Text style={[{ textAlign: "center", flex: 6, borderRightWidth: 1, borderColor: '#000', paddingVertical: 5 }]}>{data.name}</Text>
              <Text style={[{ flex: 1, borderRightWidth: 1, borderColor: '#000', paddingVertical: 8, textAlign: 'center' }]}>{answers[`question${index + 7}`] == "Sí" ? "x" : ""}</Text>
              <Text style={[{ flex: 1, paddingVertical: 5, textAlign: 'center', borderRightWidth: 1, borderColor: '#000' }]}>{answers[`question${index + 7}`] == "No" ? "x" : ""}</Text>
            </View>
          ))}
          <View style={[styles.tableRow, { borderBottomWidth: 0, borderColor: '#000' }]}>
            <Text style={[{ flex: 0.5, paddingLeft: 9, fontWeight: 'bold', textAlign: 'center', borderColor: '#000', paddingVertical: 5 }]}></Text>
            <Text style={[styles.tableColHeader, { flex: 7, backgroundColor: '#73B72B', color: '#000', fontWeight: 'bold', paddingVertical: 5, borderRightWidth: 1, borderColor: '#000' }]}></Text>
            <Text style={[styles.tableColHeader, { flex: 1, paddingVertical: 5, borderRightWidth: 1, borderColor: '#000', textAlign: 'center', backgroundColor: '#73B72B' }]}>{percentages.porcentajeSi2}%</Text>
            <Text style={[styles.tableColHeader, { flex: 1, paddingVertical: 5, textAlign: 'center', borderColor: '#000', backgroundColor: '#73B72B', borderRightWidth: 1 }]}>{percentages.porcentajeNo2}%</Text>
          </View>
        </View>

        <View style={{ width: '85%', alignSelf: 'center', marginVertical: 10, marginTop: 0 }}>
          {/* Cultura & Entretenimiento */}
          <View style={[styles.tableRow, { borderBottomWidth: 1, borderColor: '#000' }]}>
            <Image src={imagen4} style={[styles.imageOutsideTable, { top: 35 }]} />
            <Text style={[{ flex: 0.5, borderColor: '#000', paddingVertical: 5 }]}></Text>
            <Text style={[{ flex: 6, backgroundColor: '#4CBBC0', color: '#fff', fontWeight: 'bold', paddingVertical: 6, borderRightWidth: 1, borderColor: '#000', textAlign: "center" }]}>
              Cultura & Entretenimiento
            </Text>
            <Text style={[{ flex: 1, backgroundColor: '#B5B5B5', paddingVertical: 5, borderRightWidth: 1, borderColor: '#000', textAlign: 'center' }]}>Sí</Text>
            <Text style={[{ flex: 1, backgroundColor: '#B5B5B5', paddingVertical: 5, textAlign: 'center', borderRightWidth: 1, borderColor: '#000' }]}>No</Text>
          </View>
          {preguntas.slice(8, 12).map((data, index) => (
            <View key={index} style={[styles.tableRow, { borderBottomWidth: 1, borderColor: '#000' }]}>
              <Text style={[{ textAlign: "center", flex: 0.5, borderRightWidth: 1, borderLeftWidth: 1, borderColor: '#000', paddingVertical: 5 }]}>{index + 9}</Text>
              <Text style={[{ textAlign: "center", flex: 6, borderRightWidth: 1, borderColor: '#000', paddingVertical: 5 }]}>{data.name}</Text>
              <Text style={[{ flex: 1, borderRightWidth: 1, borderColor: '#000', paddingVertical: 8, textAlign: 'center' }]}>{answers[`question${index + 11}`] == "Sí" ? "x" : ""}</Text>
              <Text style={[{ flex: 1, paddingVertical: 5, textAlign: 'center', borderRightWidth: 1, borderColor: '#000' }]}>{answers[`question${index + 11}`] == "No" ? "x" : ""}</Text>
            </View>
          ))}
          <View style={[styles.tableRow, { borderBottomWidth: 0, borderColor: '#000' }]}>
            <Text style={[{ flex: 0.5, paddingLeft: 9, fontWeight: 'bold', textAlign: 'center', borderColor: '#000', paddingVertical: 5 }]}></Text>
            <Text style={[styles.tableColHeader, { flex: 7, backgroundColor: '#73B72B', color: '#000', fontWeight: 'bold', paddingVertical: 5, borderRightWidth: 1, borderColor: '#000' }]}></Text>
            <Text style={[styles.tableColHeader, { flex: 1, paddingVertical: 5, borderRightWidth: 1, borderColor: '#000', textAlign: 'center', backgroundColor: '#73B72B' }]}>{percentages.porcentajeSi3}%</Text>
            <Text style={[styles.tableColHeader, { flex: 1, paddingVertical: 5, textAlign: 'center', borderColor: '#000', backgroundColor: '#73B72B', borderRightWidth: 1 }]}>{percentages.porcentajeNo3}%</Text>
          </View>
        </View>

        <View style={{ width: '85%', alignSelf: 'center', marginVertical: 10, marginTop: 0 }}>
          {/* Belleza & Autocuidado */}
          <View style={[styles.tableRow, { borderBottomWidth: 1, borderColor: '#000' }]}>
            <Image src={imagen5} style={[styles.imageOutsideTable, { top: 35 }]} />
            <Text style={[{ flex: 0.5, borderColor: '#000', paddingVertical: 5 }]}></Text>
            <Text style={[{ flex: 6, backgroundColor: '#D3398D', color: '#fff', fontWeight: 'bold', paddingVertical: 6, borderRightWidth: 1, borderColor: '#000', textAlign: "center" }]}>
              Belleza & Autocuidado
            </Text>
            <Text style={[{ flex: 1, backgroundColor: '#B5B5B5', paddingVertical: 5, borderRightWidth: 1, borderColor: '#000', textAlign: 'center' }]}>Sí</Text>
            <Text style={[{ flex: 1, backgroundColor: '#B5B5B5', paddingVertical: 5, textAlign: 'center', borderRightWidth: 1, borderColor: '#000' }]}>No</Text>
          </View>
          {preguntas.slice(12, 16).map((data, index) => (
            <View key={index} style={[styles.tableRow, { borderBottomWidth: 1, borderColor: '#000' }]}>
              <Text style={[{ textAlign: "center", flex: 0.5, borderRightWidth: 1, borderLeftWidth: 1, borderColor: '#000', paddingVertical: 5 }]}>{index + 13}</Text>
              <Text style={[{ textAlign: "center", flex: 6, borderRightWidth: 1, borderColor: '#000', paddingVertical: 5 }]}>{data.name}</Text>
              <Text style={[{ flex: 1, borderRightWidth: 1, borderColor: '#000', paddingVertical: 8, textAlign: 'center' }]}>{answers[`question${index + 15}`] == "Sí" ? "x" : ""}</Text>
              <Text style={[{ flex: 1, paddingVertical: 5, textAlign: 'center', borderRightWidth: 1, borderColor: '#000' }]}>{answers[`question${index + 15}`] == "No" ? "x" : ""}</Text>
            </View>
          ))}
          <View style={[styles.tableRow, { borderBottomWidth: 0, borderColor: '#000' }]}>
            <Text style={[{ flex: 0.5, paddingLeft: 9, fontWeight: 'bold', textAlign: 'center', borderColor: '#000', paddingVertical: 5 }]}></Text>
            <Text style={[styles.tableColHeader, { flex: 7, backgroundColor: '#73B72B', color: '#000', fontWeight: 'bold', paddingVertical: 5, borderRightWidth: 1, borderColor: '#000' }]}></Text>
            <Text style={[styles.tableColHeader, { flex: 1, paddingVertical: 5, borderRightWidth: 1, borderColor: '#000', textAlign: 'center', backgroundColor: '#73B72B' }]}>{percentages.porcentajeSi4}%</Text>
            <Text style={[styles.tableColHeader, { flex: 1, paddingVertical: 5, textAlign: 'center', borderColor: '#000', backgroundColor: '#73B72B', borderRightWidth: 1 }]}>{percentages.porcentajeNo4}%</Text>
          </View>
        </View>






        <View style={{ width: '85%', alignSelf: 'center', marginVertical: 10, marginTop: 30 }}>
          {/* Título de Resultados Consolidados */}
          <View style={[styles.Resultados]}>
            <View style={{ flexDirection: 'row', backgroundColor: '#A0A7B4', borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#000' }}>
              <Text style={{ flex: 5, paddingVertical: 5, textAlign: 'center', fontWeight: 'bold', color: '#000', fontSize: 16, borderLeftWidth: 1, borderRightWidth: 1, paddingLeft: 8, borderColor: '#000' }}>
                RESULTADOS CONSOLIDADOS
              </Text>
              <Text style={{ flex: 2, paddingVertical: 5, textAlign: 'center', fontWeight: 'bold', color: '#000', fontSize: 16, borderRightWidth: 1, borderColor: '#000' }}>
                CUMPLIMIENTO
              </Text>
            </View>
          </View>

          {/* Fila de Actividad Física & Nutrición */}
          <View style={[styles.Resultados]}>
            <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: '#000' }}>
              <Text style={{ flex: 5, backgroundColor: '#F8B133', paddingVertical: 5, color: '#fff', paddingLeft: 10, fontWeight: 'bold', fontSize: 14, borderLeftWidth: 1, borderRightWidth: 1, borderColor: '#000' }}>
                Actividad Física & Nutrición
              </Text>
              <Text style={{ flex: 2, textAlign: 'center', paddingVertical: 5, fontWeight: 'bold', fontSize: 14, borderRightWidth: 1, borderColor: '#000' }}>
                {percentages.porcentajeNo1}%
              </Text>
            </View>
          </View>

          {/* Fila de Salud Mental & Bienestar */}
          <View style={[styles.Resultados]}>
            <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: '#000' }}>
              <Text style={{ flex: 5, backgroundColor: '#242B56', paddingVertical: 5, color: '#fff', paddingLeft: 10, fontWeight: 'bold', fontSize: 14, borderLeftWidth: 1, borderRightWidth: 1, borderColor: '#000' }}>
                Salud Mental & Bienestar
              </Text>
              <Text style={{ flex: 2, textAlign: 'center', paddingVertical: 5, fontWeight: 'bold', fontSize: 14, borderRightWidth: 1, borderColor: '#000' }}>
                {percentages.porcentajeNo2}%
              </Text>
            </View>
          </View>

          {/* Fila de Cultura & Entretenimiento */}
          <View style={[styles.Resultados]}>
            <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: '#000' }}>
              <Text style={{ flex: 5, backgroundColor: '#4CBBC0', paddingVertical: 5, color: '#fff', paddingLeft: 10, fontWeight: 'bold', fontSize: 14, borderLeftWidth: 1, borderRightWidth: 1, borderColor: '#000' }}>
                Cultura & Entretenimiento
              </Text>
              <Text style={{ flex: 2, textAlign: 'center', paddingVertical: 5, fontWeight: 'bold', fontSize: 14, borderRightWidth: 1, borderColor: '#000' }}>
                {percentages.porcentajeNo3}%
              </Text>
            </View>
          </View>

          {/* Fila de Belleza & Autocuidado */}
          <View style={[styles.Resultados]}>
            <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: '#000' }}>
              <Text style={{ flex: 5, backgroundColor: '#D3398D', paddingVertical: 5, color: '#fff', paddingLeft: 10, fontWeight: 'bold', fontSize: 14, borderLeftWidth: 1, borderRightWidth: 1, borderColor: '#000' }}>
                Belleza & Autocuidado
              </Text>
              <Text style={{ flex: 2, textAlign: 'center', paddingVertical: 5, fontWeight: 'bold', fontSize: 14, borderRightWidth: 1, borderColor: '#000' }}>
                {percentages.porcentajeNo4}%
              </Text>
            </View>
          </View>

          {/* Fila de Mi Nivel de Bienestar */}
          <View style={[styles.Resultados]}>
            <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: '#000' }}>
              <Text style={{ flex: 5, backgroundColor: '#73B72B', paddingVertical: 5, color: '#1D1D1B', textAlign: 'right', paddingRight: 10, fontWeight: 'bold', fontSize: 14, borderLeftWidth: 1, borderRightWidth: 1, borderColor: '#000' }}>
                Mi nivel de Bienestar
              </Text>
              <Text style={{ flex: 2, backgroundColor: '#73B72B', textAlign: 'center', paddingVertical: 5, color: '#1D1D1B', fontWeight: 'bold', fontSize: 14, borderRightWidth: 1, borderColor: '#000' }}>
                {totalBienestar}%
              </Text>
            </View>
          </View>
        </View>



        <View style={styles.mensajePreventivo}>
          <Text>Para un análisis más detallado o diagnóstico, es recomendable consultar a un profesional de la salud.</Text>
        </View>
        {/* <PieChart data={[25, 25, 25, 25]} /> Sustituir valores de prueba con datos reales */}
        <View style={{width: '100%', display: "flex", alignItems: 'center', justifyContent: "center", marginVertical: 10, marginTop: 30}}>
          <Image src={imageData} style={{ width: 300, height: 300 }} />
        </View>
        <View style={styles.legendContainer1}>
          <View style={[styles.column1, styles.leftColumn1]}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 6, }}>
              <Text style={{ backgroundColor: "#F8B133", width: 40, height: 20, marginRight: 10 }}></Text>
              <Text style={[styles.yellowText1]}>Actividad Física & Nutrición</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <Text style={{ backgroundColor: "#4CBBC0", width: 40, height: 20, marginRight: 10 }}></Text>
              <Text style={[styles.blueText1]}>Cultura & Entretenimiento</Text>
            </View>
          </View>
          <View style={[styles.column1, styles.rightColumn1]}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 6, }}>
              <Text style={{ backgroundColor: "#242B56", width: 40, height: 20, marginRight: 10 }}></Text>
              <Text style={[styles.navyText1]}>Salud Mental & Bienestar</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <Text style={{ backgroundColor: "#D3398D", width: 40, height: 20, marginRight: 10 }}></Text>
              <Text style={[styles.pinkText1]}>Belleza & Autocuidado</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;