import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../features/ProductSlice'
import wishlistSlice from '../features/WishlistSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistWishlistConfig = {
  key: 'wishlist',
  storage,
}

const persistWishlistReducer = persistReducer(
  persistWishlistConfig, 
  wishlistSlice
)


export const store = configureStore({
  reducer: {
    products: productSlice, 
    wishlist: persistWishlistReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

export const persistor = persistStore(store)