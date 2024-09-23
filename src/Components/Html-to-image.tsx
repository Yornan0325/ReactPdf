import React, { useCallback, useRef } from 'react';
import { toSvg   } from 'html-to-image';

 
const Htmlimage: React.FC = () => {
 
  const ref = useRef(null)

 
  const htmlToImageConvert = useCallback(() => {
    if (ref.current === null) {
      return
    }
    toSvg(ref.current, { cacheBust: true, })
      .then((dataUrl: string) => {
        const link = document.createElement("a")
        link.download = 'my-image-name.svg'
        link.href = dataUrl
        link.click()
      })
      .catch((err: unknown) => {
        console.log(err)
      })
  }, [ref])

  return (
    <div className="App">
        <div ref={ref}>
      <table
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          borderCollapse: "collapse",
          width: "100%",
        }}
      >
        <tr>
          <th
            style={{
              backgroundColor: "#04AA6D",
              padding: "12px 8px",
              textAlign: "left",
              border: "1px solid #ddd",
            }}
          >
            Company
          </th>
          <th
            style={{
              backgroundColor: "#04AA6D",
              padding: "12px 8px",
              textAlign: "left",
              border: "1px solid #ddd",
            }}
          >
            Contact
          </th>
          <th
            style={{
              backgroundColor: "#04AA6D",
              padding: "12px 8px",
              textAlign: "left",
              border: "1px solid #ddd",
            }}
          >
            Country
          </th>
        </tr>
        <tr>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Alfreds Futterkiste
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Maria Anders
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Germany
          </td>
        </tr>
        <tr>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Berglunds snabbköp
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Christina Berglund
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Sweden
          </td>
        </tr>
        <tr>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Centro comercial Moctezuma
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Francisco Chang
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
           colombia
          </td>
        </tr>
      </table>
      </div>
      <button onClick={htmlToImageConvert}>Download Image</button>
    </div>

  )
}

export default Htmlimage