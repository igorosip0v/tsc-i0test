import {useEffect, useState} from 'preact/hooks'

export const Hello = (props: {name: string}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setInterval(() => setCount(p => p +1), 1000)
  }, [])

  return <div>Hello {props.name} {count}</div>
}