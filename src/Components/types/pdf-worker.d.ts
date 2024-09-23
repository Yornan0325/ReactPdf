// src/types/pdf-worker.d.ts
declare module '../../workers/pdf.worker.ts' {
    // Extiende la clase Worker nativa con los métodos que expones con Comlink
    class PDFWorker extends Worker {
      constructor();
    }
  
    export default PDFWorker;
  }
