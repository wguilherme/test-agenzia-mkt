import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import {CartPage,FavoritesPage, HistoryPage, ListComicsPage, ShowComicsPage  } from '@/pages';
import { LayoutMobile } from "./components";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMobile> <Outlet /> </LayoutMobile>}>
          <Route path="*" element={<Navigate to="/comics" />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/comics" element={<ListComicsPage />} />
          <Route path="/comics/:id" element={<ShowComicsPage />} />
          <Route path="/cart" element={<CartPage />} />
      </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
