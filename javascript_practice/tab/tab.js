//即時関数
(() => {
	const $doc = document;
	const $tab = $doc.getElementById('js-tab');
	const $nav = $tab.querySelectorAll('[data-nav]');
	const $content = $tab.querySelectorAll('[data-content]');
	const ACTIVE_CLASS = 'is-active';
	const navLen = $nav.length;

	//初期化
	const init = () => {
		$content[0].style.display = 'block';
	};
	init();

	//クリックイベント
	const handleClick = (e) => {
		e.preventDefault();

		//クリックされたnacと、そのdataを取得
		const $this = e.target;
		const targetVal = $this.dataset.nav;

		//対象外のnav, contentsうべて一旦リセットする
		for (let i = 0; i < navLen; i++) {
			$content[i].style.display = 'none';
			$nav[i].classList.remove(ACTIVE_CLASS);
		}

		//対象のコンテンツをアクティブ化する
		$tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
		$nav[targetVal].classList.add(ACTIVE_CLASS);
		console.log(targetVal, $nav[targetVal].classList)
	};

	//全navに対して関数を適応・発火
	for (let i = 0; i < navLen; i++) {
		$nav[i].addEventListener('click', (e) => handleClick(e));
	}

})();






