import { PDFViewer as PDFViewerRenderer } from '@react-pdf/renderer';
import { ComponentProps, FC, useDeferredValue } from 'react';
import { useRenderPDF } from './useRenderPDF';
 

export const RenderedPDFViewer: FC<Omit<ComponentProps<typeof PDFViewerRenderer>, 'children'> & {text: string}> = ({ style, className, text: outerText, innerRef, showToolbar = true, ...props }) => {
  const text = useDeferredValue(outerText);
  const { url, loading, error } = useRenderPDF({ text });

  const src = url ? `${url}#toolbar=${showToolbar ? 1 : 0}` : null;
  if (loading)
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <div className={className} style={style}>
        Cargando...
      </div>
    );

  if (error) {
    console.log({ error });
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <div className={className} style={style}>
        {JSON.stringify(error)}
      </div>
    );
  }

  return (
    <>
    <iframe
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      src={src}
      ref={innerRef}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      style={style}
      className={className}
      {...props}
    />
    </>
  );
};
