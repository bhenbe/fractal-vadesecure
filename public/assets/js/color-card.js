var Switchers = document.querySelectorAll(".color-card__code-switcher");

for (var i = 0; i < Switchers.length ; i++) {
    Switchers[i].addEventListener("click", 
        function (event) {
            let colorCode = this.getAttribute('data-color');
		 		let colorType = this.getAttribute('data-type');
		 		let nextColorType = '';
		 		switch(colorType){
					case "rgb":
						colorCode = colorcolor( colorCode, "hex" );
						colorType = "hex";
						nextColorType = "hsl";
						break;
					case "hex":
						colorCode = colorcolor( colorCode, "hsl" );
						colorType = "hsl";
						nextColorType = "rgb";
						break;
					case "hsl":
						colorCode = colorcolor( colorCode, "rgb" );
						colorType = "rgb";
						nextColorType = "hex";
						break;
					default:
						console.log('oups');
						break;
				}
		 		this.setAttribute('data-color', colorCode);
		 		this.setAttribute('data-type', colorType);
		 		this.innerHTML = nextColorType;
		 		let colorLabel = this.parentNode.querySelector('.color-card__code-label');
		 		colorLabel.innerHTML = colorCode;
		 		return false;
        }, 
        false);
}