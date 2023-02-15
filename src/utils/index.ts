import { FollowerEntity } from '../types'
export const getCommonFollowers = (
  one: FollowerEntity[],
  two: FollowerEntity[],
) => {
  const common: Array<FollowerEntity> = []
  one.forEach((follower) => {
    for (let i = 0; i < two.length; i++) {
      if (follower.login === two[i].login) {
        common.push(follower)
        break
      }
    }
  })
  return common
}
