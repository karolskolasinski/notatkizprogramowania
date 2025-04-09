// @ts-nocheck
import { forwardRef, useEffect, useRef } from "react";
import Quill from "quill";

type Props = {
  defaultValue?: Quill.Delta;
};

// Editor is an uncontrolled React component
const Editor = forwardRef(({ defaultValue }: Props, ref) => {
  const containerRef = useRef(null);
  const defaultValueRef = useRef(defaultValue);

  useEffect(() => {
    const container = containerRef.current;
    const editorContainer = container.appendChild(container.ownerDocument.createElement("div"));

    const quill = new Quill(editorContainer, {
      theme: "snow",
      modules: {
        syntax: true,
        toolbar: [
          ["clean"],
          ["bold", "italic"],
          [{ "script": "sub" }, { "script": "super" }],
          [{ "list": "ordered" }, { "list": "bullet" }],
          [{ "header": 1 }, { "header": 2 }, { "header": 3 }, "code-block"],
          [
            { "color": ["#FFFFFF", "#000000"] },
            { "background": ["#434343", "#f0f0f0"] },
          ],
          ["link", "image", "video"],
        ],
      },
    });

    ref.current = quill;

    if (defaultValueRef.current) {
      quill.setContents(defaultValueRef.current);
    }

    return () => {
      ref.current = null;
      container.innerHTML = "";
    };
  }, [ref]);

  return <div ref={containerRef}></div>;
});

Editor.displayName = "Editor";

export default Editor;
