const chai = require('chai');
const expect = chai.expect;

var Review = require('../models/review')

describe('Review', function () {
    describe('constructor', function () {
        it('returns the rating given in review', function () {
            var review = new Review(5, "friendly staff, very clean", "01.01.2018")
            expect(review.rating).to.equal(5)
        })
        it('returns the comment for the review', function () {
            var review = new Review(5, "friendly staff, very clean", "01.01.2018")
            expect(review.text).to.equal("friendly staff, very clean")
        })
        it('returns the date that the review was written', function () {
            var review = new Review(5, "friendly staff, very clean", "01.01.2018")
            expect(review.date).to.equal("01.01.2018")
        })
    })
})
