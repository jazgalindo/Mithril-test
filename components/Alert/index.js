import { Colors } from '../../styles/colors'

/**
 * Alert
 * @param {Any} children
 * @param {'error' | 'success'} type
 */
const Alert = ({ children, type = 'error' }) => {
  return (
    <>
      <div>{children}</div>
      <style jsx>
        {`
          div {
            background: ${type === 'error' ? Colors.wePeep : Colors.tara};
            color: ${type === 'error' ? Colors.tamarillo : Colors.everglade};
            font-size: 0.8rem;
            width: 300px;
            padding: 0.5rem;
            border-radius: 3px;
            margin: 0.2rem;
          }
        `}
      </style>
    </>
  )
}

export default Alert
