    /**
     * MerkleTree测试
     *
     */
    const { MerkleTree } = require('merkletreejs')
    const SHA256 = require('crypto-js/sha256')
    const { SHA512 } = require('crypto-js')

    const leaves = ['d', 'c', 'b', 'a']
    const tree = new MerkleTree(leaves, SHA256, )
    const proof = tree.getProof("b")
    console.log("MBr:")
    console.log(proof)
    const root = tree.getRoot().toString('hex')
    console.log(tree.verify(proof, "b", root))



    // const badLeaves = ['a', 'x', 'c'].map(x => SHA256(x))
    // const badTree = new MerkleTree(badLeaves, SHA256)
    // const badLeaf = SHA256('x')
    // const badProof = tree.getProof(badLeaf)
    // console.log(tree.verify(badProof, leaf, root)) // false