AFRAME.registerComponent('rotater',{
    schema: {
        rotation: { type: "number", default: 0 }    
    },
    init: function () {
        window.addEventListener("keydown", (e) => {
            if (e.key === "ArrowRight") {
                if (this.data.rotation < 0.1) {
                    this.data.rotation += 0.01;
                }
            }
            if (e.key === "ArrowLeft") {
                if (this.data.rotation > -0.1) {
                  this.data.rotation -= 0.01;
                }
            }
        });
      },
    tick: function () {
        var landRotation = this.el.getAttribute("rotation");
    
        landRotation.y += this.data.rotation;
    
        this.el.setAttribute("rotation", {
          x: landRotation.x,
          y: landRotation.y,
          z: landRotation.z
        });
    }
});