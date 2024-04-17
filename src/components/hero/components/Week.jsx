import heart from '../../../assets/SVGs/heart.svg'

export const Week = () => {
  return (
    <div className='flex flex-col items-center space-y-2'>
      <h1 className='text-4xl tracking-widest uppercase'>Agosto</h1>
      <div className='flex justify-center gap-2 md:gap-7'>
        <div >
          <h2>Dom</h2>
          <p>18</p>
        </div>
        <div >
          <h2>Lun</h2>
          <p>19</p>
        </div>
        <div >
          <h2>Mar</h2>
          <p>20</p>
        </div>
        <div >
          <h2>Mie</h2>
          <p>21</p>
        </div>
        <div >
          <h2>Jue</h2>
          <p>22</p>
        </div>
        <div >
          <h2>vie</h2>
          <p>23</p>
        </div>
        <div className='relative '>
          <h2>sab</h2>
          <img src={heart} alt='heart' className='z-0 absolute bottom-2 scale-[2] -right-1' />
          <p className='relative z-20'>24</p>
        </div>

      </div>
    </div>
  )
}
