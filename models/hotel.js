class Hotel {
    constructor(name, city) {
        this.name = name
        this.city = city
        this.reviews = []

    }

    reviewCount() {
        return this.reviews.length
    }

    rating() {
        if (this.reviews.length == 0) {
            return 0
        }
    }

    ratingAsStars() {
        return ''
    }

    urlSlug() {
        var underscored_name = this.name.split(' ').join('_')
        var underscored_city = this.city.split(' ').join('_')
        var stringToReturn = underscored_name + '_' + underscored_city
        return stringToReturn.toLowerCase()
    }
}


module.exports = Hotel