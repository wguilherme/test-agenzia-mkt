import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import {CartPage,FavoritesPage, HistoryPage, ListComicsPage, ShowComicsPage  } from '@/pages';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListComicsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/comics" element={<ListComicsPage />} />
          <Route path="/comics/:id" element={<ShowComicsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
    </BrowserRouter>
  )
}
export default App
