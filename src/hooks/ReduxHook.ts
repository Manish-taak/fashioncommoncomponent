import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '@/app/redux/Store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()




// npm install @reduxjs/toolkit react-redux