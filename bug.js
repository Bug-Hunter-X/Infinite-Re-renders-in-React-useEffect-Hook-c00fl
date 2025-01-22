```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: setting count to 0 will always trigger re-render
    setCount(0);
  }, []);

  return <div>Count: {count}</div>;
}
```