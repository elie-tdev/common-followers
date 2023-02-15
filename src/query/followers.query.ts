import { useCallback, useMemo, useState } from 'react'
import { AxiosError } from 'axios'

import { useAxios } from '../context'
import { FollowerEntity } from '../types'
import { UsersType } from '../components/UsersForm'
import { getCommonFollowers } from '../utils'

export interface FollowersState {
  loading: boolean
  data?: FollowerEntity[] | undefined
  error?: AxiosError
}

type FollowersQueryHookReturnValues = [
  FollowersState,
  (params: UsersType) => void,
]

export const useFollowersQuery = (): FollowersQueryHookReturnValues => {
  const axios = useAxios()
  const [state, setState] = useState<FollowersState>({ loading: false })

  const fetchFollowers = useCallback(async (userNames: UsersType) => {
    setState({ ...state, loading: true })
    try {
      let userOneAllFollowers: FollowerEntity[] = []
      let userOnefollowers: FollowerEntity[]
      let userTwoAllFollowers: FollowerEntity[] = []
      let userTwofollowers: FollowerEntity[]
      let i = 0,
        j = 0
      do {
        i++
        const { data } = await axios.get<FollowerEntity[]>(
          `/${userNames.userOne}/followers?per_page=1000&page=${i}`,
        )

        userOnefollowers = data
        userOneAllFollowers = [...userOneAllFollowers, ...userOnefollowers]
      } while (userOnefollowers.length > 0)

      do {
        j++
        const { data } = await axios.get<FollowerEntity[]>(
          `/${userNames.userTwo}/followers?per_page=1000&page=${j}`,
        )
        userTwofollowers = data
        userTwoAllFollowers = [...userTwoAllFollowers, ...userTwofollowers]
      } while (userTwofollowers.length > 0)

      const commonFollowers = getCommonFollowers(
        userOneAllFollowers,
        userTwoAllFollowers,
      )

      setState({ data: commonFollowers, loading: false, error: undefined })
    } catch (error) {
      setState({ data: undefined, error: error as AxiosError, loading: false })
    }
  }, [])

  const value = useMemo(() => state, [state])

  return [value, fetchFollowers]
}
