# React hooks using decorators

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

---

## Step

```tsx
class C {
  @inject.state('foo')
  render ([foo, setFoo]) {
    return (
      <div>
        {foo}
      </div>
    )
  }
}
```

```ts
export const inject = {
  state: name => {
    return (target, key, desc) => {
      const originalValue = desc.value
      const desc.value = () => {
        const v = target[stateFindSymbol](name)  // find that state
        originalValue.call(null, v)
      }
      return desc
    }
  }
}
```
