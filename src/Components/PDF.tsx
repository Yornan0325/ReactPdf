import {
  Document,
  Page,
  Text,
  // Font,
  StyleSheet,
  View,
  Font,
} from "@react-pdf/renderer";
import { FC } from "react";
import Proyecto from "./Proyecto";
// import { createTw } from "react-pdf-tailwind";
// import { createTw } from "react-pdf-tailwind";
 

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});


// const tw = createTw({
//   theme: {
//     fontFamily: {
//       sans: ["Comic Sans"],
//     },
//     extend: {
//       colors: {
//         custom: "#bada55",
//       },
//     },
//   },
// });

const styles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  section: { margin: 5 },
  title: {
    fontSize: 24,
    fontFamily: "Oswald",
    color: "#5B21B6",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Oswald",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  h2: {
    fontSize: 30,
    marginTop: 1,
    marginBottom: 1,
    marginLeft: 0,
    marginRight: 0,
    padding: 10,
  },
  table: {
    display: "flex",
    // width: 'auto',
    // borderStyle: 'solid',
    // borderWidth: 1,
    // borderColor: '#000',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
    textAlign: "center",
  },
  tableCol: {
    width: "50%",
    // borderStyle: 'dashed',
    // borderWidth: 1,
    // borderColor: '#000',
    padding: 10, // Aumentar el padding para hacer las celdas más grandes
  },
  tableCell: {
    fontSize: 14, // Aumentar el tamaño de la fuente
    color: "#000",
  },
});


export type PDFProps = { text: string };

export const PDF: FC<PDFProps> = ({ text }) => (
  <Document>
    <Page size="A4" style={styles.page}>
     
      {/* <Text style={styles.header} fixed>
        ~ Created with react-pdf ~
      </Text> */}
      <Text style={[styles.title]}>GR-10</Text> 
    
      {/* <Text style={styles.author}>Miguel de Cervantes</Text> */}
      <Text
        style={[styles.subtitle, { textDecorationColor: "text-amber-600" }]}
      >
        {text}
      </Text>
      <View style={styles.section}>
        <Text
          style={[
            styles.subtitle,
            { color: "#5B21B6", padding: 10, backgroundColor: "#f3f3f3" },
          ]}
        >
          Granulometría
        </Text>

        <Text style={styles.text}>
          Análisis granulométrico de los agregados grueso y fino. Determinación
          de la cantidad de material que pasa el tamiz de 75 μm (No. 200) en los
          agregados pétreos mediante lavado INV E - 213 / INV E - 214:2013
        </Text>
      </View>
      <Text style={styles.title}>Proyecto</Text>

      <View>
        <Proyecto />
      </View>
      <Text style={styles.text}>
        En resolución, él se enfrascó tanto en su lectura, que se le pasaban las
        noches leyendo de claro en claro, y los días de turbio en turbio, y así,
        del poco dormir y del mucho leer, se le secó el cerebro, de manera que
        vino a perder el juicio. Llenósele la fantasía de todo aquello que leía
        en los libros, así de encantamientos, como de pendencias, batallas,
        desafíos, heridas, requiebros, amores, tormentas y disparates
        imposibles, y asentósele de tal modo en la imaginación que era verdad
        toda aquella máquina de aquellas soñadas invenciones que leía, que para
        él no había otra historia más cierta en el mundo.
      </Text>
      <Text style={styles.subtitle} break>
        Capítulo II: Que trata de la primera salida que de su tierra hizo el
        ingenioso Don Quijote
      </Text>
    </Page>
  </Document>
);
 