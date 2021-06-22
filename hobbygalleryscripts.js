var app = new Vue({
    el: '#app',
    data() {
        return {
            images: [
                {
                    imageId: '1',
                    fullSize: 'Images/SecondGallery/hhn.jpg',
                    thumb: 'Images/Thumbnails/hhnTn.jpg',
                    imageDescription: 'Halloween Horror Nights at Universal Orlando'
                },
                {
                    imageId: '2',
                    fullSize: 'Images/SecondGallery/hhn2.jpg',
                    thumb: 'Images/Thumbnails/hhn2Tn.jpg',
                    imageDescription: 'Halloween Horror Nights at Universal Orlando'
                },
                {
                    imageId: '3',
                    fullSize: 'Images/SecondGallery/orlando.jpg',
                    thumb: 'Images/Thumbnails/orlandoTn.jpg',
                    imageDescription: ''
                },
                {
                    imageId: '4',
                    fullSize: 'Images/SecondGallery/cyclops.jpg',
                    thumb: 'Images/Thumbnails/cyclopsTn.jpg',
                    imageDescription: 'Cyclops and me at Islands of Adventure'
                },
                {
                    imageId: '5',
                    fullSize: 'Images/SecondGallery/hogwarts.jpg',
                    thumb: 'Images/Thumbnails/hogwartsTn.jpg',
                    imageDescription: 'Hogwarts at Harry Potter World'
                },
                {
                    imageId: '6',
                    fullSize: 'Images/SecondGallery/hpwand.jpg',
                    thumb: 'Images/Thumbnails/hpwandTn.jpg',
                    imageDescription: 'A friend and me posing with our brand new wands at HP World'
                },
                {
                    imageId: '7',
                    fullSize: 'Images/SecondGallery/discgolf1.jpg',
                    thumb: 'Images/Thumbnails/discgolf1Tn.jpg',
                    imageDescription: 'Disc golf is one of my favorite things to do'
                },
                {
                    imageId: '8',
                    fullSize: 'Images/SecondGallery/discgolf2.jpg',
                    thumb: 'Images/Thumbnails/discgolf2Tn.jpg',
                    imageDescription: ''
                },
                {
                    imageId: '9',
                    fullSize: 'Images/SecondGallery/dominion.jpg',
                    thumb: 'Images/Thumbnails/dominionTn.jpg',
                    imageDescription: 'A game called Dominion'
                },
                {
                    imageId: '10',
                    fullSize: 'Images/SecondGallery/catan.jpg',
                    thumb: 'Images/Thumbnails/catanTn.jpg',
                    imageDescription: 'A game called Settlers of Catan'
                },
                {
                    imageId: '11',
                    fullSize: 'Images/SecondGallery/seasons.jpg',
                    thumb: 'Images/Thumbnails/seasonsTn.JPG',
                    imageDescription: 'A game called Seasons'
                },
                {
                    imageId: '12',
                    fullSize: 'Images/SecondGallery/hiking.jpg',
                    thumb: 'Images/Thumbnails/hikingTn.JPG',
                    imageDescription: 'Hiking in Colorado'
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