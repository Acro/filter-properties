module.exports = function (whitelist, object) {

	var process = function (output, current_property) {
		
		if (whitelist.indexOf(current_property) > -1) {
			output[current_property] = object[current_property]
		}

		return output
		
	}

	return Object.keys(object).reduce(process, {})
}