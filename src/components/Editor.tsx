// @ts-nocheck
import { forwardRef, useEffect, useRef } from "react";
import Quill from "quill";

type Props = {
  readOnly: boolean;
  defaultValue?: Quill.Delta;
};

// Editor is an uncontrolled React component
const Editor = forwardRef(({ readOnly, defaultValue }: Props, ref) => {
  const containerRef = useRef(null);
  const defaultValueRef = useRef(defaultValue);

  useEffect(() => {
    ref.current?.enable(!readOnly);
  }, [ref, readOnly]);

  useEffect(() => {
    const container = containerRef.current;
    const editorContainer = container.appendChild(
      container.ownerDocument.createElement("div"),
    );
    const quill = new Quill(editorContainer, {
      theme: "snow",
      modules: {
        toolbar: [
          ["clean"],
          ["bold", "italic"],
          [{ "script": "sub" }, { "script": "super" }],
          [{ "list": "ordered" }, { "list": "bullet" }],
          [{ "header": 1 }, { "header": 2 }, { "header": 3 }, "code-block"],
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
