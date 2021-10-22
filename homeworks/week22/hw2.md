## 請列出 React 內建的所有 hook，並大概講解功能是什麼

### useStatus

```js
const [value, setValue] = useStatus(initialState)
```
改變 status 狀態使用，可以透過 `setValue` 改變 `value` 的值。
`initialState` 是預設參數，只會在第一次初始 render 時被觸發。

### useEffect
```js
useEffect(() => {
  // do something...
  return(
    // clear effect
  )
}, [abc])
```
1. 當 `[abc]` 內改變才會做 do something... 內的事情。
2. 如果 `[]` 內是空的，只有第一次 render 時才會執行 do something... 內的事情，所以可以拿來做一些初始化的事情。
3. `return` 可以 clear effect，要執行下一個 effect 時會把上一個 effect 清掉。使用的時機是可以拿來清理 UserID 或是 Unmount 時。

### useContext
```js
const themes = {
  foreground: "#000000",
  background: "#eeeeee"
};

const ThemeContext = createContext(themes);

function App() {
  return (
    <ThemeContext.Provider value={themes}>
      <ThemedButton />
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: background, color: foreground }}>
      I am styled by theme context!
    </button>
  );
}

```
1. 解決多層傳遞的問題（prop drilling），可以直接用 `useContext()` 取得想要的值。
2. 需搭配 `createContext()` 一起使用，創建 Context 內的值。
3. 用法一、`<ThemeContext.Provider value={}>`  value 從父層傳下去共用的值。
4. 用法二、`const theme = useContext(ThemeContext)`，可以從 theme 取得 `useContext()` 內的值。


### useRef
```js
function App() {
  const inputRef = useRef(initialValue);
  return(
    <input ref={inputRef} type="text">
  )
}
  console.log(input.current.value)
```
1. 可以把它想成像是操作 `useState` 一樣，但畫面並不會被改變。
2. `.current` 是 react 提供的方法，可以拿到 ref 的值。 
3. 當 `.current` 屬性有變動時不會觸發 rerender

### useReducer
```js
// 設定初始值
const initialState = { count: 0}

// state 是現在的狀態， action 是想做的操作
function reducer(state, action) {
  switch (action.type){
    case: 'increment':
      return { count: state.count + 1} // name: action.payload.name
    case: 'decrement':
      return { count: state.count - 1 }
    default: 
      throw new Error() // 預設丟出 Error
  }
}

function Counter() {
  // state 是被反應的狀態，dispatch 用來讓 store 做什麼事情
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    Count: {state.count}
    // {type: 'increment'} 就是 action 的東西
    <button onClick={() => dispatch({type: 'increment'})}> + </button>
    <button onClick={() => dispatch({type: 'decrement'})}> - </button>
    </>
  )
}

```

1. 使用 `dispatch()` 發送 action 指令給 store， store 處理完 status 之後把狀態丟回給 UI 畫面。
2. 用法跟 Redux 很像，可以處理一些比較複雜的 state ，讓程式更好維護。

### useMemo

```js
const sColor = useMemo(() => {
  return {
    color: value ? "red" : "blue",
  }
}, [value])
```

1. 作用是當重新 render 時，避免複雜的運算被重複執行。
2. 給資料做使用的，可以記住 function return 的值。
3. 建議先寫一個沒有 `useMemo()` 的程式，之後再加入 `useMemo()` 做效能優化。


### useCallback

```js
  const memoizedCallback = useCallback(
    () => {
      doSomething(a, b);
    },
    [a, b],
  );
```
1. 可以把一個 function 記起來的感覺，記住這個 function。
2. 優化效能的時候使用。
### useImperativeHandle

```js
useImperativeHandle(ref, createHandle, [deps])
```

可以在父層調用子層中的 ref，選取指定的 DOM 節點

### useLayoutEffect

1. 觸發時機是 react render 完瀏覽器 paint 以前
2. 用法就像是用 `useEffect()` 一樣使用，但建議大部分還是用 `useEffect()` 比較好。

### useDebugValue

```js
useDebugValue(value)
```
在 React DevTools 中顯示自訂義 hook 的標籤

## 請列出 class component 的所有 lifecycle 的 method，並大概解釋觸發的時機點
### Mounting
- constructor 先初始化

- **componentDidMount** 
  - 在 component Mount 之後執行，適合做初始化相關的東西，component render 後才會呼叫。

### Updating
- **shouldComponentUpdate**
  1. 作用是決定要不要 call render 讓 component Update，被呼叫的時間點是在改變 state 以後。
  2. 不建議做太複雜的操作
  3. 也會決定有沒有 call componentDidUpdate

- **componentDidUpdate**
  - 在 component Update 之後執行（ state 改變之後呼叫）
  - `componentDidUpdate(prevProps, prevState)`可以拿到舊的 props 跟舊的 State。
### Unmounting
- **componentWillUnmount**
  - 做清除東西的事情，可以避免 DOM 元素不在畫面上造成的錯誤。
  - 在 component Unmount 之前執行（觸發時機是 unmount 前正要 unmount 時）通常跟 componentDidMount 成對使用。

## 請問 class component 與 function component 的差別是什麼？
1. lifecycle 不一樣，一個用 JS 的 class 的方式思考，一個用 function 的方式思考。
2. class component 關注的是「生命週期」要做什麼，
function component 每一次 render，都是「重新」呼叫一次 function，並且會記住「當下」傳入的值。



## uncontrolled 跟 controlled component 差在哪邊？要用的時候通常都是如何使用？

### uncontrolled
uncontrolled 就是沒有被 react control 的元素，可以用 `document.querySelector` 選到 class 名稱，直接對那個 DOM 改變元素。

或是用 react 內建的 useRef 的方式，它可以像 status 一樣操作但是 rerender 的時候不會改變 DOM 上的元素，可以用 current 拿到 ref 的值。
### controlled
controlled 就是被 react 控制的元素，需要用 `useState` 才可以改變 DOM 的值。