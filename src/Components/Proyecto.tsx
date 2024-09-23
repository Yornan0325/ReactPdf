 
import {  Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import React from 'react';

const Proyecto = () => (
  <Document>
    <View style={styles.table}>
        {/* Header */}
        <View style={styles.tableRow}>
          <View style={[styles.tableCol]}>
            <Text style={[styles.tableCell, styles.subtitle]}>Cliente</Text>
          </View>
      
          <View style={[styles.tableCol]}>
            <Text style={[styles.tableCell, styles.subtitle]}>Proyecto</Text>
          </View>
        </View>
        {/* Row 1 */}
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Consorcio Pozo Radial Puerto Mallarino</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Pozo Radial %</Text>
          </View>
        </View>
        {/* Row 2 */}
        <View style={[styles.tableCol]}>
            <Text style={[styles.tableCell, styles.subtitle]}>Localización
            </Text>
          </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Dren #12</Text>
          </View>
         
        </View>
      </View>
      
  </Document>
);

const styles = StyleSheet.create({
    page: {
        padding: 20,
      },
      table: {
        display: 'flex',
    
        // width: 'auto',
        // borderStyle: 'solid',
        // borderWidth: 1,
        // borderColor: '#000',
        marginBottom: 10,
      },
      tableRow: {
        flexDirection: 'row',
      
      },
      tableCol: {
        width: '50%',
      
        // borderStyle: 'dashed',
        // borderWidth: 1,
        // borderColor: '#000',
        padding: 10, // Aumentar el padding para hacer las celdas más grandes
      },
      tableCell: {
         // Aumentar el tamaño de la fuente
        color: '#000',
   
        fontSize: 14,
      },
      subtitle: {
        fontSize: 18,
       
        fontFamily: "Oswald",
      },
});

export default Proyecto;