
const ErrorMes = ({message} : {message: string | null}) => {
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
        <p className='border-2 text-2xl text-[#E94F37] p-2 font-bold rounded-xl'>{message}</p>
    </div>
  )
}

export default ErrorMes
