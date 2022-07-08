import { HeaderNavigationMobile, BottomNavigationMobile} from "@/components";
import { Box } from "@mui/material";

const BoxContentSx = {
  flex:1, height:'100%', width:'100%', overflowY: "scroll", padding: '1rem'
}
const BoxWrapperSx = {
  height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between', overflow: "hidden", padding:'56px 0'
}

export function LayoutMobile({ children }: any) {
  return (
    <Box sx={{ ...BoxWrapperSx }}>
      <HeaderNavigationMobile title="Marvel Store" />
      <Box sx={{ ...BoxContentSx }}>
        {children}
      </Box>
      <BottomNavigationMobile />
    </Box>
  )
}