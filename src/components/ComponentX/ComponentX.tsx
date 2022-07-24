export type ComponentXProps = {
  label?: string
}

const ComponentX = ({ label }: ComponentXProps) => {
  return <button>{label ?? ''}</button>
}

export default ComponentX
