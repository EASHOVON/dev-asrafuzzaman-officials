// import Scrollbar from "smooth-scrollbar";

// const options = {
//   damping: 0.09,
// };

// export default function SmoothScrollbar() {
//   Scrollbar.init(document.body, options);
//   return null;
// }

import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Scrollbar from "react-smooth-scrollbar";

export default function SmoothScrollbar({ children }) {
  const ref = useRef(null);
  const { pathname } = useLocation();
  useEffect(() => {
    const { scrollbar } = ref.current;
    scrollbar.setPosition(0, 0);
  }, [pathname]);
  return (
    <Scrollbar ref={ref} damping=".09">
      {children}
    </Scrollbar>
  );
}
