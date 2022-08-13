(() => {

	class Accordion {
		//初期化
		constructor(obj) {

			console.log(obj.hookName);
			const $elm = document.querySelector(obj.hookName);
			const $trigger = $elm.getElementsByTagName(obj.tagName);

			const triggerLen = $trigger.length;
			for (let i = 0; i < triggerLen; i++) {
				$trigger[i].addEventListener('click', (e) => this.clickHandler(e));
			}
		}

		//クリックされたら実行される処理
		clickHandler = (e) => {
			e.preventDefault();
			console.log("click");

			const $target = e.currentTarget;
			const $content = $target.nextElementSibling;
			if ($content.style.display === 'block') {
				$content.style.display = 'none';
			} else {
				$content.style.display = 'block';
			}
		};
	}

	const fuckingAccordion = new Accordion({
		hookName: '#js-faq',
		tagName: 'p'
	});

	const dummyAccordion = new Accordion({
		hookName: '#js-accordion',
		tagName: 'a'
	});

	const miniAccordion = new Accordion({
		hookName: '#js-accordion-mini',
		tagName: 'dt'
	});


})();