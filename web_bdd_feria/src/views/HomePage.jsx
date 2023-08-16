import Logo from '../assets/Logo_ESPE.png'
export const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-24">
      <img src={Logo} alt="logo espe"  className='w--45'/>
      <h1 className="text-4xl font-extrabold">BIENVENIDO AL SISTEMA DE GESTION DE GASTOS PERSONALES</h1>
    </div>
  )
}
