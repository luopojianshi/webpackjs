import _ from 'lodash'
import printMe from './print.js'
import './styles.css'

function component () {
	var element = document.createElement('div')
	var btn = document.createElement('button')

	// // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
	// // Lodash, currently included via a script, is required for this line to work

	// Lodash, now imported by this script
	element.innerHTML = _.join(['Hello', 'webpack'], ' ')

	btn.innerHTML = 'Click me and check the console!'
	btn.onclick = printMe

	element.appendChild(btn)

	return element
}

// 当 print.js 改变导致页面重新渲染时, 重新获取渲染的元素
let element = component()
document.body.appendChild(element)

if (module.hot) {
	module.hot.accept('./print.js', function () {
		console.log('Accepting the updated printMe module!')
		document.body.removeChild(element)
		// 重新渲染页面后, component 更新 click 事件处理
		element = component()
		document.body.appendChild(element)
	})
}

