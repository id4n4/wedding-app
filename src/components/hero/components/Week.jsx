import { IoHeartOutline } from 'react-icons/io5'

export const Week = () => {
  return (
    <div className='flex flex-col items-center space-y-2'>
      <h1 className='text-4xl tracking-widest uppercase'>Agosto</h1>
      <div className='flex justify-center gap-2 md:gap-7'>
        <div className='lobster'>
          <h2>Dom</h2>
          <p>18</p>
        </div>
        <div className='lobster'>
          <h2>Lun</h2>
          <p>19</p>
        </div>
        <div className='lobster'>
          <h2>Mar</h2>
          <p>20</p>
        </div>
        <div className='lobster'>
          <h2>Mie</h2>
          <p>21</p>
        </div>
        <div className='lobster'>
          <h2>Jue</h2>
          <p>22</p>
        </div>
        <div className='lobster'>
          <h2>vie</h2>
          <p>23</p>
        </div>
        <div className='relative lobster'>
          <h2>sab</h2>
          <p>24</p>
          <IoHeartOutline className='absolute text-5xl -bottom-2.5 -left-1.5 ' />
        </div>

      </div>
    </div>
  )
}
