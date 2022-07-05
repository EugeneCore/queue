let queues = {};

function take_queue(name, callback)
{
	if (typeof callback != 'function')
	{
		// Invalid callback

		return;
	}

	if (typeof name != 'string' || name.length < 1)
	{
		// Invalid queue name

		return;
	}

	wait_queue(name, callback);
}

function wait_queue(name, callback)
{
	if (queues[name])
	{
		// Wait

		setTimeout(wait_queue, 10, name, callback);
	}
	else
	{
		// Take

		queues[name] = true;
		callback();
	}
}

function free_queue(name)
{
	if (typeof name != 'string' || name.length < 1)
	{
		// Invalid queue name

		return;
	}

	delete queues[name];
}

module.exports =
{
	take: take_queue,
	free: free_queue
};