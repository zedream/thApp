class THImages {
    constructor (weight, height, ctxWeight, ctxHeight) {
        this.weight = weight
        this.height = height
        this.ctxWeight = ctxWeight
        this.ctxHeight = ctxHeight
        this.scale = 1
        this.ctxScale = 1
    }
    compression (canvas, imgSrc) {
        console.log(this.weight, this.height)
        let image = new Image()
        let context = canvas.getContext('2d')
        let base64 = ''
        let oriImageW = 0
        let oriImageH = 0
        image.src = imgSrc
        return new Promise((resolve, reject) => {
            image.onload = (e) => {
                oriImageW = image.naturalWidth
                oriImageH = image.naturalHeight
                this.scale = (image.naturalWidth / this.weight).toFixed(3)
                this.ctxScale = (oriImageW / this.ctxWeight).toFixed(3)
                // canvas.width = oriImageW / this.scale
                // canvas.height = oriImageH / this.scale
                canvas.width = this.ctxWeight
                canvas.height = this.ctxHeight
                // context.drawImage(image, 0, 0, oriImageW / this.scale, oriImageH / this.scale)
                // context.clearRect(0, 0, 200, 200)
                context.drawImage(image, 200, 200, this.ctxWeight, this.ctxHeight, 0, 0, this.ctxWeight, this.ctxHeight)
                base64 = canvas.toDataURL('image/png', 0.1)
                resolve(base64)
            }
            image.onerror = (err) => {
                reject(err)
            }
            image.onabort = (err) => {
                reject(err)
            }
        })
        // if (image.complete) {
        //     oriImageW = image.naturalWidth
        //     oriImageH = image.naturalHeight
        //     this.scale = (image.naturalWidth / this.weight).toFixed(3)
        //     canvas.width = oriImageW / this.scale
        //     canvas.height = oriImageH / this.scale
        //     context.drawImage(image, 0, 0, oriImageW / this.scale, oriImageH / this.scale)
        //     base64 = canvas.toDataURL('image/png', 0.1)
        //     return base64
        // } else {
        //
        // }
    }
    getCss (o, key) {
        return o.currentStyle ? o.currentStyle[key] : document.defaultView.getComputedStyle(o, null)[key]
    }
}

module.exports = THImages
