class THImages {
    constructor(a) {
        this.a = a
    }
    compression (canvas, imgSrc) {
        let image = new Image()
        let context = canvas.getContext('2d')
        let base64 = ''
        image.src = imgSrc
        if (image.complete) {
            context.drawImage(image, 0, 0, 500, 500)
            base64 = canvas.toDataURL('image/png', 1)
            return base64
        } else {
            context.onload = (e) => {
                console.log('complete', e)
                canvas.drawImage(image, 0, 0, 500, 500)
                base64 = canvas.toDataURL('image/png', 1)
                return base64
            }
        }
    }
}

module.exports = THImages
