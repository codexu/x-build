class Touch{
	constructor(el, type, cb) {
		// 触摸起始坐标
		this.startScreenX = 0
		this.startScreenY = 0
		// 触摸结束坐标
		this.endScreenX = 0
		this.endScreenY = 0
		// X轴、Y轴坐标差值
		this.diff_X = 0
		this.diff_Y = 0
		// X轴、Y轴坐标差值绝对值
		this.diff_Abs_X = 0
		this.diff_Abs_Y = 0
		// 防误触距离
		this.slideMin = 50
		this.tapMin = 10
		// 计时器
		this.timer = null
		this.time = 0

		this.event(el, type, cb)
	}
  
	// 事件
	event(el, type, cb) {
		el.addEventListener('touchstart', (e) => {
			e.preventDefault()
			this.startScreen(e)
			this.endScreen(e)
			this.timer = setInterval(() => {
				this.time = this.time + 10
			}, 10)
		}, {
			passive: false
		})

		el.addEventListener('touchmove', (e) => {
			this.endScreen(e)
		})

		el.addEventListener('touchend', (e) => {
			e.preventDefault()
			clearInterval(this.timer)
			this.diff_X = this.startScreenX - this.endScreenX
			this.diff_Y = this.startScreenY - this.endScreenY
			this.diff_Abs_X = Math.abs(this.diff_X),
			this.diff_Abs_Y = Math.abs(this.diff_Y)
			switch (type) {
				case 'tap':
					this.tap(cb)
					break
				case 'swipUp':
					this.swipUp(cb)
					break
				case 'swipDown':
					this.swipDown(cb)
					break
				case 'swipRight':
					this.swipRight(cb)
					break
				case 'swipLeft':
					this.swipLeft(cb)
					break
			}
		}, {
			passive: false
		})
	}

	startScreen(e) {
		this.startScreenX = e.touches[0].screenX
		this.startScreenY = e.touches[0].screenY
	}
	endScreen(e) {
		this.endScreenX = e.touches[0].screenX
		this.endScreenY = e.touches[0].screenY
	}

	tap(cb) {
		if (this.diff_Abs_X < this.tapMin
				&& this.diff_Abs_Y < this.tapMin) {
			cb()
		}
	}
	swipUp(cb) {
		if (this.diff_Abs_X < this.diff_Abs_Y
			&& this.diff_Abs_Y > this.tapMin
			&& this.diff_Y >= this.slideMin) {
			cb()
		}
	}
	swipDown(cb) {
		if (this.diff_Abs_X < this.diff_Abs_Y
			&& this.diff_Abs_Y > this.tapMin
			&& this.diff_Y <= -this.slideMin) {
			cb()
		}
	}
	swipRight(cb) {
		if (this.diff_Abs_X > this.diff_Abs_Y
			&& this.diff_Abs_X > this.tapMin
			&& this.diff_X >= this.slideMin) {
			cb()
		}
	} 
	swipLeft(cb) {
		if (this.diff_Abs_X > this.diff_Abs_Y
			&& this.diff_Abs_X > this.tapMin
			&& this.diff_X <= -this.slideMin) {
			cb()
		}
	}
}
  
export default Touch