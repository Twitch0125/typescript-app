import 'mocha';
var chai = require('chai')
var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();
import App from "../app.js";
import houses from "../app.js"
var House = App.House;
import { isMainThread } from "worker_threads";

describe('houses'), ()=>{
    it('should have at least 1 house in it', () => {
        expect(houses.length > 0).to.be(true);
        assert.typeOf(houses, 'House[]')
        
    });
}