import { FaInstagram, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className='w-full bg-darkBackground'>
      <div className='flex items-center justify-around gap-5 p-5'>
        <div className='flex items-center h-full'>
          <p className='font-sans text-primary'>
            © 2024 - Todos los derechos reservados
          </p>
        </div>
        <div className='flex flex-col gap-5 md:flex-row'>
          <div className='text-primary'>
            <h3 className='font-bold'>Diseño</h3>
            <a
              href='https://www.instagram.com/kollage.studioinvites?igsh=a2Q4cnl2MWNleHp1&utm_source=qr'
              target='_blank'
              className='cursor-pointer'
              rel='noreferrer'
            >
              <div className='flex items-center gap-2 transition-all select-none hover:scale-105 hover:text-headline'>
                <FaInstagram className='text-lg' />
                <h3 className='font-sans'>Kollage Invites</h3>
              </div>
            </a>
          </div>
          <div className='text-primary'>
            <h3 className='font-bold'>Wedding Planner</h3>
            <a
              href='https://www.instagram.com/angiesweddingplanner?igsh=MWE1M2dhZHB1Znhvcg=='
              target='_blank'
              className='cursor-pointer'
              rel='noreferrer'
            >
              <div className='flex items-center gap-2 transition-all select-none hover:scale-105 hover:text-headline'>
                <FaInstagram className='text-lg' />
                <h3 className='font-sans'>Angie Fuentes</h3>
              </div>
            </a>

          </div>
          <div className='text-primary'>
            <h3 className='font-bold'>Desarrollo</h3>
            <a
              href='https://www.linkedin.com/in/juan-david-sanchez-hoyos-9414b817b/'
              target='_blank'
              className='cursor-pointer'
              rel='noreferrer'
            >
              <div className='flex items-center gap-2 transition-all select-none hover:scale-105 hover:text-headline'>
                <FaLinkedin className='text-lg' />
                <h3 className='font-sans'>Juan Sanchez</h3>
              </div>
            </a>
            <a
              href='https://www.linkedin.com/in/sergiolperez/'
              target='_blank'
              className='cursor-pointer'
              rel='noreferrer'
            >
              <div className='flex items-center gap-2 transition-all select-none hover:scale-105 hover:text-headline'>
                <FaLinkedin className='text-lg' />
                <h3 className='font-sans'>Sergio Perez</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
