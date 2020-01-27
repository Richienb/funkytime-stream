"use strict"

const EventEmitter = require("events")
const { load } = require("cheerio")
const { default: got } = require("got")
const { default: ow } = require("ow")

module.exports = ({ interval = 5000 } = {}) => {
	ow(interval, ow.number)
	const emitter = new EventEmitter()
	let posts = []

	const watcher = setInterval(() => {
		got("https://funkytime.tv/forums/", {
			throwHttpErrors: false,
		}).then(({ body: res }) => {
			if (res === undefined) return
			const $ = load(res)

			const currentPosts = []
			$("#bbp_topics_widget-2 > div > ul > li > a").each((_, el) => {
				currentPosts.push({
					title: el.children[0].data,
					url: el.attribs.href,
				})
			})

			if (posts.length > 0) {
				currentPosts.forEach(({ title, url }) => {
					if (posts.every(({ title: pt }) => pt !== title)) emitter.emit("newtopic", { title, url })
				})
			}

			posts = currentPosts
		})
	}, interval)

	emitter.stop = () => clearInterval(watcher)

	return emitter
}
