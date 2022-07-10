import { PurchaseListItem } from "@/components";
import { Alert, List } from "@mui/material";
import { UserContext } from '@/contexts'
import { useContext } from "react";


export function PurchasesPage(){
  const { userPurchases } = useContext(UserContext)

  if(!userPurchases) return (<Alert severity="info">Carregando...</Alert>)

  if(userPurchases?.length === 0) return (<Alert severity="info">Você ainda não realizou nenhuma compra</Alert>)

  else return(
    <>
    <List>
      {userPurchases?.map((purchase: any) => (<PurchaseListItem key={purchase.createdAt} purchaseDetails={purchase} />))}
    </List>
    </>
  )
}