import Vue from 'vue'
import Hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'

export default {
	install: function (Vue, options) {
		Vue.directive('highlight', function (el) {
			let blocks = el.querySelectorAll('pre code');
			blocks.forEach((block) => {
				Hljs.highlightBlock(block)
			})
		})
	}
}