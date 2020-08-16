const test = require("ava")
const numberDifference = require("num-diff")
const addTime = require(".")

const addTimeNowDifference = options => {
	const now = new Date().getTime()
	return numberDifference(
		now,
		addTime(now, options).getTime()
	)
}

test("main", t => {
	t.is(addTimeNowDifference({
		milliseconds: 1
	}), 1)

	t.is(addTimeNowDifference({
		seconds: 1
	}), 1 * 1000)

	t.is(addTimeNowDifference({
		minutes: 1
	}), 1 * 1000 * 60)

	t.is(addTimeNowDifference({
		hours: 1
	}), 1 * 1000 * 60 * 60)

	t.is(addTimeNowDifference({
		days: 1
	}), 1 * 1000 * 60 * 60 * 24)

	t.true(addTime.now() instanceof Date)
})
