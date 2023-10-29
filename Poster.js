AFRAME.registerComponent("comics-poster", {
    schema : {
        state : {type : "string", default : "comics-list"}
    },

    init : function(){
        this.placesContainer = this.el
        this.createPoster()
    },

    createPoster : function(){
        const thumbnailsRef = [
            {
                id : "amazingspider-man",
                title : "Amazing Spiderman",
                url : "./assets/AmazingSpiderMan.jpg"
            },
            {
                id : "captain-america",
                title : "Captain America",
                url : "./assets/CaptainAmerica.jpg"
            },
            {
                id : "outer-space",
                title : "Outer Space",
                url : "./assets/OuterSpace.jpg"
            },
            {
                id : "super-man",
                title : "Superman",
                url : "./assets/Superman.jpg"
            }
        ]
        let previousXposition = -60
        for (var item of thumbnailsRef){
            const posX = previousXposition + 25
            const posY = 10
            const posZ = -40
            const position = {x : posX, y : posY, z : posZ}
            previousXposition = posX

            const borderEl = this.createBorder(position, item.id)

            const thumbnail = this.createThumbnail(item)
            borderEl.appendChild(thumbnail)

            this.placesContainer.appendChild(borderEl)
        }
    },

    createBorder : function(position, id){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("id", id)
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("geometry",)
        entityEl.setAttribute("position", position)
        entityEl.setAttribute("material", {color : "#0077cc", opacity : 1})
        return entityEl;
    },

    createThumbnail : function(item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("geometry", {primitive : "plane", width : "20", height : "28"})
        entityEl.setAttribute("material", {src : item.url})
        return entityEl;
    }
})