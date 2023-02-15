import { useForm } from 'react-hook-form'

export interface UsersType {
  userOne: string
  userTwo: string
}

interface fetchDataType {
  fetchData: (params: UsersType) => void
}

export function UsersForm({ fetchData }: fetchDataType) {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<UsersType>()

  const onSubmit = (params: UsersType) => {
    fetchData(params)
    // reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex gap-3 sm:flex-row flex-col'>
        <div className='flex-1'>
          <input
            className='h-10 rounded border border-gray-200 w-full outline-none px-3'
            aria-label='userOne'
            placeholder='Github User Name'
            {...register('userOne', {
              required: 'Please enter a Github User Name.',
            })}
          />
          {errors?.userOne && (
            <div className='text-xs	text-red-600'>
              {errors?.userOne?.message}
            </div>
          )}
        </div>
        <div className='flex-1'>
          <input
            className='h-10 rounded border border-gray-200 w-full outline-none px-3'
            aria-label='userTwo'
            placeholder='Another Github User Name'
            {...register('userTwo', {
              required: 'Please enter a Github User Name.',
            })}
          />
          {errors?.userTwo && (
            <div className='text-xs	text-red-600'>
              {errors?.userTwo?.message}
            </div>
          )}
        </div>
        <div className='flex-3'>
          <input
            type='submit'
            className='cursor-pointer px-4 py-2 bg-white border border-gray-200 text-gray-800 rounded w-full'
            aria-label='submit'
          />
        </div>
      </div>
    </form>
  )
}

export default UsersForm
