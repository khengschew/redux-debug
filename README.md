# Redux Bug Hunt

## Getting Started
Steps to launch project:
1. Run `npm install`
2. Run `npm run build`
3. Run `npm start`

## Redux DevTool
You can download the Redux DevTools [here](https://github.com/reduxjs/redux-devtools).

## Bugs
### Index.jsx
- [ ] Provider must include a store

### actions.jsx
- [ ] Async function should dispatch when data has returned
- [ ] Payload format/data type must be consistent with reducers

### reducers.jsx
- [ ] Filter tests need to return boolean

### store.jsx
- [ ] Use `compose()` to integrate more than one middleware packages

### Form.jsx
- [ ] State names need to match reducers

### ToDoListItem.jsx
- [ ] To trigger action on a specific item in a list, the handler function should be a wrapper around action creator that passes in the item as an argument