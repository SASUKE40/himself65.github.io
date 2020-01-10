# React hooks using class

this is one of my thinking, not so much accurate.

```tsx
@set.state('foo', null)
class Component {
  @effect([])
  @inject.props()
  @inject.state('foo')
  onMounted = (props, [foo, setFoo]) => {
    setFoo(fetch(props.api).then(res => res.data))
  }

  @inject.state('foo')
  render ([foo]) {
    return (
      <div>
        {foo}
      </div>
    )
  }
}
```

is same as

```tsx
const Component = props => {
  const [foo, setFoo] = useState(null) 
  useEffect(() => {
    fetch(props.api).then(res => setState(res.data))
  }, [])
  return (
    <div>
      {foo}
    </div>
  )
}
```