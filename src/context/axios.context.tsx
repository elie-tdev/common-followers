import { ReactNode, createContext, useMemo } from 'react'
import axios, { AxiosInstance } from 'axios'

import { useContextFallback } from '../hooks'

const baseUrl = 'https://api.github.com/users'

const AxiosContext = createContext<AxiosInstance | undefined>(axios)
AxiosContext.displayName = 'AxiosContext'

interface AxiosProviderProps {
  children: ReactNode
}

export const AxiosProvider = ({ children }: AxiosProviderProps) => {
  const value = useMemo(() => {
    const instance = axios.create({
      baseURL: baseUrl,
    })

    return instance
  }, [])

  return <AxiosContext.Provider value={value}>{children}</AxiosContext.Provider>
}

export const useAxios = () => useContextFallback(AxiosContext)
