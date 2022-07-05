# Queue

A simple queue controller.

## How to use

```js
let queue = require('./queue');

queue.take('queue_name', function()
{
	// ...

	queue.free('queue_name');
});
```