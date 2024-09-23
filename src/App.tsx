import { FC } from "react";
import { RenderedPDFViewer } from "./Components/RenderedPDFViewer";
import { saveAs } from "file-saver";
const { renderPDF } = await import("./Components/renderPDF");
// import Htmlimage from './Components/Html-to-image'
export const App: FC = () => {
  // const [text, setText] = useState('');
  const text = "Granulometría";
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* <Htmlimage/> */}
      <button
        onClick={async () => {
          const blob = await renderPDF({ text });
          saveAs(blob, "Granulometría.pdf");
        }}
      >
        Descargar pdf
      </button>
      {/* <Htmlimage/> */}

      <RenderedPDFViewer
        style={{ backgroundColor: "grey", width: "500px", height: "760px",marginLeft:18 }}
        text={text}
      />
    </div>
  );
};
