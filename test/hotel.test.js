const chai = require('chai');
const expect = chai.expect;

var Hotel = require('../models/hotel')

describe('Hotel', function () {
    describe('constructor', function () {
        it('sets the name attribute from its inputs', function () {
            var hotel = new Hotel("Hilton Metropole", "London")
            expect(hotel.name).to.equal("Hilton Metropole")
        })
        it('sets the city attribute from its inputs', function () {
            var hotel = new Hotel("Hilton Metropole", "London")
            expect(hotel.city).to.equal("London")
        })
        it('sets the review attribute to an empty array', function () {
            var hotel = new Hotel("Hilton Metropole", "London")
            expect(hotel.reviews).to.deep.equal([])
        })
    })


    describe('reviewCount', function () {
        it('returns 0 when there are no reviews', function () {
            var hotel = new Hotel('Hilton Metropole', 'London')
            var result = hotel.reviewCount()
            expect(result).to.equal(0)
        })
    })

    describe('rating', function () {
        it('returns 0 when there are no reviews', function () {
            var hotel = new Hotel('Hilton Metropole', 'London')
            var result = hotel.rating()
            expect(result).to.equal(0)
        })
    })

    describe('ratingAsStars', function () {
        it('returns 0 when there are no ratings', function () {
            var hotel = new Hotel('Hilton Metropole', 'London')
            var result = hotel.ratingAsStars()
            expect(result).to.equal('')
        })
    })

    describe('urlSlug', function () {
        it('returns url slug based from name and city', function () {
            var hotel = new Hotel('Hilton Metropole', 'London')
            var result = hotel.urlSlug()
            expect(result).to.equal("hilton_metropole_london")
        })
    })

    it('returns handles cities with multiple words', function () {
        var hotel = new Hotel('Crowne Plaza Deluxe', 'San Fransisco')
        var result = hotel.urlSlug()
        expect(result).to.equal("crowne_plaza_deluxe_san_fransisco")
    })

});

