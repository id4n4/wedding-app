import heart from '../../../assets/SVGs/heart.svg'

export const Week = () => {
  return (
    <div className='flex flex-col items-center space-y-2'>
      <h1 className='text-4xl tracking-[1rem] uppercase'>Agosto</h1>
      <div className='flex justify-center gap-3 text-xl md:gap-10'>
        <div className='flex flex-col items-center' >
          <h2>Dom</h2>
          <p>18</p>
        </div >
        <div className='flex flex-col items-center' >
          <h2>Lun</h2>
          <p>19</p>
        </div>
        <div className='flex flex-col items-center'>
          <h2>Mar</h2>
          <p>20</p>
        </div>
        <div className='flex flex-col items-center'>
          <h2>Mie</h2>
          <p>21</p>
        </div>
        <div className='flex flex-col items-center'>
          <h2>Jue</h2>
          <p>22</p>
        </div>
        <div className='flex flex-col items-center'>
          <h2>Vie</h2>
          <p>23</p>
        </div>
        <div className='flex flex-col items-center'>
          <h2>Sab</h2>
          <div className='relative'>
            <img src={heart} alt='heart' className='z-0 absolute  scale-[2] bottom-1 -right-1 ' />
            <p className='relative z-20'>24</p>
          </div>
        </div>

      </div>
    </div>
  )
}
