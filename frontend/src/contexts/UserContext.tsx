import { createContext, useState } from 'react'

export const UserContext: any = createContext(UserProvider)

export function UserProvider(props: any) {
  const [userCart,setCart ] = useState<any>([])
  const [favorites, setFavorites ] = useState<any>([])
  const [purchases, setPurchases ] = useState<any>([])

  return (
    <UserContext.Provider value={{ userCart,setCart, favorites,setFavorites, purchases, setPurchases  }}>
      {props.children}
    </UserContext.Provider>
  )
}
