import { createContext, useState } from 'react'
export const UserContext: any = createContext(UserProvider)

type Purchases = {
  comics: any[],
  totalPrice: string,
  createdAt: Date | string
}

export function UserProvider(props: any) {

  const [userPurchases, setUserPurchases ] = useState<Purchases[]>([])

  return (
    <UserContext.Provider value={{ userPurchases, setUserPurchases  }}>
      {props.children}
    </UserContext.Provider>
  )
}
