var helper = require("node-red-node-test-helper");
var alpacaNode = require("../alpaca-node")

describe("alpaca node unit test" , () => {
    afterEach(()=>{
        helper.unload()
    })
    it("should be loaded",(done)=>{
        var flow = [{ id: "n1", type: "alpaca-node", name: "alpaca node" }];
        helper.load(alpacaNode,flow,()=>{
            var n1 = helper.getNode("n1");
            n1.should.have.property('name', 'alpaca node');
            done();
        })
    })
})