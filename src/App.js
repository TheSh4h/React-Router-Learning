import { 
  createBrowserRouter,
  Route, 
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/help/Contact';
import Faq from './pages/help/Faq';

import RootLayout from "./layout/RootLayout";
import HelpLayout from "./layout/HelpLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="help" element={<HelpLayout />}>
                <Route path="contact" element={<Contact />} />
                <Route path="faq" element={<Faq />} />
              </Route>
            </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App
