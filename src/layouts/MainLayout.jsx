export const MainLayout = ({ children, ...props }) => {
  return (
    <main className='flex flex-col items-center justify-center gap-5 px-10' {...props}>
      {children}
    </main>
  )
}
