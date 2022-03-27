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
                var check = confirm("Open this link?")
                if (check == true) {
                    // redirect to custom URL.
                    window.open('https://en.wikipedia.org/wiki/Arthropleura', '_blank');
                } else {
                    // disable the event that would be triggered when the marker is on screen
                }

            } else if (animatedMarker2 && aEntity2) {
                if (confirm("Open this link?") == true) {
                    // redirect to custom URL.
                    window.open('https://en.wikipedia.org/wiki/Pulmonoscorpius', '_blank');
                } else {
                    // disable the event that would be triggered when the marker is on screen
                }

            } else if (animatedMarker3 && aEntity3) {
                if (confirm("Open this link?") == true) {
                    // redirect to custom URL.
                    window.open('https://en.wikipedia.org/wiki/Meganeura', '_blank');
                } else {
                    // disable the event that would be triggered when the marker is on screen
                }

            } else if (animatedMarker4 && aEntity4) {
                if (confirm("Open this link?") == true) {
                    // redirect to custom URL.
                    window.open('https://dinopedia.fandom.com/wiki/Arthrolycosa', '_blank');
                } else {
                    // disable the event that would be triggered when the marker is on screen
                }

            } else if (animatedMarker5 && aEntity5 == true) {
                if (confirm("Open this link?")) {
                    // redirect to custom URL.
                    window.open('https://en.wikipedia.org/wiki/Redback_spider', '_blank');
                } else {
                    // disable the event that would be triggered when the marker is on screen
                }

            } else if (animatedMarker6 && aEntity6 == true){
                if (confirm("Open this link?")) {
                    // redirect to custom URL.
                    window.open('https://en.wikipedia.org/wiki/Proterogyrinus', '_blank');
                } else {
                    // disable the event that would be triggered when the marker is on screen
                }
            }
        })
    }
});