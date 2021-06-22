var app = new Vue({
    el: '#app',
    data() {
        return {
            images: [
                {
                    imageId: '1',
                    fullSize: 'Images/FirstGallery/christmasCas.jpg',
                    thumb: 'Images/Thumbnails/christmasCasTn.jpg',
                    imageDescription: 'Behold, Castiel.'
                },
                {
                    imageId: '2',
                    fullSize: 'Images/FirstGallery/chairCaesar.JPG',
                    thumb: 'Images/Thumbnails/chairCaesarTn.JPG',
                    imageDescription: ''
                },
                {
                    imageId: '3',
                    fullSize: 'Images/FirstGallery/caesarEyes.JPG',
                    thumb: 'Images/Thumbnails/caesarEyesTn.JPG',
                    imageDescription: 'Behold, Caesar.'
                },
                {
                    imageId: '4',
                    fullSize: 'Images/FirstGallery/deskCas.JPG',
                    thumb: 'Images/Thumbnails/deskCasTn.JPG',
                    imageDescription: ''
                },
                {
                    imageId: '5',
                    fullSize: 'Images/FirstGallery/fireCaesar.jpg',
                    thumb: 'Images/Thumbnails/fireCaesar.jpg',
                    imageDescription: ''
                },
                {
                    imageId: '6',
                    fullSize: 'Images/FirstGallery/nowCaesar.jpg',
                    thumb: 'Images/Thumbnails/nowCaesar.jpg',
                    imageDescription: ''
                },
                {
                    imageId: '7',
                    fullSize: 'Images/FirstGallery/podCas.JPG',
                    thumb: 'Images/Thumbnails/podCasTn.JPG',
                    imageDescription: ''
                },
                {
                    imageId: '8',
                    fullSize: 'Images/FirstGallery/reclinerCaesar.JPG',
                    thumb: 'Images/Thumbnails/reclinerCaesarTn.JPG',
                    imageDescription: ''
                },
                {
                    imageId: '9',
                    fullSize: 'Images/FirstGallery/relaxedCas.jpg',
                    thumb: 'Images/Thumbnails/relaxedCasTn.jpg',
                    imageDescription: ''
                },
                {
                    imageId: '10',
                    fullSize: 'Images/FirstGallery/stretchingCas.jpg',
                    thumb: 'Images/Thumbnails/stretchingCasTn.jpg',
                    imageDescription: ''
                },
                {
                    imageId: '11',
                    fullSize: 'Images/FirstGallery/tallCaesar.jpg',
                    thumb: 'Images/Thumbnails/tallCaesarTn.jpg',
                    imageDescription: ''
                },
                {
                    imageId: '12',
                    fullSize: 'Images/FirstGallery/togetherPlaying.jpg',
                    thumb: 'Images/Thumbnails/togetherPlayingTn.jpg',
                    imageDescription: ''
                },
                {
                    imageId: '13',
                    fullSize: 'Images/FirstGallery/towelCas.jpg',
                    thumb: 'Images/Thumbnails/towelCasTn.jpg',
                    imageDescription: ''
                }
            ],
            activeImage: 0
        }
    },
    computed: {
        currentImage() {
            return this.images[this.activeImage].fullSize;
        }
    },
    methods: {
        nextImage() {
            var active = this.activeImage + 1;
            if(active >= this.images.length) {
                active = 0;
            }
            this.activateImage(active);
        },
        previousImage() {
            var active = this.activeImage - 1;
            if(active < 0) {
                active = this.images.length - 1;
            }
            this.activateImage(active);
        },
        activateImage(imageIndex) {
            this.activeImage = imageIndex;
        }
    }
})