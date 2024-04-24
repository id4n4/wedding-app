export const SectionLayout = ({ children, ...props }) => {
  return (
    <section className='py-10 overflow-hidden' {...props}>
      {children}
    </section>
  )
}
