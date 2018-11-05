const chai = require('chai');
const expect = chai.expect;

var Review = require('../models/review')

describe('eview', function () {
    describe('constructor', function () {
        it('sets the name attribute from its inputs', function () {
            var review = new Review("Hilton Metropole", "London")
            expect(review.name).to.equal("Hilton Metropole")
        })
        it('sets the city attribute from its inputs', function () {
            var review = new Review("Hilton Metropole", "London")
            expect(review.city).to.equal("London")
        })
        it('sets the review attribute to an empty array', function () {
            var review = new Review("Hilton Metropole", "London")
            expect(hotel.reviews).to.deep.equal([])
        })
    })
}) 