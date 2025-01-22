# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook that leads to infinite re-renders.  The provided `MyComponent` attempts to reset the `count` state within the `useEffect` hook, creating an infinite loop.

## Bug Description
The `useEffect` hook, when called without dependencies, runs after every render.  In this case, setting `setCount(0)` within the hook triggers a re-render, which, in turn, re-runs the `useEffect` hook, creating an infinite loop. This example highlights how improper usage of `useEffect` without dependencies can cause performance issues and application crashes.

## Solution
The solution lies in correctly managing the `useEffect` hook's dependencies. By adding `count` as a dependency, the `useEffect` hook only runs when `count` changes, effectively breaking the infinite loop.