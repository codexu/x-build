let rem = () => {
	let ele = document.getElementsByTagName("html")[0]
	let size = document.body.clientWidth / 320 * 20
	ele.style.fontSize = size + "px"
}

export {rem}