import { createBrowserRouter } from "react-router-dom";
import { EditorPage } from "../../pages/editor";
import { WelcomePage } from "../../pages/welcome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/editor",
    element: <EditorPage />,
  },
]);
