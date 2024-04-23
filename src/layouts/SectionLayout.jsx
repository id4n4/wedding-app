export const SectionLayout = ({ children, ...props }) => {
  return (
    <section className='py-10 ' {...props}>
      {children}
    </section>
  )
}
