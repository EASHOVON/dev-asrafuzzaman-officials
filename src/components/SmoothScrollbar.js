import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

const options = {
  damping: 0.09,
};

export default function SmoothScrollbar() {
  useEffect(() => {
    Scrollbar.init(document.body, options);
  }, []);

  return null;
}
