import EventEmitter from "events"

interface Options {
	/**
	 * Interval in milliseconds before checking for new topics.
	 * @default 5000
	*/
	interval?: number
}

interface StoppableEmitter extends EventEmitter {
	stop(): void
}

/**
 * Stream data updates from funkytime.tv.
 * @param options Options.
 * @example
 * ```
 * const funkytimeStream = require("funkytime-stream");
 *
 * funkytimeStream().on("newtopic", ({ title, url }) => console.log(title, url))
 * //=> KITi Assistant Release https://funkytime.tv/forums/topic/kiti-assistant-release/
 * ```
*/
declare function funkytimeStream(options?: Options): StoppableEmitter

export = funkytimeStream
