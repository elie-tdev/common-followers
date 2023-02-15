import { Hero } from '../components/Hero'
import { Layout } from '../components/layout'
import { UsersForm } from '../components/UsersForm'
import { FollowersTable } from '../components/FollowersTable'
import { useFollowersQuery } from '../query'

function FollowersScreen() {
  const [value, fetchFollowers] = useFollowersQuery()
  return (
    <Layout>
      <div className='flex flex-col gap-6'>
        <Hero title='GitHub Common Followers' />
        <UsersForm fetchData={fetchFollowers} />
        <FollowersTable data={value} />
      </div>
    </Layout>
  )
}

export default FollowersScreen
