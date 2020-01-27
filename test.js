const EventEmitter = require("events")
const test = require("ava")
const funkytimeStream = require(".")

test("main", (t) => {
	t.true(funkytimeStream() instanceof EventEmitter)
})
