import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import {CartPage, FavoritesPage, PurchasesPage, ListComicsPage, ShowComicsPage, CouponPage, DesktopFallBack  } from '@/pages';
import { LayoutMobile } from "./components";
import { isMobile } from "react-device-detect";

console.log('isMobile', isMobile)

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {
          isMobile ? (
            <Route element={<LayoutMobile> <Outlet /> </LayoutMobile>}>
            <Route path="*" element={<Navigate to="/comics" />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/purchases" element={<PurchasesPage />} />
            <Route path="/comics/:comicId" element={<ShowComicsPage />} />
            <Route path="/comics" element={<ListComicsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/coupon" element={<CouponPage />} />
        </Route>
          ) :
          (
            <Route path="*" element={<DesktopFallBack/>} />
          )
        }

      </Routes>
    </BrowserRouter>
  )
}

export default App
