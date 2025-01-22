```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: only runs once after initial render
    // Setting a value here will run once.
    console.log('Component mounted');
  }, []);

  return <div>Count: {count}</div>;
}
```