AFRAME.registerComponent('markerhandler', {
    init: function () {
        const animatedMarker1 = document.querySelector("#custom-1");
        const aEntity1 = document.querySelector("#custom-model1");

        const animatedMarker2 = document.querySelector("#custom-2");
        const aEntity2 = document.querySelector("#custom-model2");

        const animatedMarker3 = document.querySelector("#custom-3");
        const aEntity3 = document.querySelector("#custom-model3");

        const animatedMarker4 = document.querySelector("#custom-4");
        const aEntity4 = document.querySelector("#custom-model4");

        const animatedMarker5 = document.querySelector("#custom-5");
        const aEntity5 = document.querySelector("#custom-model5");

        const animatedMarker6 = document.querySelector("#custom-6");
        const aEntity6 = document.querySelector("#custom-model6");
        
        this.el.sceneEl.addEventListener('markerFound', () => {
            if (animatedMarker1 && aEntity1) {
                // redirect to custom URL e.g. google.com
                window.location = 'https://www.google.com/';
            } else if (animatedMarker2 && aEntity2) {
                // redirect to custom URL e.g. google.com
                window.location = 'https://www.google.com/';
            } else if (animatedMarker3 && aEntity3) {
                // redirect to custom URL e.g. google.com
                window.location = 'https://www.google.com/';
            } else if (animatedMarker4 && aEntity4) {
                // redirect to custom URL e.g. google.com
                window.location = 'https://www.google.com/';
            } else if (animatedMarker5 && aEntity5) {
                // redirect to custom URL e.g. google.com
                window.location = 'https://www.google.com/';
            } else {
                // redirect to custom URL e.g. google.com
                window.location = 'https://www.google.com/';
            }
        })
    }
  });